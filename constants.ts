import { ExperienceItem, ProjectData } from './types';

export const HERO_TAGS = [
  "Marketing", "Social Media", "Content", "AI", "SEO", "Branding"
];

export const HERO_STATS = [
  { value: "12+", label: "Projects Done" },
  { value: "6+", label: "Brands" },
  { value: "1 Year", label: "Experience" },
  { value: "1000", label: "Views" },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "SEO Content Writer",
    company: "inNalar.com",
    type: "Contract Employee | Depok",
    period: "November 2024 – January 2025"
  },
  {
    role: "Reporter",
    company: "Ikapunija Media",
    type: "Freelance | Depok",
    period: "November 2024 – May 2025"
  },
  {
    role: "Content Writer",
    company: "PT Independen Media Network",
    type: "Contract Employee | Depok",
    period: "January 2025 – April 2025"
  },
  {
    role: "Digital Marketing",
    company: "PT Awindo Estetika Asia (Elsthetic & Aishi Beauty)",
    type: "Contract Employee | Depok",
    period: "April 2025 – August 2025"
  },
  {
    role: "Video Content Creator",
    company: "PT Karamina Lima Utama (Karamina Tour)",
    type: "Contract Employee | Depok",
    period: "April 2025 – August 2025"
  },
  {
    role: "Video Content Creator",
    company: "ELSPESSO",
    type: "Contract Employee | Depok",
    period: "April 2025 – August 2025"
  },
  {
    role: "Branding & Training Instructor",
    company: "Aishi Aesthetic Academy",
    type: "Contract Employee | Depok",
    period: "April 2025 – August 2025"
  }
];

export const PROJECTS: ProjectData[] = [
  {
    id: 'elsthetic',
    name: 'Elsthetic',
    description: "Elsthetic is a brand launched by PT Awindo Estetika Asia, offering halal and safe skincare products and beauty services. My role involved content creation and developing social media strategies across TikTok, Instagram, Facebook, and Google Business Profile to increase brand visibility.",
    roleDescription: "",
    objectives: [
      "End-to-end social media management",
      "Editorial planning",
      "Content creation & editing",
      "Double Date campaign",
      "Performance optimization"
    ],
    tasks: ["Bumper creation"],
    results: [
      "700+ new views",
      "20+ likes",
      "Achieved 5.0 stars from 113 reviews",
      "More than 13,000 customers"
    ],
    visualRight: {
      mobile: "images/SOCIAL_MEDIA_ELSTHETIC.png",
      logo: "images/logo_1.png"
    },
    videos: [
      { thumbnail: "videos/kecantikan_1.mp4", link: "https://vt.tiktok.com/ZSmhV6US5/" },
      { thumbnail: "videos/kecantikan_2.mp4", link: "https://vt.tiktok.com/ZSmhVSoP9/" },
      { thumbnail: "videos/kecantikan_3.mp4", link: "https://vt.tiktok.com/ZSmhVfbga/" }
    ],
    bumper: "videos/ELSTHETIC_BUMPER.mp4"
  },
  {
    id: 'karamina',
    name: 'Karamina Tour',
    description: "Karamina Tour is an experienced travel agency specializing in Umrah and Hajj services. My role focused on content creation and developing social media strategies across TikTok, Instagram, and Facebook.",
    roleDescription: "",
    objectives: [
      "End-to-end social media management",
      "Editorial planning",
      "Content creation & editing",
      "Double Date campaign",
      "Performance optimization"
    ],
    tasks: ["Bumper creation"],
    results: [
      "1000+ new views",
      "30+ likes",
      "Achieved 5.0 stars from 8 reviews"
    ],
    visualRight: {
      mobile: "images/SOCIAL_MEDIA_KARAMINA_TOUR.png",
      logo: "images/logo_4.png"
    },
    videos: [
      { thumbnail: "videos/travel_2.mp4", link: "https://vt.tiktok.com/ZSmhVecWQ/" },
      { thumbnail: "videos/travel_1.mp4", link: "https://vt.tiktok.com/ZSmhVrxSx/" },
      { thumbnail: "videos/travel_3.mp4", link: "https://vt.tiktok.com/ZSmhVkj1L/" }
    ],
    bumper: "videos/KARAMINA_TOUR_BUMPER.mp4"
  },
  {
    id: 'elspresso',
    name: 'Elspresso',
    description: "Elspresso Coffee is a cozy hangout spot and coworking space located in Cilodong. My role involved content creation and Instagram strategy development.",
    roleDescription: "",
    objectives: [
      "End-to-end social media management",
      "Editorial planning",
      "Content creation & editing",
      "Double Date campaign",
      "Performance optimization"
    ],
    tasks: ["Bumper creation"],
    results: [
      "5 posts per day",
      "100+ views",
      "30+ likes",
      "Achieved 5.0 stars from 7 reviews"
    ],
    visualRight: {
      mobile: "images/SOCIAL_MEDIA_ELSPRESSO.png",
      logo: "images/logo_2.png"
    },
    videos: [
      { thumbnail: "videos/kuliner_1.mp4", link: "https://www.instagram.com/reel/DMUwp8qBd5J/?igsh=czBnc3A3YXJlcW54" },
      { thumbnail: "videos/kuliner_2.mp4", link: "https://www.instagram.com/reel/DMkb0mKhkus/?igsh=MXNuZjVndzd5d200Nw==" },
      { thumbnail: "videos/kuliner_3.mp4", link: "https://www.instagram.com/reel/DMaBAg8B0tG/?igsh=MXA0dGpkanZlamd4MQ==" }
    ],
    bumper: "videos/ELS_BUMPER.mp4"
  },
  {
    id: 'aishi',
    name: 'Aishi Aesthetic Academy',
    description: "Aishi Aesthetic Academy is a certified beauty training center in Indonesia. My role: Branding & Free Design Training Instructor.",
    roleDescription: "",
    objectives: [
      "Bumper creation for branding",
      "Flyers & X-banners for training/events",
      "Free training instructor"
    ],
    tasks: [],
    results: [],
    visualRight: {
      mobile: "images/flyer_pelatihan_2.png", // Serving as flyer
      logo: "images/logo_3.png"
    },
    videos: [], // No videos for this one per prompt
    bumper: "videos/AISHI_AESTHETIC_BUMPER.mp4"
  }
];