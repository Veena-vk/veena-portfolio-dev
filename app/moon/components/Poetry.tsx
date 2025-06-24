'use client';

import { useState } from 'react';

const poems = [
  {
    id: 'venpatchi',
    title: 'யாவையும் அல்லையும் – வெண்பட்சி',
    snippet: 'நான் :  வெண்பட்சியே! என் சொப்பனங்களின் உருவே!...',
    tamil: `நான் :  வெண்பட்சியே ! என் சொப்பனங்களின் உருவே! 
		    தும்பைப்பூ வண்ணச் சிறகுகள் வீசி, நீல வானில் மிதக்கும் காகித ஓடமே! 
		    என் தோள்களில் சற்றதை ஏற்றிடுவாயோ?

	   பட்சி : செல்வமே, சிறு குழந்தையே! சிறகுகள் சுமை; 
		  கைப்பட்டால் கசங்கி, மழை வந்தால் கரையும் சின்ன  
                  காகிதமில்லை; விரிந்துப் பறந்தாலும் பாறை போல் வலியவை; 
                  உன் பட்டுத் தோள் மீது பாரமேற்ற தகுமோ?

	   நான் :  இவ்வகண்ட நிலமும், கடலும், மரமும், நிலத்தினில் 
 	            பிறந்த யாவரும் வான் நோக்கி வாழ்கிறார்கள். 
		   நீயோ அதனில் நீந்திக் களிக்கிறாய். 
 		   என்றேனும் ஒருமுறை உன் தலைமீது வான் முட்டியதுண்டோ?

	   பட்சி : தாய் விரல் பிடித்து வளரும் குறுமுல்லைக் கொடியே !  
		  வானம் என்று எதைக்  குறிக்கிறாய், இதுவரை 
		  நான் அதைக் கண்டதில்லை. வானம்  - மாந்தர் தம்
		  மனதில் வடித்த மாயை; வானம் - முடிவிலி; வானம் - மறை.

	   நான் :  என் மனம் ஒப்பவில்லை, வான் என் கண்ணெதிரே 
		   தோன்றும் நிஜம்; நீல ஒளியாடை உடுக்கும் அழகுத் தோட்டம். 
		   நிறமற்ற நீள் கடல் அதன் வண்ணம் குடித்து தாமும் 
		   அழகு பூசிக்கொள்கின்றன. நட்சத்திரங்கள் அங்கே வீடு செய்துகொள்கின்றன. 
		   இரவினில் அவ்வாடை களைந்து இருளென்ற நிர்வாணம் கொள்ளும் நிதர்சனம். 

	   பட்சி : நீலம் - நிறம் - நிழல் - தோற்றம். வெயில் காய்கிறது, 
	          உன் நிழல் தரையில் கிடக்கிறது. அது தோற்றம். 
		  அங்கு நீ இல்லை. வெயில் சாய்ந்ததும் நிழல் மறைகிறது. 

	  நான் : தோற்றம் சான்று. நான் நிற்பதால் தான் நிழல் விழுகிறது. 
		 நானின்றி என் நிழல் இல்லை. வானின்றி நீலம் இல்லை.

	  பட்சி : முதலில் நீ எது? உன் மூலம் எது? நீ உன் உடலா? 
		 அல்லது உடலின் உள் நீ இருக்கிறாயா? 
		 மாம்பழத்தை வெட்டினால் விதை வெளிப்படுவதை போல் 
	         உன் உடலைக் கூறாக்கினால் நீ வெளிப்படுவாயா? 
	         இறந்தால் ஏன் உன் உடலென்ற கூடு மண்ணில் கிடக்கிறது. 
		 உன் உடலும் ஓர் தோற்றம். அது அணுக்களால் ஆனவை. 
		 அவை யாவையும் உள்கொண்டுள்ளது நீயே. 
		 ஆயினும் அவை யாவையும் நீ அல்லவை.`,


    english: `Me:
O White Bird! Form of my dreams!
With wings hued like the thumba blossom,
A paper boat drifting in sapphire skies!
Will you rest a moment upon my shoulders?

Bird:
Beloved, little one!
Wings are burdens.
Not frail like paper that crumples in hand
or melts when rain arrives—
Mine are vast, and strong as stone when spread.
Shall I lay such weight on your silk-soft shoulders?

Me:
The boundless earth, the ocean, the trees,
and all that springs from the soil
gaze skyward to live.
And you—you swim in that very sky with joy.
But tell me—has the sky ever once
leaned down and touched your brow?

Bird:
Tender shoot of jasmine,
growing clutching your mother’s finger!
What is this ‘sky’ you speak of?
I have never seen it.
The sky—it is an illusion shaped by men.
The sky—an endlessness.
The sky—a veiling.

Me:
But my heart disagrees.
The sky is real, a vision before my eyes—
a garden of beauty cloaked in blue light.
The colorless sea borrows its hue from it,
adorning itself in its reflected glory.
Stars make their homes there.
And at night, it sheds its robes,
wearing naked darkness with raw honesty.

Bird:
Blue—color—shadow—appearance.
The sun blazes, and your shadow lies on the ground.
It is a mere image.
You are not in it.
When the sun tilts, the shadow vanishes.

Me:
But an image is proof!
It falls because I stand.
Without me, there is no shadow.
Without the sky, there is no blue.

Bird:
Then tell me—what are you first?
And from what are you made?
Are you your body?
Or do you dwell inside that body?
If I cut a mango, I find its seed.
But if I cleave your body,
will I find you?
When you die, your shell lies on the soil—
a body, empty.
Even that body is an image—
made of atoms.
They hold everything,
and still, they are not you.
  },
  {
    id: 'timePause',
    title: 'கணநேர ஞானம்',
    snippet: 'லௌகீக சஞ்சரிப்பில் தன்னை... காலமே, ஓய்வெடுப்பாயாக',
    tamil: `லௌகீக சஞ்சரிப்பில் தன்னை 
எங்கோ தொலைத்து விட்ட மனம்
பௌர்ணமி நிலவில் புதுமலரென
இறுக்கம் தளர்ந்து இதழ் விரிக்கிறது
தூரதேசங்கள் காண வாழ்நாள்
சொற்பமென்று எண்ணிய இளமை
முடிவுறாது நீளும் கணமொன்று
உயிர் செழிக்க போதுமென்கிறது
தொலையாப் பகலே... முடியா இரவே
அலர்ந்து ஆசையென்ற அலையடங்கி
இந்த கணநேர ஞானம் கலையாதிருக்க
காலமே.... சற்று நேரம் ஓய்வெடுப்பாயாக`,
    english: `In the whirl of the worldly path,
The mind has lost itself—somewhere far.
But beneath the full moon, like a newborn bloom,
The grip loosens; the petals gently open.

Youth once thought a lifetime
Too short to see distant lands—
But now, a single undying moment
Feels enough to make the soul flourish.

O endless day... O unfinished night...
The blooming wave called desire recedes.
Let this moment of knowing remain undisturbed—
O Time, pause a while. Rest, just for now.`
  }
];

export default function MoonPetals() {
  const [activeTab, setActiveTab] = useState<'tamil' | 'english'>('tamil');
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <h2 className="text-2xl font-light italic text-yellow-300 mb-6">மறைந்த கவிதைகள் · Hidden Verses</h2>

      {poems.map((poem) => (
        <div
          key={poem.id}
          className="bg-gray-900/60 rounded-2xl p-4 mb-6 transition hover:shadow-lg"
        >
          <button
            onClick={() => toggleOpen(poem.id)}
            className="w-full text-left"
          >
            <h3 className="text-yellow-300 text-lg font-medium">{poem.title}</h3>
            <p className="text-gray-400 italic text-sm mt-1">{poem.snippet}</p>
          </button>

          {openId === poem.id && (
            <div className="mt-4 border-l-4 border-yellow-500 pl-4 text-gray-200 font-serif transition-opacity duration-500">
              <div className="flex space-x-4 mb-2">
                <button
                  onClick={() => setActiveTab('tamil')}
                  className={`px-3 py-1 rounded text-sm ${
                    activeTab === 'tamil'
                      ? 'bg-yellow-400 text-black'
                      : 'bg-gray-800 text-white'
                  }`}
                >
                  தமிழ்
                </button>
                <button
                  onClick={() => setActiveTab('english')}
                  className={`px-3 py-1 rounded text-sm ${
                    activeTab === 'english'
                      ? 'bg-yellow-400 text-black'
                      : 'bg-gray-800 text-white'
                  }`}
                >
                  English
                </button>
              </div>
              <p className="whitespace-pre-line tamil text-lg">
                {activeTab === 'tamil' ? poem.tamil : poem.english}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}