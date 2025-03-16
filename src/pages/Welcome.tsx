import { useNavigate } from 'react-router-dom';
import { Heart, Shield, Sparkles } from 'lucide-react';
import picture from '../components/girl.png';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300/30 rounded-full blur-3xl -top-20 -left-20 floating"></div>
        <div className="absolute w-72 h-72 bg-pink-300/30 rounded-full blur-3xl top-1/4 right-20 floating-delay-1"></div>
        <div className="absolute w-64 h-64 bg-blue-300/30 rounded-full blur-3xl bottom-20 left-1/3 floating-delay-2"></div>
        <div className="absolute w-80 h-80 bg-violet-300/30 rounded-full blur-3xl -bottom-20 -right-20 floating-delay-3"></div>
        <div className="absolute w-56 h-56 bg-indigo-300/30 rounded-full blur-3xl top-1/3 left-1/4 floating-delay-4"></div>
      </div>

      <header className="text-center mb-12 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-white floating" />
          <h1 className="text-5xl font-bold text-white">SoulBoost</h1>
          <Sparkles className="w-8 h-8 text-white floating" />
        </div>
      </header>

      <div className="max-w-5xl w-full perspective relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-12 card-hover border border-white/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <p className="text-white/90 leading-relaxed">
              Welcome to a space where words have the power to uplift your spirit—a sanctuary for the soul in a world that often rewards emotional restraint. Here, you can secretly connect with your deepest feelings, knowing that sometimes, all it takes is one perfect sentence to brighten your day.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-white/80">
                  <Heart className="w-5 h-5 text-pink-300" />
                  <span>Find comfort in carefully curated quotes and verses</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Shield className="w-5 h-5 text-purple-300" />
                  <span>No personal data stored - your feelings are private</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/home')}
                className="bg-white text-purple-700 px-8 py-3 rounded-xl font-medium hover:bg-white/90 
                          transform transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Get Started
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-2xl"></div>
                <img 
                  src={picture} 
                  alt="Peaceful illustration" 
                  className="w-full h-auto rounded-2xl transform transition-transform hover:scale-[1.02]"
                  style={{ maxWidth: '400px', margin: '0 auto' }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-white/60 text-sm">
            <p>
              Remember, sometimes the simplest words can carry the most profound comfort. 
              Let's find the ones that speak to your heart today.
            </p>
          </div>
        </div>
      </div>
      <footer className="mt-8 text-center text-white/60 text-sm relative z-10">
        <p>© 2025 SoulBoost, N. All rights reserved.</p>
      </footer>
    </div>
  );
}