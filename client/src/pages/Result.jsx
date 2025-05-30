import { useEffect, useMemo } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { vibeMap } from '../utils/vibe.js';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const { sessionId } = useParams();
  const answers = location.state?.answers || [];
  const navigate=useNavigate();
  console.log(answers.length)
  // Step 2: Calculate dominant vibe
  const resultVibe = useMemo(() => {
    const count = {};

    answers.forEach(answer => {
      const vibe = vibeMap[answer];
      if (vibe) {
        count[vibe] = (count[vibe] || 0) + 1;
      }
    });

    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    return sorted.length > 0 ? sorted[0][0] : "Undefined Vibe";
  }, [answers]);

  // Step 3: Save to DB
  useEffect(() => {
    if (answers.length > 0) {
      axios.post(`${import.meta.env.VITE_API}/responses`, {
        sessionId,
        answers,
        result: resultVibe
      }).then(res => {
        console.log('Saved:', res.data);
      }).catch(err => {
        console.error('Save failed:', err);
      });
    }
  }, [answers, resultVibe, sessionId]);

  return (

 <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] px-4 py-10 sm:py-16">
  <div className="w-full max-w-2xl bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 text-gray-800 p-6 sm:p-10 text-center">
    
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 drop-shadow-md text-gray-900">
      🧬 Your Vibe: 
      <span className="ml-2 inline-block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-pulse">
        {resultVibe}
      </span>
    </h2>

    <p className="text-gray-700 mb-8 text-base sm:text-lg">
      Based on your answers, you're a true <strong className="text-gray-900">{resultVibe}</strong>! 🌟
    </p>

    <h3 className="text-xl sm:text-2xl font-semibold mb-3 underline decoration-indigo-500">Your Answers:</h3>

    <ul className="space-y-3 text-left mt-4 mb-8">
      {answers.map((ans, i) => (
        <li
          key={i}
          className="bg-white/50 text-gray-800 px-4 py-3 rounded-xl border border-white/20 shadow-sm hover:bg-white/70 transition-all duration-200 text-sm sm:text-base"
        >
          <span className="font-semibold mr-2">{i + 1}.</span> {ans}
        </li>
      ))}
    </ul>

    <div className="flex justify-between flex-col sm:flex-row gap-4">
      <button
        onClick={() => navigate('/quiz/1')}
        className="w-full sm:w-auto mt-4 px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
      >
        🔄 Retake Quiz
      </button>
      <button
        onClick={() => navigate('/')}
        className="w-full sm:w-auto mt-4 px-6 py-3 bg-gradient-to-r from-indigo-400 to-blue-500 hover:from-indigo-500 hover:to-blue-600 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105"
      >
        🏠 Home
      </button>
    </div>
  </div>
</div>





  );
}
