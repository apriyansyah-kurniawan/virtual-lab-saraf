# Integrasi Komponen Pengiriman Nilai Quiz ke Aplikasi Virtual Laboratory

## Ringkasan

Komponen `QuizScoreSubmitter` adalah modal React yang menangani proses pengiriman nilai/skor hasil kuis simulasi dari frontend React ke API backend milik Guru. Komponen ini mencakup validasi data, penanganan loading/success/error, serta antarmuka modern dengan Tailwind CSS.

## Langkah-Langkah Integrasi

### 1. Letakkan Komponen

Pastikan file `QuizScoreSubmitter.js` berada di direktori `components/` proyek React Anda:
```
/src
  /components
    QuizScoreSubmitter.js
```

### 2. Impor dan Gunakan Komponen

Dalam komponen yang menampilkan hasil kuis (misalnya setelah siswa menyelesaikan simulasi), impor dan gunakan `QuizScoreSubmitter`:

```jsx
import React, { useState } from 'react';
import QuizScoreSubmitter from './components/QuizScoreSubmitter';

function QuizResults() {
  // Nilai yang diperoleh dari simulasi kuis
  const quizScore = 85; // Ganti dengan nilai sebenarnya dari logika kuis Anda
  const quizTimeTaken = 120; // Detik, ganti dengan nilai sebenarnya
  
  // State untuk mengontrol visibility modal
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  
  // Fungsi untuk membuka modal submit
  const handleQuizComplete = () => {
    // Logika untuk menentukan kuis selesai
    setIsSubmitModalOpen(true);
  };
  
  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setIsSubmitModalOpen(false);
  };

  return (
    <div>
      {/* Konten aplikasi Anda */}
      
      {/* Tampilkan tombol atau trigger ketika kuis selesai */}
      {isQuizComplete && (
        <button 
          onClick={handleQuizComplete}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
        >
          Selesaikan dan Kirim Nilai
        </button>
      )}
      
      {/* Komponen Pengiriman Nilai */}
      <QuizScoreSubmitter
        isOpen={isSubmitModalOpen}
        onClose={handleCloseModal}
        quizScore={quizScore}
        quizTimeTaken={quizTimeTaken}
        apiEndpoint="https://sistemperaba-guru-api.example.com/api/submit-score" // Ganti dengan URL API sebenarnya
      />
    </div>
  );
}

export default QuizResults;
```

### 3. Konfigurasi API Endpoint

Ganti `apiEndpoint` dengan URL sebenarnya dari API backend Guru Anda. Pastikan endpoint ini:
- Menerima permintaan `POST` dengan format JSON
- Mengimplementasikan CORS yang diperbolehkan untuk domain Netlify Anda (`sistemperaba.netlify.app`)
- Memvalidasi dan menyimpan data yang diterima

Contoh format data yang dikirim:
```json
{
  "name": "Budi Santoso",
  "class": "VIII A",
  "score": 85,
  "timeTaken": 120
}
```

### 4. Penanganan CORS di Backend

Pastikan backend Guru Anda mengizinkan permintaan dari domain Netlify Anda. Contoh untuk Node.js/Express:

```javascript
const cors = require('cors');
app.use(cors({
  origin: 'https://sistemperaba.netlify.app',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
```

### 5. Variabel Lingkungan (Opsional)

Untuk keamanan, simpan URL API di file `.env` dan akses melalui proses environment:

```env
REACT_APP_GURU_API_URL=https://sistemperaba-guru-api.example.com/api
```

Kemudian gunakan di komponen:
```jsx
apiEndpoint={`${process.env.REACT_APP_GURU_API_URL}/submit-score`}
```

### 6. Penanganan Respons dari API

Komponen sudah menangani:
- **Loading state**: Menampilkan indikator saat mengirim
- **Success state**: Menampilkan konfirmasi ketika berhasil
- **Error state**: Menampilkan pesan error jika terjadi masalah
- **Validasi client-side**: Memastikan semua field diisi sebelum mengirim

### 7. Customisasi Tampilan

Komponen menggunakan Tailwind CSS. Untuk mengubah tampilan:
- Ubah kelas-kelas Tailwind di komponen sesuai dengan desain aplikasi Anda
- Sesuaikan warna, spacing, atau tipografi dengan merujuk ke dokumentasi Tailwind

### 8. Aksesibilitas

Komponen telah mencakup beberapa fitur aksesibilitas:
- ARIA attributes untuk modal (`role="dialog"`, `aria-modal`, `aria-labelledby`)
- Focus management (input nama otolog difokuskan ketika modal terbuka)
- Label yang terhubung dengan input
- Tombol tutup yang jelas

## Catatan Penting

1. **Keamanan**: Pertimbangkan untuk menambahkan otentikasi jika API membutuhkannya (misalnya tokenBearer di header Authorization)
2. **Timeout**: Tambahkan timeout pada fetch request jika diperlukan untuk mencegah permintaan yang terlalu lama
3. **Analytics**: Pertimbangkan untuk menambahkan pelacakan kejadian submit nilai untuk analisis penggunaan
4. **Testing**: Uji komponen dengan berbagai skenario (berhasil, gagal validasi, error jaringan, dll.)

## Struktur Folder yang Direkomendasikan

```
/src
  /components
    QuizScoreSubmitter.js
    QuizResults.js
    ... komponen lain ...
  /utils
    api.js      // Untuk fungsi-fungsi helper API jika diperlukan
  /styles
    tailwind.css // Konfigurasi Tailwind Anda
  App.js
  index.js
```