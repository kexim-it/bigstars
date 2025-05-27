import { FaHeartbeat, FaLayerGroup, FaLeaf, FaPiggyBank, FaSeedling } from "react-icons/fa";
import { GiCorn } from "react-icons/gi";
import DummyImage0 from "@/app/assets/images/ai/dummy-farmer.jpeg"
import DummyImage2 from "@/app/assets/images/ai/dummy-farmer-2.png"
import DummyImage1 from "@/app/assets/images/ai/dummy-farmer-1.jpeg"

export const MainServiceData = [
  // {
  //   "title": "Our Feed Recipients",
  //   "description": "We provide high-quality feed for a variety of animals, ensuring optimal nutrition and performance across all species we serve.",
  //   "icon": <FaPiggyBank className='text-4xl text-[var(--blue)] my-4 group-hover:text-[var(--orange)] duration-300 ease-in-out' />,
  //   "link": "/our-feed-recipients"
  // },
  // {
  //   "title": "Sustainability",
  //   "description": "Our production processes prioritize environmental responsibility by reducing waste, conserving resources, and supporting a greener future.",
  //   "icon": <FaLeaf className='text-4xl text-[var(--blue)] my-4 group-hover:text-[var(--orange)] duration-300 ease-in-out' />,
  //   "link":"/sustainability"
  // },
  {
    "title": "Responsible Feeding",
    "description": "We promote responsible feeding practices that align with animal needs and support long-term agricultural productivity.",
    "icon": <FaSeedling className='text-4xl text-[var(--blue)] my-4 group-hover:text-[var(--orange)] duration-300 ease-in-out' />,
    "link": "/responsible-feeding"
  },
  {
    "title": "Feed Types",
    "description": "Explore our diverse range of feed products, each tailored to meet the nutritional demands of different animals and farming goals.",
    "icon": <FaLayerGroup className='text-4xl text-[var(--blue)] my-4 group-hover:text-[var(--orange)] duration-300 ease-in-out' />,
    "link": "/feed-types"
  },
  {
    "title": "Animal Welfare",
    "description": "Animal health and well-being are at the core of everything we do, ensuring ethical care and proper nourishment.",
    "icon": <FaHeartbeat className='text-4xl text-[var(--blue)] my-4 group-hover:text-[var(--orange)] duration-300 ease-in-out' />,
    "link": "/animal-welfare"
  },
  {
    "title": "Kings Seeds",
    "description": "Our premium seed selection complements our feed solutions, supporting healthy crop growth and sustainable farming.",
    "icon": <GiCorn className='text-4xl text-[var(--blue)] my-4 group-hover:text-[var(--orange)] duration-300 ease-in-out' />,
    "link": "/kings-seeds"
  }
]


export const QuickLinks = [
  {
    "title": "Where to Find Us",
    "link": "/where-to-find-us"
  },
  {
    "title": "Our Story",
    "link": "/our-story"
  },
  {
    "title": "Our Team",
    "link": "/our-team"
  },
  {
    "title": "Vision & Mission",
    "link": "/vision-and-mission"
  },
  {
    "title": "Ethical Feed Production",
    "link": "/ethical-feed-production"
  },
  {
    "title": "Feed Safety Standards",
    "link": "/feed-safety-standards"
  },
  {
    "title": "Get in Touch",
    "link": "/get-in-touch"
  }
]

// Testimonials
export const TestimonialsData = [
  {
    name: "Kwame Gyamfi",
    location: "Accra, Ghana",
    image: DummyImage2,
    testimonial: "Big Stars' Supreme Hybrid Maize changed my entire harvest season. I got almost double the yield I used to have!",
    cta: "Explore my journey with Big Stars",
    url: {
      profile: "/testimonials/kwame-gyamfi",
      video: "https://www.youtube.com/watch?v=kwame123"
    }
  },
  {
    name: "Akosua Nyamekye",
    location: "Kumasi, Ghana",
    image: DummyImage0,
    testimonial: "Their poultry feed has kept my birds healthy and strong. I've seen real improvements in egg production.",
    cta: "See how Big Stars improved my farm",
    url: {
      profile: "/testimonials/akosua-nyamekye",
      video: "https://www.youtube.com/watch?v=akosua456"
    }
  },
  {
    name: "Yaw Boadi",
    location: "Tamale, Ghana",
    image: DummyImage1,
    testimonial: "Thanks to Big Stars Animal Feed, my livestock look healthier and gain weight faster. The results speak for themselves.",
    cta: "Discover my livestock story",
    url: {
      profile: "/testimonials/yaw-boadi",
      video: "https://www.youtube.com/watch?v=yaw789"
    }
  },
  {
    name: "Ama Serwaa",
    location: "Cape Coast, Ghana",
    image: DummyImage2,
    testimonial: "The Teemeer 02 hybrid maize exceeded my expectations. It grew fast, strong, and resisted drought like magic.",
    cta: "Read how Teemeer 02 helped me grow",
    url: {
      profile: "/testimonials/ama-serwaa",
      video: "https://www.youtube.com/watch?v=ama101"
    }
  },
  {
    name: "Kojo Mensah",
    location: "Ho, Ghana",
    image: DummyImage2,
    testimonial: "I’ve tried many feeds, but Big Stars' products gave me the best growth rate for my broilers.",
    cta: "Experience my success story",
    url: {
      profile: "/testimonials/kojo-mensah",
      video: "https://www.youtube.com/watch?v=kojo202"
    }
  },
  {
    name: "Esi Asantewaa",
    location: "Sunyani, Ghana",
    image: DummyImage1,
    testimonial: "Using Big Stars' goat and sheep feed has made a huge difference. My animals are healthier and more active.",
    cta: "Follow my feeding journey",
    url: {
      profile: "/testimonials/esi-asantewaa",
      video: "https://www.youtube.com/watch?v=esi303"
    }
  },
  {
    name: "Daniel Opoku",
    location: "Techiman, Ghana",
    image: DummyImage0,
    testimonial: "The quality of Kings Seeds is unmatched. My maize farm looked more vibrant and yielded more this year.",
    cta: "Explore how Kings Seeds helped me",
    url: {
      profile: "/testimonials/daniel-opoku",
      video: "https://www.youtube.com/watch?v=daniel404"
    }
  },
  {
    name: "Abena Dapaah",
    location: "Nsawam, Ghana",
    image: DummyImage0,
    testimonial: "Their customer support is top-notch. I got expert advice and the results from the feed were amazing.",
    cta: "See what Big Stars did for me",
    url: {
      profile: "/testimonials/abena-dapaah",
      video: "https://www.youtube.com/watch?v=abena505"
    }
  },
  {
    name: "Isaac Owusu",
    location: "Wa, Ghana",
    image: DummyImage2,
    testimonial: "Big Stars Animal Feed has been a game-changer for my poultry business. The quality is consistent and reliable.",
    cta: "Hear how Big Stars fed my flock",
    url: {
      profile: "/testimonials/isaac-owusu",
      video: "https://www.youtube.com/watch?v=isaac606"
    }
  },
  {
    name: "Grace Owusu-Ansah",
    location: "Koforidua, Ghana",
    image: DummyImage1,
    testimonial: "I was skeptical at first, but after using their hybrid maize and feed, I’m now a loyal customer for life.",
    cta: "Explore why I trust Big Stars",
    url: {
      profile: "/testimonials/grace-owusu-ansah",
      video: "https://www.youtube.com/watch?v=grace707"
    }
  }
];

export const footerLinks = [
  {
    title: "Animal Nutrition",
    links: ["Animals", "Feed types", "On the farm approach", "Research & development", "Quality"]
  },
  {
    title: "Working at Big Stars",
    links: ["Careers", "Vacancies", "Our culture", "Our people", "Learning & development"]
  },
  {
    title: "Sustainability",
    links: ["Sustainability", "Global challenges", "Responsible feeding"]
  },
  {
    title: "Get in Touch",
    links: ["Contact information", "Press & Media", "Countries"]
  }
];