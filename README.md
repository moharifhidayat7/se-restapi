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
4. Jalankan aplikasi dengan ```node ace serve --watch```
5. Uji coba dengan file Postman "Kasir Pintar.postman_collection.json"
6. Jalankan request Login untuk mendapatkan token.
7. Jalankan request lainnya dengan mengganti Authorization Header dengan token yang sudah didapat.
