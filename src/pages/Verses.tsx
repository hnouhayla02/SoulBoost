import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { verses } from '../data/verses';
import VerseCard from '../components/VerseCard';

export default function Verses() {
  const location = useLocation();
  const navigate = useNavigate();
  const { emotions } = location.state as { emotions: string[] };

  const filteredQuotes = verses.filter(verse =>
    emotions.some(emotion => 
      verse.emotions.some(e => e.toLowerCase().includes(emotion.toLowerCase()))
    )
  );

  return (
    <div className="min-h-screen gradient-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-20 -top-20 -left-20 floating"></div>
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -bottom-20 -right-20 floating" style={{ animationDelay: '-1.5s' }}></div>
        </div>
      <header className="bg-white/10 backdrop-blur-lg fixed top-0 w-full z-10 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-20 pb-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filteredQuotes.map((quote, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <VerseCard {...quote} />
            </div>
          ))}
        </div>

        {filteredQuotes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/80">No quotes found for the selected emotions.</p>
          </div>
        )}
      </main>
    </div>
    
  );
}