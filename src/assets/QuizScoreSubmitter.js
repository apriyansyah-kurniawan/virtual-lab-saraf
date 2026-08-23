import React, { useState } from 'react';

const QuizScoreSubmitter = ({
  isOpen,
  onClose,
  quizScore = 0,
  quizTimeTaken = 0,
  essayAnswer = '', // Bisa dipassing dari luar, atau dibuat input textarea di dalam modal
  apiEndpoint = import.meta.env?.VITE_GURU_API_URL || 'https://script.google.com/macros/s/AKfycbxMXczbWFxI4HbwmE44Lv00-CY8APwNb0pQOveLE_lEj8mrILwpDdNUVM8FPZO2KbuZ/exec'
}) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    class: '',
    essay: essayAnswer || '' 
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await fetch(apiEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          class: formData.class.trim(),
          score: quizScore,
          timeTaken: quizTimeTaken,
          essayAnswer: formData.essay.trim(), // Kirim jawaban essay
        }),
      });

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: '', class: '', essay: '' });
        if (onClose) onClose();
      }, 2500);
    } catch (err) {
      setError('Gagal mengirim nilai');
    } finally {
      setLoading(false);
    }
  };

  // ... (tambahkan field <textarea> untuk essay di form jika siswa mengetiknya langsung di modal)

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-hidden="true"
      role="presentation"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog */}
      <div
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-md p-6 z-10 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quiz-summary-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="Tutup"
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {success ? (
          <div className="text-center py-4">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 id="quiz-summary-title" className="text-2xl font-bold text-gray-900 mb-2">
              Nilai Berhasil Dikirim!
            </h2>
            <p className="text-gray-600 mb-6">
              Terima kasih, <span className="font-semibold text-gray-800">{formData.name}</span>.<br />
              Skor kamu ({quizScore}) sudah masuk ke rekap Guru.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                setFormData({ name: '', class: '' });
                if (onClose) onClose();
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition shadow-md"
            >
              Tutup
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900" id="quiz-summary-title">
                Simpan & Kirim Hasil Kuis
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">Kirimkan nilai simulasi ke database guru.</p>
              
              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-lg mt-3 border border-gray-100">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Skor Akhir</p>
                  <p className="text-2xl font-black text-indigo-600">{quizScore}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</p>
                  <p className="text-2xl font-black text-gray-800">{quizTimeTaken}s</p>
                </div>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="bg-red-50 border border-red-200 text-red-700 text-sm px-3.5 py-2.5 rounded-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-3.5">
              <div>
                <label htmlFor="student-name" className="block text-sm font-semibold text-gray-700 mb-1">
                  Nama Lengkap Siswa
                </label>
                <input
                  type="text"
                  id="student-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Contoh: Apriyansyah"
                  className="w-full text-sm border border-gray-300 rounded-lg px-3.5 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  required
                  autoFocus
                />
              </div>

              <div>
                <label htmlFor="student-class" className="block text-sm font-semibold text-gray-700 mb-1">
                  Kelas
                </label>
                <input
                  type="text"
                  id="student-class"
                  value={formData.class}
                  onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                  placeholder="Contoh: VIII A / IX B"
                  className="w-full text-sm border border-gray-300 rounded-lg px-3.5 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center py-2.5 px-4 text-sm font-semibold rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Mengirim ke Google Sheets...
                  </>
                ) : (
                  'Kirim Nilai Sekarang'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuizScoreSubmitter;