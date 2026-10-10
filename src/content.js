// src/content.js
const content = {
  music: "/path-to-your-music.mp3", 
  
  menu: {
    title: "pick a gift",
    subtitle: "choose one to open ↓",
    items: [
      { id: "memories", icon: "📸", label: "Captured Memories" },
      { id: "video", icon: "🎬", label: "Our Video" },
      { id: "song", icon: "🎵", label: "our song" },
      { id: "letter", icon: "💌", label: "Love Letter" }
    ]
  },

  song: {
    audioSrc: "/music/music.mp3",
    remindsText: "this song always makes me think of you",
    songTitle: "our song",
    artist: "for you 🎵",
    highlight: "every lyric feels like us 💕",
    title: "our song",
    returnButton: "RETURN"
  },

  // استخدام علامات ` بدل "" يسمح لك بالنزول بالـ Enter مباشرة بدون \n
  letter: {
    title: "a letter",
    message: `حبيب حياتي وكل دُنيتي كل سنه وانت طيب يا اغلى من دخل حياتي وأغلى شخص علي قلبي اكتر حد ممكن اكون مرتاحه ومطمنه معاه أنا مش هفضل اتكلم عن اللي جوايا ليك كتير علشان أنا فعلا مهما اتكلمت عمرو الكلام م هيوصف ربع مكانتك عندي بس حقيقي يا إبراهيم انت جيت صلحت حجات كتيره اوي جيت عوضني عن حجات مكنتش متخيله ان ممكن ربنا يجبر بخاطري بشكل ده في يوم من الايام حنيتك وخوفك عليا واهتمامك بيا كل حاجه مش عارفه اتكلم عن اي ولا اي بجد بس أنا متأكده و واثقه انت حظي الحلو في الدنيا وان ربنا باعتك ليا هديه من عندو علشان يقولي انو كان شايلي حاجه حلوه ليا بعد كل التعب ده انت عوضي من الدنيا يا بابا والله انت ابويا واخويا وصحبي و حبيبي انت كل حاجه والله مكنتش متخيله اني ممكن أدي مكان بابا ده لحد ابداً طول عمري كنت شايفه ان خلاص بابا مات عمرو محد هيجي يقدر يعوضني عنو بس أنا شيفاك وانت بتعمل كل اللي تقدر عليه علشان تعوضني الحته اللي نقصاني دي وانت تستاهل اني أحطك في المكانه دي والله أنا عاوزه اقولك بس اني فعلا فعلا بحبك اوي يا حبيبي والله وعمري متخيل حياتي وانت مش موجود فيها لو ليا امنيه واحده هتبقى اننا نكون في بيت واحد سوا ونعيش الحياه اللي بنحلم بيها آخر حاجه هقولهالك ان ان شاءالله ميجيش عليك عيد ميلاد وانا مش موجوده فيه هكون موجوده كل السنين الجايه علشان نتبسط ب اليوم ده مع بعض 🌍♥️♥️♥️`,

    signoff: "your love",
    signature: "yours always ♡",
    returnButton: "RETURN"
  },

  memories: {
    title: "our memories",
    images: [
      { src: "/images/placeholder-3.jpg", label: "" },
      { src: "/images/placeholder-4.jpg",  label: "" },
      { src: "/images/placeholder-5.jpg", label: "" },
      { src: "/images/placeholder-6.jpg", label: "" },
    ],
    returnButton: "RETURN"
  },

  video: {
    title: "for you",
    videoSrc: "/videos/video.mp4", 
    caption: "a little something I put together",
    returnButton: "RETURN"
  }
};

export default content;