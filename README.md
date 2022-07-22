# se-restapi

# Tech-Stack
- Framework: Adonis.js
- Database: Sqllite

# Cara menjalankan
1. Clone Repository
2. Jalankan di terminal
```
cd se-restapi
npm install
```
3. Rename file ```.env.example``` menjadi ```.env```
4. Jalankan migration dengan ```node ace migration:run```
5. Jalankan seeder dengan ```node ace db:seed```
6. Jalankan aplikasi dengan ```node ace serve --watch```
7. Uji coba dengan file Postman "Kasir Pintar.postman_collection.json"
8. Jalankan request login untuk mendapatkan token.
9. Jalankan request lainnya dengan mengganti Authorization Header dengan token yang sudah didapat.
