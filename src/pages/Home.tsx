import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Sparkles, MessageCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const emotions = [
  "sad", "desperate", "jealous", "confused", "depressed", "inspiration",
  "anxious", "lonely", "overwhelmed", "hopeful", "motivated", "stressed", "scared", "disappointed",
  "tired", "angry", "broke", "bored","mixed feelings"
];

const emotionSynonyms: { [key: string]: string[] } = {
  sad: [
    "unhappy", "sorrowful", "downcast", "blue", "miserable", "heartbroken",
    "I don't feel good", "I feel bad", "I want to cry", "feeling low", "down in the dumps"
  ],
  desperate: [
    "hopeless", "despairing", "forlorn", "in distress", "at the end of my rope", "I hate myself",
    "losing hope", "in agony", "drowning in sadness", "helpless", "I don't want to live anymore"
  ],
  jealous: [
    "envious", "covetous", "resentful", "green with envy", "bitter", "grudging", 
    "spiteful", "possessive", "territorial", "jealous-hearted"
  ],
  confused: [
    "bewildered", "perplexed", "baffled", "puzzled", "lost", "dazed", "disoriented",
    "mixed up", "uncertain", "not sure what to think", "torn"
  ],
  depressed: [
    "melancholy", "down", "gloomy", "hopeless", "low-spirited", "mournful", "dejected",
    "heavy-hearted", "in the dark", "broken-hearted", "empty inside", "feeling numb"
  ],
  inspiration: [
    "motivation", "stimulation", "encouragement", "drive", "passion", "enthusiasm", 
    "spark", "fuel for the soul", "urge", "excitement", "burst of energy"
  ],
  anxious: [
    "nervous", "worried", "apprehensive", "uneasy", "on edge", "jittery", "restless",
    "tense", "stressed out", "fidgety", "panicked", "fearful", "overthinking"
  ],
  lonely: [
    "isolated", "alone", "solitary", "forsaken", "abandoned", "disconnected",
    "lonesome", "friendless", "empty", "yearning for company", "unseen", "invisible", "I feel like everybody hate me"
  ],
  overwhelmed: [
    "overcome", "swamped", "overpowered", "buried", "stressed out", "drowning in tasks", 
    "snowed under", "mentally drained", "crushed by responsibilities", "burnt out"
  ],
  hopeful: [
    "optimistic", "positive", "confident", "looking forward", "faithful", "expectant",
    "uplifted", "bright-eyed", "cheerful about the future", "holding on"
  ],
  motivated: [
    "driven", "inspired", "enthusiastic", "determined", "goal-oriented", "fired up", 
    "pumped", "ambitious", "ready to conquer", "on a mission", "eager"
  ],
  stressed: [
    "tense", "strained", "anxious", "under pressure", "frustrated", "frazzled", "burned out", 
    "wired", "uptight", "stretched thin", "ready to snap"
  ],
  tired: [
    "exhausted", "weary", "fatigued", "drained", "burnt out", "worn out", "running on empty",
    "dead tired", "beat", "sleepy", "done for the day", "knackered"
  ],
  angry: [
    "mad", "furious", "irate", "annoyed", "enraged", "pissed off", "seeing red", "fuming", 
    "bitter", "hostile", "worked up", "livid", "sick and tired", "fed up", "I hate everyone", "I hate everything"
  ],
  bored: [
    "uninterested", "weary", "dull", "listless", "fed up", "restless", "meh", 
    "uninspired", "burnt out", "zoned out", "over it"
  ],
  "mixed feelings": [
    "ambivalent", "conflicted", "uncertain", "torn between", "unsure", "on the fence",
    "undecided", "wavering", "feeling both ways", "bittersweet", "emotionally torn"
  ]
};


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

  const getEmotionsFromInput = (input: string): string[] => {
    const words = input.toLowerCase().split(/\s+/);
    const matchedEmotions: string[] = [];

    words.forEach(word => {
      if (emotions.includes(word)) {
        matchedEmotions.push(word);
      } else {
        for (const [emotion, synonyms] of Object.entries(emotionSynonyms)) {
          if (synonyms.includes(word)) {
            matchedEmotions.push(emotion);
            break;
          }
        }
      }
    });
     // Check for multi-word expressions
     for (const [emotion, synonyms] of Object.entries(emotionSynonyms)) {
      synonyms.forEach(synonym => {
        if (input.toLowerCase().includes(synonym.toLowerCase())) {
          matchedEmotions.push(emotion);
        }
      });
    }

    return matchedEmotions;
  };

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    const emotions = showChat ? getEmotionsFromInput(chatInput) : selectedEmotions;

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
      <header className="fixed top-0 w-full z-10">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to welcome page
          </button>
        </div>
      </header>
      
      <div className="max-w-md w-full perspective relative z-10">
        <header className="text-center mb-12 page-transition">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-white floating" />
            <h1 className="text-4xl font-bold text-white">SoulBoost</h1>
            <Sparkles className="w-8 h-8 text-white floating" />
          </div>
          <p className="text-white/80">Gentle encouragement</p>
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