import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
  <div className="relative flex items-center justify-center min-h-screen
    bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] 
    overflow-hidden font-sans text-white">
      <div className="absolute w-72 h-72 bg-pink-500
       opacity-30 rounded-full filter blur-3xl top-[-50px]
        left-[-50px] animate-pulse" />
            <div className="absolute w-96 h-96 bg-indigo-500 
            opacity-20 rounded-full filter blur-3xl bottom-[-80px]
             right-[-60px] animate-ping" />
             <div className="absolute w-52 h-52
              bg-blue-400 opacity-30 rounded-full filter blur-2xl 
              bottom-1/3 left-1/4 animate-spin-slow" />

          <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-10 pointer-events-none" />

        <div className="z-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/20 px-10 py-12 max-w-lg w-full text-center animate-fade-in">
    <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md">✨ Vibe Check</h1>
    <p className="text-white/80 text-lg mb-8">
      Curious to know what your vibe is today? Take this quick quiz and find out!
    </p>

    <button
      onClick={() => navigate('/quiz/1')}
      className="px-7 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      🚀 Start Quiz
    </button>
  </div>
</div>


  );
}
