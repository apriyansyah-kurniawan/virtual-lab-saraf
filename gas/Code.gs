/**
 * Google Apps Script Web App untuk menerima data nilai kuis dari React frontend
 * dan menyimpannya ke Google Sheet.
 */

/**
 * Menangani permintaan POST dari frontend.
 * @param {Object} e Event object yang berisi parameter POST
 * @return {Output} JSON response dengan status dan pesan
 */
function doPost(e) {
  try {
    // Tangkap data JSON dari body request
    const data = JSON.parse(e.postData.contents);

    // Validasi data yang diterima
    if (!data.name || !data.class || typeof data.score !== 'number' || typeof data.timeTaken !== 'number') {
      return createJsonResponse({
        success: false,
        message: 'Data tidak lengkap atau tidak valid'
      }, 400);
    }

    // Simpan ke Google Sheet
    saveToSheet(data);

    // Respons sukses
    return createJsonResponse({
      success: true,
      message: 'Nilai berhasil disimpan',
      data: {
        timestamp: new Date().toISOString(),
        name: data.name,
        class: data.class,
        score: data.score,
        timeTaken: data.timeTaken
      }
    });
  } catch (error) {
    // Tangani error
    return createJsonResponse({
      success: false,
      message: 'Terjadi kesalahan server: ' + error.toString()
    }, 500);
  }
}

/**
 * Menyimpan data ke Google Sheet.
 * @param {Object} data Objek data yang berisi name, class, score, timeTaken
 */
function saveToSheet(data) {
  // Ganti dengan ID spreadsheet Anda
  const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
  const SHEET_NAME = 'QuizScores'; // Nama sheet tempat data disimpan

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);

  // Jika sheet belum ada, buat baru
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Buat header
    sheet.appendRow(['Timestamp', 'Nama', 'Kelas', 'Skor', 'Waktu Pengerjaan (detik)']);
    // Format header bold
    sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
  }

  // Tambahkan data baru
  const newRow = [
    new Date(), // Timestamp
    data.name,
    data.class,
    data.score,
    data.timeTaken
  ];

  sheet.appendRow(newRow);

  // Opsional: auto-fit kolom
  sheet.autoResizeColumns(1, 5);
}

/**
 * Membuat response JSON dengan header CORS yang tepat.
 * @param {Object} obj Objek yang akan dikirim sebagai JSON
 * @param {number} statusCode Kode status HTTP (default 200)
 * @return {TextOutput} Response yang dikirim ke client
 */
function createJsonResponse(obj, statusCode = 200) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Content-Type', 'application/json; charset=utf-8')
    .setHeader('Access-Control-Allow-Origin', '*') // Izinkan dari semua origin (sesuaikan jika perlu lebih restrictif)
    .setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Max-Age', '3600')
    .setResponseCode(statusCode);
}

/**
 * Menangani preflight OPTIONS request untuk CORS.
 */
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setResponseCode(200);
}