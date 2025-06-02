import { FaHeartbeat, FaLayerGroup, FaLeaf, FaPiggyBank, FaSeedling } from "react-icons/fa";
import { GiCorn } from "react-icons/gi";
import DummyImage0 from "@/app/assets/images/ai/dummy-farmer.jpeg"
import DummyImage2 from "@/app/assets/images/ai/dummy-farmer-2.png"
import DummyImage1 from "@/app/assets/images/ai/dummy-farmer-1.jpeg"
import Akloyo from "@/app/assets/images/staff/gm.jpg"
import Bernice from "@/app/assets/images/staff/bernice.png"
import Hoffman from "@/app/assets/images/staff/hoffman.jpeg"
import Mac from "@/app/assets/images/staff/mac.jpeg"

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

export const strategyData = {
  "company": "Big Stars Animal Feed Limited",
  "businessStrategy": {
    "overview": "Deliver high-quality, sustainable animal nutrition solutions while expanding market presence across Ghana and West Africa.",
    "strategicPillars": [
      {
        "title": "Innovative and Sustainable Nutrition",
        "description": "Scientifically formulated feeds using energy-efficient machinery to reduce waste and conserve resources."
      },
      {
        "title": "Local Sourcing and In-House Processing",
        "description": "Utilizes locally grown, non-GMO ingredients and processes soybeans in-house to ensure quality and reduce carbon footprint."
      },
      {
        "title": "Nationwide Distribution Network",
        "description": "Operates across all 16 regions of Ghana with distributors, depots, and direct farm gate access to ensure wide availability."
      },
      {
        "title": "Product Diversification",
        "description": "Expanded into agro-seeds with the Kings Seeds brand, offering certified seeds for maize, rice, and soybeans to support sustainable agriculture."
      },
      {
        "title": "Quality Assurance and Certifications",
        "description": "Certified by Ghana Standards Authority, FDA, and MOFA to ensure the highest safety and quality standards."
      },
      {
        "title": "Community Engagement and Development",
        "description": "Participates in national programs like 1D1F and invests in rural job creation through feed processing plants."
      }
    ],
    "strategicGoals": [
      "Achieve market leadership in animal nutrition across Ghana and West Africa",
      "Implement and maintain environmentally friendly production practices",
      "Ensure customer satisfaction through product quality and availability",
      "Support farmers with high-quality feed and seed inputs for better yields"
    ]
  }
}

// Company Profile Data
export const companyProfileData = {
  "companyName": "Big Stars Animal Feed Limited",
  "founded": "2017",
  "headquarters": {
    "address": "P.O. Box CS 9379, IND A 12/19, Heavy Industrial Area, Community 7, Tema, Ghana",
    "digitalAddress": "GT-037-4578"
  },
  "contact": {
    "phoneNumbers": [
      "+233 540 112 106",
      "+233 594 015 286",
      "+233 593 866 591",
      "+233 248 739 769"
    ],
    "website": "https://www.bigstars.ltd"
  },
  "mission": "To support the health and well-being of animals by offering innovative and scientifically formulated feed solutions, fostering a better animal production community in Ghana and across West Africa.",
  "vision": "To be a leading provider of innovative and sustainable animal nutrition solutions, contributing to the prosperity of the agricultural sector and the communities it serves.",
  "coreOperations": {
    "feedMill": "12-metric-tonne-per-hour capacity located in Tema, equipped with energy-efficient machinery.",
    "productRange": {
      "mashes": [
        {
          title:"Chick Pre-Starter Mash",
          img:""
        },
        {
          title:"Chick Mash",
          img:""
        },
        {
          title:"Grower Mash",
          img:""
        },
        {
          title:"Layer Mashes",
          img:""
        },
        {
          title:"Broiler Starter and Finisher Mashes",
          img:""
        },
        {
          title:"Guinea Fowl Starter and Finisher",
          img:""
        },
        {
          title:"Pig Feeds",
          img:""
        },
        {
          title:"Rabbit Feed",
          img:""
        },        
      ],
      "concentrates": [
        "Layer Concentrate",
        "Broiler Concentrate",
        "Pig Concentrate"
      ],
      "soybeanMeal": "Non-GMO, locally processed soybean meal.",
      "kingsSeeds": "Certified seeds for maize, rice, and soybeans."
    }
  },
  "sustainability": {
    "practices": [
      "Energy-efficient production to reduce waste and conserve resources.",
      "Local sourcing of non-GMO ingredients.",
      "In-house processing of soybeans for quality control and carbon footprint reduction.",
      "Fair trade partnerships with local farmers.",
      "Engagement in job creation and rural development initiatives."
    ],
    "certifications": [
      "Ghana Standards Authority (GSA)",
      "Food and Drugs Authority (FDA)",
      "Ministry of Food and Agriculture (MOFA)"
    ]
  },
  "distribution": {
    "reach": "Present in all 16 regions of Ghana",
    "channels": [
      "Distributors",
      "Sales depots",
      "Direct farm gate access"
    ]
  },
  "partnerships": {
    "government": "Participates in Ghana’s One District One Factory initiative with a feed processing plant in Tuobodom, Bono East Region.",
    "brands": [
      {
        "name": "Kings Seeds",
        "focus": "Certified seeds for sustainable agriculture",
        "partner": "Fieldnest Agritech, India-Hyderabad"
      }
    ]
  },
  "leadership": [
    {
      "name": "Charles T.M. Blaboe",
      "position": "General Manager"
    },
    {
      "name": "Illyass Yussif",
      "position": "Sales and Marketing Manager"
    },
    {
      "name": "Hoffman Azu",
      "position": "Production Manager"
    },
    {
      "name": "Mac-Wilson Teye Boti",
      "position": "Plant Engineer/Warehouse Manager"
    },
    {
      "name": "Samuel Ankomah Bamfo",
      "position": "Tally Officer"
    }
  ]
}

// Team Data
export const teamData = [
  {
    "name": "Micheal Akloyo",
    "position": "General Manager",
    "description": "Oversees the company's strategic direction and business development, ensuring operational excellence and market growth.",
    "image": Akloyo
  },
  {
    "name": "Bernice Afiazu",
    "position": "Sales Manager",
    "description": "Leads sales strategy, customer engagement, and market expansion",
    "image": Bernice
  },
  {
    "name": "Hoffman Azu",
    "position": "Production Manager",
    "description": "Leads the feed production processes and enforces rigorous quality control standards to maintain product excellence.",
    "image": Hoffman
  },
  {
    "name": "Mac-Wilson Teye Boti",
    "position": "Plant Engineer / Warehouse Manager",
    "description": "Manages engineering operations and warehouse logistics to support efficient supply chain and storage systems.",
    "image": Mac
  }
]
