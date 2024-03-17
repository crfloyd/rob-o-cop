import {
  ticketing,
  discord,
  discordBlack,
  facebook,
  figma,
  framer,
  instagram,
  notion,
  photoshop,
  protopie,
  raindrop,
  slack,
  telegram,
  twitter,
  cyberk9,
  dataDome,
  neonGuard,
  quantumNet,
  synthWave,
  donutIcon,
  copIcon,
  sheriffIcon,
  reenactment,
  fingerprinting,
  polygraph,
  encryption,
  therapy,
  service5,
  dance1,
  dance2,
  dance3,
  dance4,
  dance5,
  donut,
  carScan,
  uniformRepair,
  sirenSongs,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Services Offered",
    url: "#services",
  },
  {
    id: "2",
    title: "roadmap",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "Music Player",
    url: "#music",
    onlyMobile: false,
  },
  {
    id: "4",
    title: "Integrations",
    url: "#integrations",
    onlyMobile: false,
  },
  {
    id: "5",
    title: "Contact",
    url: "#contact",
    onlyMobile: false,
  },
];

export const notificationImages = [copIcon, donutIcon, sheriffIcon];

export const companyLogos = [
  {
    name: "Cyber K9 Solutions",
    description:
      "Providers of robotic K-9 units for digital tracking and protection.",
    image: cyberk9,
  },
  {
    name: "Data Dome Defenders",
    description:
      "A company dedicated to securing personal data with dome-like encryption barriers.",
    image: dataDome,
  },
  {
    name: "Neon Guard Security",
    description: "Specializing in neon-lit digital shields and cybersecurity",
    image: neonGuard,
  },
  {
    name: "Quantum Net Solutions",
    description: "Focused on quantum encryption and network security",
    image: quantumNet,
  },
  {
    name: "Synth Wave Systems",
    description:
      "Innovators in AI-driven surveillance and law enforcement tools, with a retro-futuristic vibe",
    image: synthWave,
  },
];

export const danceImages = [service5, dance1, dance2, dance3, dance4, dance5];

export const roadmap = [
  {
    id: "0",
    title: "Automatic Donut Dispenser",
    text: "Craving a snack? Rob-O-Cop's automatic Donut Dispenser offers a lawful indulgence for those on-the-go moments. Taste the taste of justice and sustenance!",
    date: "Dec 2023",
    status: "progress",
    imageUrl: donut,
  },
  {
    id: "1",
    title: "Voice-Activated Siren Songs",
    text: "Need to clear traffic or soothe a situation? Rob-O-Cop's siren will soon include an array of voice-activated tunes, from calming melodies to authoritative anthems. Control the vibe of every ride.",
    date: "May 2025",
    status: "progress",
    imageUrl: sirenSongs,
  },
  {
    id: "2",
    title: "Contraband Scanning",
    text: "Rob-O-Cop's Contraband Scanning feature will detect and report any illegal items, from weapons to unauthorized snacks. Keep your community safe and contraband-free.",
    date: "March 2024",
    status: "done",
    imageUrl: carScan,
    colorful: true,
  },
  {
    id: "3",
    title: "Self-Repairing Uniforms",
    text: "Combat wear and tear with nanotechnology. Rob-O-Cop's uniform will soon self-repair from damage, ensuring he always looks his best while on duty. Because presentation is key, even in law enforcement.",
    date: "Aug 2028",
    status: "progress",
    imageUrl: uniformRepair,
  },
];

export const collabText =
  "Rob-O-Cop is designed to work seamlessly with your favorite apps. Whether you're a designer, developer, or a law enforcement officer, Rob-O-Cop has you covered.";

export const collabContent = [
  {
    id: "0",
    title: "Justice",
  },
  {
    id: "1",
    title: "Security",
  },
  {
    id: "2",
    title: "Coffee and donuts",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Cyber-Speed Ticketing",
    text: "Blink and you'll miss it, but don't worry, our Rob-O-Cop never does. Catching speedsters in the data streams with unmatched efficiency.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    image: ticketing,
  },
  {
    id: "1",
    title: "Holographic Crime Scene Reenactments",
    text: "Why rely on witness statements when you can watch a replay? Our Rob-O-Cop brings crime scenes to life with holographic precision.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    image: reenactment,
    light: true,
  },
  {
    id: "2",
    title: "Digital Dusting for Fingerprints",
    text: "Forget the brush and powder; our Rob-O-Cop scans for digital fingerprints on any device. Unauthorized access meets unmatched tracking.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    image: fingerprinting,
  },
  {
    id: "3",
    title: "AI-Powered Lie Detection Interviews",
    text: "Rob-O-Cop's built-in lie detector makes Pinocchio's nose look like child's play. Now featuring discomfort sensors for when subjects really start to squirm.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    light: true,
    image: polygraph,
  },
  {
    id: "4",
    title: "Quantum Encrypted Witness Protection",
    text: "Keep your witnesses safer than ever in our quantum-encrypted safe houses. Not even Schrödinger's cat could find them.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    image: encryption,
  },
  {
    id: "5",
    title: "Robo-Therapy Sessions for Cyber Criminals",
    text: "Rehabilitation through algorithmic therapy sessions, tailored to the criminal's psyche. Rob-O-Cop turns lawbreakers into law-abiding citizens, one byte at a time.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    image: therapy,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
