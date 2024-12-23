import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { quotes } from '../data/quotes';
import QuoteCard from '../components/QuoteCard';

export default function Quotes() {
  const location = useLocation();
  const navigate = useNavigate();
  const { emotions } = location.state as { emotions: string[] };

  const filteredQuotes = quotes.filter(quote =>
    emotions.some(emotion => 
      quote.emotions.some(e => e.toLowerCase().includes(emotion.toLowerCase()))
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm fixed top-0 w-full z-10">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600"
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
              <QuoteCard {...quote} />
            </div>
          ))}
        </div>

        {filteredQuotes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No quotes found for the selected emotions.</p>
          </div>
        )}
      </main>
    </div>
  );
}