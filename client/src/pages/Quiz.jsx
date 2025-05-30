import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API}/questions`)
      .then(res => {
        setQuestions(res.data);
        setCurrent(res.data[parseInt(id) - 1]);
      })
      .catch(err => console.error(err));
  }, [id]);

 const handleAnswer = (option) => {
  const updatedAnswers = [...answers, option];
  setAnswers(updatedAnswers);

  const next = parseInt(id) + 1;

  if (next <= questions.length) {
    navigate(`/quiz/${next}`, { state: { answers: updatedAnswers } });
  } else {
    const sessionId = crypto.randomUUID(); // Generates a unique session ID
    navigate(`/result/${sessionId}`, { state: { answers: updatedAnswers } });
  }
};


  if (!current) return <p className="text-center mt-10 text-white">Loading...</p>;

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] px-4 py-10 sm:py-16">
  <div className="w-full max-w-xl text-center bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 text-blue-800 p-6 sm:p-10">
    <h2 className="text-2xl sm:text-3xl font-bold mb-8 tracking-wide drop-shadow-lg">
      {current.text}
    </h2>

    <div className="space-y-5">
      {current.options.map((option, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(option)}
          className="w-full py-3 px-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-md hover:from-purple-600 hover:to-indigo-600"
        >
          {option}
        </button>
      ))}
    </div>
  </div>
</div>

  );
}
