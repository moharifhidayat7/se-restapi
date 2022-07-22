import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async login(ctx: HttpContextContract) {
    const email = ctx.request.input('email')
    const password = ctx.request.input('password')

    const user = await User.query().where('email', email).firstOrFail()

    if (!(await Hash.verify(user.password, password))) {
      return ctx.response.unauthorized('Invalid credentials')
    }

    const token = await ctx.auth.use('api').generate(user, {
      expiresIn: '1days',
    })
    return token
  }
}
