import { Quote } from 'lucide-react';

interface QuoteCardProps {
  text: string;
  author: string;
  emotions: string[];
}

export default function QuoteCard({ text, author, emotions }: QuoteCardProps) {
  return (
    <div className="preserve-3d">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 card-hover border border-white/20">
        <Quote className="w-8 h-8 text-white/80 mb-6 floating" />
        <p className="text-lg text-white mb-6 font-medium">{text}</p>
        <p className="text-white/80 mb-6">— {author}</p>
        <div className="flex flex-wrap gap-2">
          {emotions.map((emotion, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
            >
              {emotion}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}