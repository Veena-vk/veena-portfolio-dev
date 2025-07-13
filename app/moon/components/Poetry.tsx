'use client';

import { useState } from 'react';

const poems = [
  {
    id: 'venpatchi',
    title: 'யாவையும் அல்லையும்',
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
and still, they are not you.`
  },
{
    id: 'brimmingInDark',
    title: 'Brimming in the Dark',
    snippet: 'நிழலாக நீ என் மேனியெங்கும் படர... மையிருட்டில் மனமும் நிறையட்டும்',
    tamil: `நித்திரை விழித்திரை விட்டகலும் - இது
நிமிடங்கள் நினைவாகும் இரசவாதம்
நிழலாக நீ என் மேனியெங்கும் படர
நிலவொளியில் நனைந்தவாறே நான்

அருகே நீ, அமைதியாய்.. அணைக்காது...
ஆவி தவிக்கிறது, என்னில் நிலைகொள்ளாது
இன்பத்தால் இம்சிப்பது இயல்பென்றானதோ
ஈடேறத் துடிக்கும் ஆசைகள் பார் 
வரிசையில்

மழைக்காற்றின் முத்தத்தில் சிலிர்த்து
மண்ணின் மடிவிழும் மலரென நான்
உன் தொடாமல் அணைக்கும் பார்வையில்
தொலைந்து, கரைந்து போகிறேன் வழியில்

காதலின் கனம் மனதில் கூடிக்கொண்டே போகிறது
எடைக்குறைப்பு செய் என் இடைபற்றி இழுத்து
பிரிந்துக் கிடக்கும் கதவுகள் சேரட்டும்
மையிருட்டில் மனமும் நிறையட்டும்`,
    english: `When sleep lifts its curtain
And minutes melt into golden memory,
You spread like a shadow over my skin
While I remain soaked in moonlight.

You're near me, quiet… but never embracing.
My breath trembles, unable to settle.
Is it nature’s law that pleasure should torment?
Look — my desires line up,
Desperate to be fulfilled.

Shivering at the kiss of monsoon wind,
Like a flower surrendering to the fall of earth,
I dissolve in your gaze—
That touches without touch.

The weight of love gathers inside me.
You pull at my waist, easing that pressure.
Let the doors that once stood apart come together.
And in perfect darkness, may my soul be filled.`
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
  },

{
    id: 'Peopleapoem',
    title: 'People, a piece of art',
    snippet: 'பிழைக்க வழி தேடி வாழ்வை விரட்டுகையில்... இலக்கிய கவிதைகளாகி போகின்றனர்',
    tamil: `பிழைக்க வழி தேடி வாழ்வை விரட்டுகையில்
தொலைந்து போன என் இலக்கிய ரசனைகள்
சொற்ப காலமாய் மீட்டெடுப்பதென்னவோ
சற்று நேரம் நான் கடக்கும் மானுடர்கள்

அன்றலர்ந்த புது மலர் காண்கையில்
உள்ளமும் மெல்லென விரிதற்போல்
அன்பில் நிறைந்த மக்கள் மொழியில்
கனிந்து கண்களும் பனிக்கிறது

கண்டறியப்பட்ட பல்வேறு நிறமாலைகளில்
பார்க்க முடிந்தது மட்டுமே பல வண்ணங்கள்
கருப்பு வெள்ளை என்று இரண்டு சாயங்கள்
மனித மனங்களுக்கு மட்டும் போதுமா என்ன

காதலும் கோபமும் வாஞ்சையும் விரக்தியும்
நாணமும் காமமும் வலியும் வெறுப்பும்
 உணர்வுகளின் வண்ணப்படங்களாய்
இலக்கிய கவிதைகளாகி போகின்றனர்`,
    english: `In the hustle of earning for living
The dying flames of my poetic pleasures
Gets fueled from people I come across
Possibly for only a brief moment though

A fresh morning rose, a perfect sip of coffee
Fragrance of rainy soil, a romantic musical piece
The Perception of senses, if they are capable
Of turning into literature, why not humans? 

Among the known vast band of spectrum
Even visible range of colors are many
Then how could it be rational to classify
Intricate human minds as black or white

Happiness, sorrow, struggles and pain, 
Anger, compassion, love and lust, 
People are what these made them into
A salad bowl of complex emotions

When they express themselves to me, 
I get excited, I watch them in awe. 
Deeds can be good, deeds can be bad, 
But people remain as they are,  a piece of art`
  },
{
    id: 'Lovelikethorn',
    title: 'Love, like a thorn',
    snippet: 'வேனில் முடிந்து கார்காலம் துவங்க... வெளியேறியது காதல் மயக்கம்',
    tamil: `வேனில் முடிந்து கார்காலம் துவங்க
பருவம் எய்திய மகரந்த வனங்கள்
தென்றல் தழுவலில் நெகிழ்ந்திருக்க
தோழியரோடு மலர்கொய்ய சென்றேன்
விரிந்த இதழ்களில் தான் எத்துணை வண்ணங்கள்
வண்ணங்கள்... வெட்கங்களின் விதங்களோ
இவ்வெட்கங்களை ஒன்றாக தொடுத்து 
வாசத்தையும் வாடகைக்கு பெற்று
காதல் கைகூட கூந்தலில் சூட்டிக் கொண்டிருந்தனர்
உடன் வந்த என் உயிர் சிநேகிதிகள்
நான் மட்டும் இங்கே வேற்றானவள்
வேடிக்கை மட்டும் பார்க்க வந்தவள்
கண்களில் அப்போது தென்பட்டது 
தரையோடுப் படர்ந்திருந்த சிறுநெருஞ்சி
அந்தி மஞ்சள் மலர் ஆளான சேதி சொன்ன போதும்
வாடைக்கு அதை தீண்ட மனமில்லை
புதர் மண்டிச் செழித்த செடிகள் தாம் சல்லாபத்திற்கு உகந்ததோ, யாரறிவர்
என்போல் அன்பிற்காய் ஏங்கி
பரிதாபமாக தென்பட்ட அதனை
பரிவுடன் கையிலெடுத்தேன் 
கூர்மை கையினை கிழிக்க
குருதியுடன் கூடவே வெளியேறியது
காதல் மயக்கம்....`,
    english: `As summer ended and monsoon began,
The honey-sweet groves had come of age.
Swaying in the breeze, stirred to bloom,
I went flower-picking with my friends.

How many hues lay hidden
In those wide-spread petals —
Colors... perhaps shades of shyness itself?

They gathered those timid blushes,
Tied them into garlands of fragrance,
And wore love in their hair —
My soul-sisters, vibrant and alive.

But I — I was different.
A stranger there.
Just a witness to the scene.
And then I saw it...

A tiny thorny plant crawling along the soil.
Even when its yellow blossom
Had already claimed its moment —
I couldn’t bring myself to touch it.

Who knows which shrubs,
growing wild and dense,
Are suited for conversation?

It looked like me —
Longing, unloved, pitiable.
Moved by that, I reached for it gently...

But its sharp thorns tore my palm.
And with the blood that trickled out —
Came the dizziness of love.`
  },
  {
    id: 'afterrain',
    title: 'After the Rain',
    snippet: 'சாமம் மூன்றான பொழுது... என்னோடு காதல் புரிய  வாராய்',
    tamil: `சாமம் மூன்றான பொழுது அது
மழை பெய்து ஓய்ந்திருந்தது 
காமம் முடிந்து தரும் முத்தமென
மெல்லமாய் சின்ன சாரல் மட்டும்

வெளியே வா வீதிவரை செல்வோம்
வான்நீர் விழுந்து கழுவித் துடைத்த
பளிங்கென மின்னும் தார்சாலை
கால் பதித்து நாம் வலம் வருவோம்

மரங்களிடம் காதல் கதை கேட்டபடி வா
நிலவொளி கலந்த நீரில் நனைந்தபடி
பரவசமாகி தேகம் சிலிர்ப்பதைக் காண்
வெள்ளி உருகி ஊற்றும் வெட்கம் காண்

மண்ணோடு மலர் மணம் நுகர்ந்தவாறே
காற்றோடு நம் கரங்கள் கோர்த்திருக்க
விண்ணோடு நிலவு கூடி விளையாட
என்னோடு காதல் புரிய  வாராய் `,
    english: `It was the hour of the third twilight,
The rain had just ceased —
Like a kiss that lingers after passion,
A soft drizzle remained, gently falling.

Come with me, let’s walk to the street,
The road washed clean by falling skies,
Glistens like polished crystal —
Let’s wander, leaving quiet footprints.

Come hear the trees whisper their love stories,
As moonlight dances on the wet puddles,
Feel your skin shiver in quiet ecstasy,
See how even silver melts in shy surrender.

Let’s breathe the scent of earth and fresh blossoms,
Let the breeze entwine our fingers,
Let the moon play with the sky and stars,
And you — come love me beneath it all.`
  },
{
    id: 'unapolegeticlove',
    title: 'Come, Let Us Love Like the First Humans',
    snippet: 'பகலெல்லாம் மேல் பொழிந்த அனலெல்லாம்... இரவு ஒன்றல்ல பலவும் காத்திருக்கிறது',
    tamil: `பகலெல்லாம் மேல் பொழிந்த அனலெல்லாம்
மார்கழிப் பனி மீறி மனதிற்குள் காந்துகிறது 
வெளிச்சப் போர்வையில் ஒளிந்திருந்த நிஜமெல்லாம்
நிர்வாண இருளில் இங்கே   வேர்விட்டு வளர்கிறது
அரவணைக்க அருகே உறவொன்று 
இருக்கையில்
பரிதவிப்பை புறக்கணிக்க காரணம் உண்டோ
சுவர்கள் வேண்டாம் கூரையும் வேண்டாம்
கட்டிலும் மெத்தையும் கூட காமத்துக்கு வேண்டாம் 
ஆளரவமற்ற வெளியில் அர்த்த சந்திரன் சாட்சியில்
ஆதி மனிதன் காலத்து காதல் பழக வா
என் மேனியழகைக் இமைக்காது காண்
ஆங்காங்கு படிந்து கிடக்கும் கருந்திட்டுக்களும் காண்
என் நிறை குறைகள் அத்தனையும் மறைக்காது பார்
உன் வெட்கத்தை வாசலில் வைத்து விடு
 தயங்காது உன்னை என் வசம் ஒப்படைக்க வா
மெய்யான இன்பமிதில் இருவரும் இணைத்துக்கொள்ள 
இரவு ஒன்றல்ல பலவும் காத்திருக்கிறது`,
    english: `All the heat poured on me through the day
Now clings to my heart, defying even the chill of Margazhi frost.
Truths once hidden beneath layers of light
Now take root and grow — in the nude dark.

When a warm love sits close enough to hold,
Is there any reason to resist this ache?

We need no walls, no roofs —
Not even a bed or a mattress for desire to rise.
In this open, echo-less space, beneath the witness of a half-moon,
Come — let us love like ancient humans once did.

Look upon my bare body without blinking.
See the scattered dark patches that rest upon it.
See me whole — do not let your eyes skip my flaws.

Leave your shyness at the doorstep.
Come to me without hesitation, surrendering yourself —
In this true union of bliss,
Know that not just this night — but many nights await us.`
  },

{
    id: 'whathaveyoudone',
    title: 'What have you done to me',
    snippet: 'உலகமெலாம் சுதந்திரமாய் சுற்ற விரும்பியவள்... என்ன செய்து விட்டாய் என்னை',
    tamil: `என்ன செய்து விட்டாய் என்னை...

உலகமெலாம் சுதந்திரமாய் சுற்ற விரும்பியவள்- இன்று
உன் கைச் சிறையில் யுக யுகமாய் சிக்குண்டு கிடக்க ஆசை கொள்வதேன்

சரச பார்வையில் என்னை சாகடித்து விடுகிறாய் -
இரவில் மட்டும் விடைபெற்று கொள்கின்றன என் காந்தியக் கொள்கைகள்

அச்சமும் நாணமும் நாய்கட்கென
முழங்கியவள்-இன்று உன் கோபம் கண்டு கண்ணீர் பெருக பேசா மடந்தையாகி நிற்கின்றேன் விந்தையிலும் விந்தை தான்

ஊடல் ஆயிரம் வந்த போதும்
உனக்காய் ஏங்குகிறது பேதை மனம் - அனலிட்ட பனியாய் உடனே தொலைந்து விடுகிறது 
நான் கொண்ட சினம்

எனக்கு என்ன தான் நிகழ்ந்து கொண்டிருக்கிறது - எது என்னை என் இயல்பிலிருந்து துரத்தி எதிர் திசையில் ஓட செய்கின்றது


விலக இயலாத கட்டுண்ட பந்தத்தில் விருப்பம் கொள்கிற அடிமை பெண் நானல்ல - நீ தான் தந்திரம் புரிந்து என்னை வென்றிருக்கிறாய்

சொல்.....
என்ன செய்து விட்டாய் என்னை..`,
    english: `Once, I longed to roam the world in freedom —
But today, I crave to lie caged in your clasping hands,
For ages and ages — why?

Your flirtatious gaze slays me silently,
And by night, even my Gandhian ideals quietly leave me.

I once thundered that fear and shame
Were emotions fit only for dogs —
Yet now, seeing your anger, I stand silent,
Tears flowing, transformed into a meek maiden.
A wonder within a wonder.

Even after a thousand quarrels,
This foolish heart yearns for you still —
And the fire of my anger?
It vanishes instantly like melting frost.

What is happening to me?
What force is dragging me
From my own nature, pushing me to run in reverse?

This bondage — I never wished for,
And yet here I am, a willing captive.
But know this:
I am not the slave woman — you are the one
Who played the trick, and won me.

So tell me...
What have you done to me?`
  },


];

export default function MoonPetals() {
  const [activeTab, setActiveTab] = useState<'tamil' | 'english'>('tamil');
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <h2 className="text-2xl font-light italic text-yellow-300 mb-6">இரவின் மென் மொழிகள்  · Moonlit Whispers</h2>

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