import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

import { curly } from 'node-libcurl'

export default class FindsController {
  public async index(ctx: HttpContextContract) {
    await ctx.auth.use('api').authenticate()

    const findSchema = schema.create({
      id: schema.number([rules.unsigned()]),
    })

    const payload = await ctx.request.validate({ schema: findSchema })

    const { data: dummy } = await curly.get('https://kasirpintar.co.id/allAddress.txt', {
      httpHeader: ['Content-Type: application/json'],
    })

    const parseDummy = JSON.parse(dummy)

    const joinData = [
      ...parseDummy.address_kecamatan,
      ...parseDummy.address_provinsi,
      ...parseDummy.address_kelurahan,
      ...parseDummy.address_kota,
    ]

    const filterData = joinData.filter((o: any) => o.id === payload.id.toString())

    if (!filterData[0]) {
      ctx.response.status(204)
      ctx.response.json({})
    }

    ctx.response.header('content-type', 'application/json')
    ctx.response.json({ status: 'success', data: [filterData[0]] })
  }

  public async kota(ctx: HttpContextContract) {
    await ctx.auth.use('api').authenticate()

    const kotaSchema = schema.create({
      kota_id: schema.number([rules.unsigned()]),
    })

    const payload = await ctx.request.validate({ schema: kotaSchema })

    const { data: dummy } = await curly.get('https://kasirpintar.co.id/allAddress.txt', {
      httpHeader: ['Content-Type: application/json'],
    })

    const parseDummy = JSON.parse(dummy)

    const filterData = parseDummy.address_kecamatan.filter(
      (o: any) => o.kota_id === payload.kota_id.toString()
    )

    if (filterData.length === 0) {
      ctx.response.status(204)
      ctx.response.json({})
    }

    ctx.response.header('content-type', 'application/json')
    ctx.response.json({ status: 'success', data: [filterData] })
  }
}
