import React, { useState } from 'react';
import { Sparkles, MessageCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const emotions = [
  "sad", "desperate", "jealous", "confused", "depressed", "inspiration",
  "anxious", "lonely", "overwhelmed", "hopeful", "motivated", "stressed", 
  "tired", "in love", "angry", "bored","mixed feelings"

];

export default function Home() {
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [showChat, setShowChat] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const navigate = useNavigate();

  const handleEmotionToggle = (emotion: string) => {
    setSelectedEmotions(prev =>
      prev.includes(emotion)
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    const emotions = showChat ? [chatInput] : selectedEmotions;
  
    if (type === 'quotes') {
      navigate('/quotes', { state: { emotions } });
    } else if (type === 'verses') {
      navigate('/verses', { state: { emotions } });
    }
  };
  

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20 -top-20 -left-20 floating"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -bottom-20 -right-20 floating" style={{ animationDelay: '-1.5s' }}></div>
      </div>
      
      <div className="max-w-md w-full perspective relative z-10">
        <header className="text-center mb-12 page-transition">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-white floating" />
            <h1 className="text-4xl font-bold text-white">SoulBoost</h1>
            <Sparkles className="w-8 h-8 text-white floating" />
          </div>
          <p className="text-white/80">You'll feel better</p>
        </header>

        
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 card-hover border border-white/20">
            {!showChat ? (
              <div className="space-y-6 page-transition">
                <h2 className="text-xl font-medium text-white">How are you feeling?</h2>
                <div className="flex flex-wrap gap-3">
                  {emotions.map((emotion) => (
                    <button
                      type="button"
                      key={emotion}
                      onClick={() => handleEmotionToggle(emotion)}
                      className={`
                        emotion-tag px-4 py-2 rounded-full text-sm font-medium
                        ${
                          selectedEmotions.includes(emotion)
                            ? 'bg-white text-purple-700 shadow-lg'
                            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                        }
                      `}
                    >
                      {emotion}
                      {selectedEmotions.includes(emotion) && (
                        <X className="inline-block ml-1 w-4 h-4" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 page-transition">
                <h2 className="text-xl font-medium text-white">Tell us how you feel</h2>
                <textarea
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                  placeholder="I'm feeling..."
                  rows={4}
                />
              </div>
            )}

            <div className="mt-8 space-y-4">
            <button
  type="button"
  onClick={(e) => handleSubmit(e, 'quotes')}
  disabled={(showChat && !chatInput) || (!showChat && selectedEmotions.length === 0)}
  className="w-full bg-white text-purple-700 py-3 rounded-xl font-medium hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all hover:scale-[1.02] active:scale-[0.98]"
>
  Generate Quotes
</button>

<button
  type="button"
  onClick={(e) => handleSubmit(e, 'verses')}
  disabled={(showChat && !chatInput) || (!showChat && selectedEmotions.length === 0)}
  className="w-full bg-white text-green-700 py-3 rounded-xl font-medium hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transform transition-all hover:scale-[1.02] active:scale-[0.98]"
>
  Generate Quran Verses
</button>
              
              <button
                type="button"
                onClick={() => setShowChat(!showChat)}
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                {showChat ? 'Use emotion tags instead' : 'Prefer to write?'}
              </button>
            </div>
          </div>
        
      </div>
    </div>
  );
}