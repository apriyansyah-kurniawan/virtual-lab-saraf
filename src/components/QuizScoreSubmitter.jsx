import { useState, useEffect } from 'react';

const QuizScoreSubmitter = ({ isOpen, onClose, quizScore, quizTimeTaken, essayAnswer }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Get API URL from environment variables with fallback
  const apiUrl =
    import.meta.env.VITE_GURU_API_URL ||
    import.meta.env.REACT_APP_GURU_API_URL ||
    'https://script.google.com/macros/s/AKfycbxMXczbWFxI4HbwmE44Lv00-CY8APwNb0pQOveLE_lEj8mrILwpDdNUVM8FPZO2KbuZ/exec';

  useEffect(() => {
    if (isOpen && !submitting && !submitted) {
      submitScore();
    }
  }, [isOpen, submitting, submitted]);

  const submitScore = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          score: quizScore,
          timeTaken: quizTimeTaken,
          essayAnswer: essayAnswer,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      console.log('Score submitted successfully:', result);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting score:', err);
      setError(err.message || 'Failed to submit score');
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">Hasil Kuis</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-600">Skor Anda:</p>
                <p className="text-2xl font-bold text-gray-900">{quizScore}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Waktu yang dibutuhkan:</p>
                <p className="text-2xl font-bold text-gray-900">
                  {quizTimeTaken} detik
                </p>
              </div>
            </div>
            {submitting ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <button
                onClick={submitScore}
                disabled={submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
              >
                Kirim Nilai
              </button>
            )}
            {error && (
              <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400 text-red-700">
                {error}
              </div>
            )}
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4 text-center text-green-600">
              Nilai Berhasil Dikirim!
            </h2>
            <p className="text-center text-gray-600">
              Terima kasih telah menyelesaikan kuis.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
            >
              Tutup
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizScoreSubmitter;