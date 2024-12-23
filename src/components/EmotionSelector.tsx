import React from 'react';
import { X } from 'lucide-react';

interface EmotionSelectorProps {
  selectedEmotions: string[];
  onEmotionToggle: (emotion: string) => void;
}

const emotions = [
  "sad",
  "desperate",
  "jealous",
  "confused",
  "depressed",
  "inspiration"
];

export default function EmotionSelector({ selectedEmotions, onEmotionToggle }: EmotionSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-gray-700">How are you feeling?</h2>
      <div className="flex flex-wrap gap-2">
        {emotions.map((emotion) => (
          <button
            key={emotion}
            onClick={() => onEmotionToggle(emotion)}
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
  );
}