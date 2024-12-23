import React from 'react';
import { Quote } from 'lucide-react';

interface QuoteCardProps {
  text: string;
  author: string;
  emotions: string[];
}

export default function QuoteCard({ text, author, emotions }: QuoteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <Quote className="w-8 h-8 text-purple-600 mb-4" />
      <p className="text-lg text-gray-800 mb-4 font-medium italic">"{text}"</p>
      <p className="text-gray-600 mb-4">— {author}</p>
      <div className="flex flex-wrap gap-2">
        {emotions.map((emotion, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
          >
            {emotion}
          </span>
        ))}
      </div>
    </div>
  );
}