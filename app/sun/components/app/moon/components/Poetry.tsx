'use client';

import { useState } from 'react';

export default function Poetry() {
  const [activeTab, setActiveTab] = useState<'tamil' | 'english'>('tamil');

  return (
    <div>
      <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Featured Poetry</h2>
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
            லௌகீக சஞ்சரிப்பில் தன்னை {'\n'}
	    எங்கோ தொலைத்து விட்ட மனம் {'\n'}
	    பௌர்ணமி நிலவில் புதுமலரென {'\n'}
	    இறுக்கம் தளர்ந்து இதழ் விரிக்கிறது {'\n'}
	    தூரதேசங்கள் காண வாழ்நாள் {'\n'}
	    சொற்பமென்று எண்ணிய இளமை {'\n'}
	    முடிவுறாது நீளும் கணமொன்று {'\n'}
	    உயிர் செழிக்க போதுமென்கிறது {'\n'}
	    தொலையாப் பகலே... முடியா இரவே {'\n'}
	    அலர்ந்து ஆசையென்ற அலையடங்கி {'\n'}
	    இந்த கணநேர ஞானம் கலையாதிருக்க {'\n'}
	    காலமே.... சற்று நேரம் ஓய்வெடுப்பாயாக 
          </p>
        ) : (
          <p className="whitespace-pre-line">
            In the whirl of the worldly path, {'\n'}
	    The mind has lost itself—somewhere far. {'\n'}
	    But beneath the full moon, like a newborn bloom, {'\n'}
	    The grip loosens; the petals gently open. {'\n'}
	    {'\n'}
	    Youth once thought a lifetime {'\n'}
	    Too short to see distant lands— {'\n'}
	    But now, a single undying moment {'\n'}
	    Feels enough to make the soul flourish. {'\n'}
            {'\n'}
	    O endless day... O unfinished night... {'\n'}
	    The blooming wave called desire recedes. {'\n'}
	    Let this moment of knowing remain undisturbed— {'\n'}
	    O Time, pause a while. Rest, just for now.
          </p>
        )}
      </div>
    </div>
  );
}
