# Panduan Deployment Google Apps Script Web App untuk Virtual Laboratory

Berikut langkah-langkah untuk mendeploy Google Apps Script sebagai Web App yang dapat diakses dari frontend React hosted di Netlify.

## Prasyarat

1. Akun Google (untuk mengakses Google Sheets dan Apps Script)
2. Spreadsheet Google yang akan digunakan untuk menyimpan data nilai kuis
3. File `Code.gs` yang sudah dibuat (lihat di folder `gas/`)

## Langkah-Langkah Deployment

### 1. Buat atau Buka Google Sheet

- Buka [Google Sheets](https://sheets.google.com)
- Buat spreadsheet baru atau gunakan yang sudah ada
- Catat **Spreadsheet ID** dari URL:
  ```
  https://docs.google.com/spreadsheets/d/[INI-ADALAH-ID-SPREADSHEET]/edit
  ```
  Contoh ID: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### 2. Persiapkan File Apps Script

- Buka [Google Apps Script](https://script.google.com)
- Klik **New Project**
- Hapus kode default dan tempelkan seluruh isi dari `gas/Code.gs`
- Ganti placeholder `YOUR_SPREADSHEET_ID_HERE` dengan Spreadsheet ID yang Anda catat di langkah 1
- Simpan project (beri nama misalnya "Virtual Lab Quiz Submitter")

### 3. Deploy sebagai Web App

1. Di editor Apps Script, klik tombol **Deploy** � ▶ **New deployment**
2. Pilih **Select type** → **Web app**
3. Isi kolom:
   - **Description**: Deployment untuk Virtual Laboratory Quiz Submitter
   - **Execute as**: Me (your email)  
   - **Who has access**: **Anyone** (ini penting agar bisa diakses dari Netlify tanpa login Google)
4. Klik **Deploy**
5. Jika diminta otorisasi, pilih akun Anda dan izinkan akses ke:
   - Google Sheets
   - Akses eksternal (untuk web app)
6. Setelah deployment selesai, Anda akan mendapatkan **Web App URL** yang terlihat seperti:
   ```
   https://script.google.com/macros/s/AKfycbx....../exec
   ```
   Salin URL ini – akan digunakan di React frontend.

### 4. (Opsional) Restrict Access ke Domain Tertentu

Jika Anda tidak ingin menggunakan `*` dalam header CORS, ubah baris di `createJsonResponse` menjadi:

```javascript
.setHeader('Access-Control-Allow-Origin', 'https://sistemperaba.netlify.app')
```

Lalu redeploy setelah perubahan.

### 5. Menguji Web App

Anda dapat menguji dengan curl atau browser:

```bash
curl -X POST https://script.google.com/macros/s/.../exec \
  -H "Content-Type: application/json" \
  -d '{"name":"Budi Santoso","class":"VIII A","score":85,"timeTaken":120}'
```

Respons yang diharapkan:
```json
{
  "success": true,
  "message": "Nilai berhasil disimpan",
  "data": {
    "timestamp": "2026-08-13T10:30:00.000Z",
    "name": "Budi Santoso",
    "class": "VIII A",
    "score": 85,
    "timeTaken": 120
  }
}
```

### 6. Menyesuaikan Fetch di React

Pastikan fetch di komponen `QuizScoreSubmitter.js` menggunakan URL Web App yang didapat. Contoh:

```javascript
const apiEndpoint = 'https://script.google.com/macros/s/AKfycbx....../exec';

// dalam fetch:
await fetch(apiEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.name.trim(),
    class: formData.class.trim(),
    score: quizScore,
    timeTaken: quizTimeTaken,
  }),
  // Tidak perlu credentials: 'include' karena publik
});
```

Catatan penting:
- Apps Script Web App otomatis menambahkan header CORS yang diperbolehkan (Access-Control-Allow-Origin: * atau domain spesifik)
- Tidak diperlukan otentikasi karena di-set ke "Anyone"
- Pastikan metode yang digunakan adalah **POST** (Apps Script hanya akan memproses doPost untuk POST)

### 7. Men debugging

- Jika tidak mendapatkan respons, periksa:
  1. Apakah URL Web App benar dan belum kadaluarsa (deployment bisa di-update ulang tanpa mengganti URL jika menggunakan versi sama)
  2. Di Apps Script, buka **Executions** (lihat di sidebar log) untuk melihat apakah fungsi doPost dipanggil dan ada error
  3. Pastikan Spreadsheet ID benar dan akun yang menjalankan script memiliki akses ke spreadsheet tersebut
  4. Jika menggunakan batasan origin tertentu, pastikan origin request cocok (Netlify domain)

### 8. Maintenance

- Untuk memperbarui kode, cukup edit `Code.gs` lalu klik **Deploy** � ▶ **Manage deployment**, pilih deployment aktif, klik **Update**.
- URL tetap sama kecuali Anda membuat deployment baru.

## Troubleshooting Umum

| Masalah | Kemungkinan Penyebab | Solusi |
|---------|----------------------|--------|
| 404 Not Found | URL salah atau deployment tidak aktif | Periksa URL, redeploy jika perlu |
| 405 Method Not Allowed | Menggunakan GET yang seharusnya POST | Pastikan menggunakan method POST |
| CORS error di browser | Header Access-Control-Allow-Origin tidak sesuai | Ubah header di `createJsonResponse` sesuai origin frontend |
| Data tidak masuk ke sheet | Spreadsheet ID salah atau script tidak punya akses | Verifikasi ID dan beri akses script ke spreadsheet |
| Respons berupa HTML halaman login | Web App setting "Who has access" bukan "Anyone" | Ubah ke "Anyone" dan redeploy |

Dengan panduan ini, Google Apps Script Web App Anda siap menerima data kuis dari React frontend hosted di Netlify dan menyimpannya ke Google Sheet secara real-time.