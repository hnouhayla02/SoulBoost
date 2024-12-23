import React, { useState } from 'react';
import { Sparkles, MessageCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const emotions = [
  "sad", "desperate", "jealous", "confused", "depressed", "inspiration",
  "anxious", "lonely", "overwhelmed", "hopeful", "motivated", "stressed"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emotions = showChat ? [chatInput] : selectedEmotions;
    navigate('/quotes', { state: { emotions } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-800">QuoteSpire</h1>
          </div>
          <p className="text-gray-600">Find inspiration tailored to your emotions</p>
        </header>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
          {!showChat ? (
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-700">How are you feeling?</h2>
              <div className="flex flex-wrap gap-2">
                {emotions.map((emotion) => (
                  <button
                    type="button"
                    key={emotion}
                    onClick={() => handleEmotionToggle(emotion)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${
                        selectedEmotions.includes(emotion)
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-gray-700">Tell us how you feel</h2>
              <textarea
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="I'm feeling..."
                rows={4}
              />
            </div>
          )}

          <div className="mt-6 flex flex-col gap-4">
            <button
              type="submit"
              disabled={(showChat && !chatInput) || (!showChat && selectedEmotions.length === 0)}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Generate Quotes
            </button>
            
            <button
              type="button"
              onClick={() => setShowChat(!showChat)}
              className="flex items-center justify-center gap-2 text-gray-600 hover:text-purple-600"
            >
              <MessageCircle className="w-5 h-5" />
              {showChat ? 'Use emotion tags instead' : 'Prefer to chat?'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}