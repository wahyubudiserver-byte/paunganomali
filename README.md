# PAUNGANOMALI

Dashboard responsif untuk:
- Memeriksa IP publik jaringan yang sedang digunakan.
- Menguji koneksi proxy DataImpulse melalui fungsi backend Vercel.

## Deploy paling mudah: Vercel
1. Ekstrak ZIP ini.
2. Buat repository GitHub baru, misalnya `paunganomali`.
3. Upload semua isi folder ini ke repository (pastikan `index.html`, `package.json`, `vercel.json`, dan folder `api` berada di root).
4. Buka https://vercel.com/ lalu masuk dengan GitHub dan pilih **Add New → Project**.
5. Import repository `paunganomali`, lalu klik **Deploy**.
6. Di Vercel buka **Project → Settings → Environment Variables**.
7. Tambahkan:
   - `DATAIMPULSE_LOGIN` = login proxy dari akun DataImpulse milikmu
   - `DATAIMPULSE_PASSWORD` = password proxy dari akun DataImpulse milikmu
8. Terapkan ke Production (dan Preview jika dibutuhkan), lalu lakukan **Redeploy**.
9. Buka URL Vercel dan tekan **Tes Koneksi Proxy**.

Jangan masukkan kredensial ke `index.html`, GitHub, atau chat. Environment variables hanya disetel di dashboard hosting. Jangan membagikan akses project Vercel kepada orang yang tidak dipercaya.

## Penting
- IP Checker memakai layanan pihak ketiga `ipwho.is` untuk menampilkan IP publik dan informasi perkiraan jaringan.
- Tes proxy memakai endpoint proxy DataImpulse `gw.dataimpulse.com:823`. Pastikan endpoint dan kredensial sesuai dengan pengaturan akunmu.
- Implementasi ini hanya menguji koneksi dan menampilkan IP yang terlihat dari layanan IP. Ini bukan API untuk membaca saldo, kuota, atau laporan penggunaan akun DataImpulse.
- Untuk akses statistik akun atau API akun, gunakan dokumentasi resmi dan token dengan izin yang sesuai; jangan menebak endpoint.
- GitHub Pages hanya hosting statis dan tidak dapat menjalankan fungsi `api/proxy-check.js` sebagai backend. Jika memakai GitHub Pages, IP Checker bisa berfungsi, tetapi tombol tes DataImpulse tidak akan berjalan tanpa backend terpisah. Vercel direkomendasikan untuk paket ini.

## Menjalankan lokal
Install Node.js, kemudian dari folder project:
```bash
npm install
npm run dev
```
Atur environment variables melalui pengaturan project Vercel atau environment lokal sebelum menguji proxy.
