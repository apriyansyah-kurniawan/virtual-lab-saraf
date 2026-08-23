import { useState } from 'react';
import QuizScoreSubmitter from './QuizScoreSubmitter';

const Quiz = () => {
  const [quizScore, setQuizScore] = useState(0);
  const [quizTimeTaken, setQuizTimeTaken] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  // Simulate quiz logic - replace with your actual quiz implementation
  const handleFinishQuiz = () => {
    // Calculate your quiz score and time here
    // For example:
    setQuizScore(85); // Replace with actual score calculation
    setQuizTimeTaken(120); // Replace with actual time in seconds
    setIsQuizComplete(true);
    // Open the submission modal
    setIsSubmitOpen(true);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {!isQuizComplete ? (
        <>
          <h1 className="text-2xl font-bold mb-6">Virtual Lab Quiz</h1>
          {/* Your quiz questions and answers go here */}
          <div className="space-y-4">
            {/* Example question */}
            <div className="border p-4 rounded">
              <p className="font-medium">Apa ibu kota Indonesia?</p>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="q1" value="jakarta" />
                  <span className="ml-2">Jakarta</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q1" value="bandung" />
                  <span className="ml-2">Bandung</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q1" value="surabaya" />
                  <span className="ml-2">Surabaya</span>
                </label>
              </div>
            </div>
            {/* Add more questions */}
          </div>
          <button
            onClick={handleFinishQuiz}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition"
          >
            Selesai dan Lihat Nilai
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Quiz Selesai!</h2>
          <p className="mb-4">
            Skor Anda: <span className="font-bold">{quizScore}</span> |
            Waktu: <span className="font-bold">{quizTimeTaken}</span> detik
          </p>
          {/* In a real app, you might want to show a button to submit or auto-submit */}
          <button
            onClick={() => setIsSubmitOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Kirim Nilai ke Server
          </button>
        </>
      )}

      {/* Score Submission Modal */}
      <QuizScoreSubmitter
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
        quizScore={quizScore}
        quizTimeTaken={quizTimeTaken}
      />
    </div>
  );
};

export default Quiz;