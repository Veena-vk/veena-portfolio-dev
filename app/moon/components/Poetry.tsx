'use client';

import { useState } from 'react';

export default function Poetry() {
  const [activeTab, setActiveTab] = useState<'tamil' | 'english'>('tamil');

  return (
    <div>
      <h2 className="text-2xl font-semibold text-yellow-400 mb-4">🖋️ Poetry</h2>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('tamil')}
          className={`px-4 py-2 rounded ${
            activeTab === 'tamil' ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'
          }`}
        >
          தமிழ்
        </button>
        <button
          onClick={() => setActiveTab('english')}
          className={`px-4 py-2 rounded ${
            activeTab === 'english' ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'
          }`}
        >
          English
        </button>
      </div>
      <div className="text-gray-300 font-serif border-l-4 border-yellow-500 pl-4">
        {activeTab === 'tamil' ? (
          <p className="whitespace-pre-line">
            நிலவு விழிக்கும் நேரம்{'\n'}
            எண்ணங்கள் உருக்கொள்கின்றன{'\n'}
            நான் அங்கும் இங்கும்{'\n'}
            ஆனாலும் எப்போதும் இங்கேயே
          </p>
        ) : (
          <p className="whitespace-pre-line">
            When the moon awakens,{'\n'}
            thoughts dissolve in silence.{'\n'}
            I am here and there —{'\n'}
            and yet, always… right here.
          </p>
        )}
      </div>
    </div>
  );
}
