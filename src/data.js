import { FaBalanceScale, FaBox, FaDrumstickBite, FaEgg, FaFeather, FaHeartbeat, FaLayerGroup, FaLeaf, FaPiggyBank, FaSeedling, FaWarehouse } from "react-icons/fa";
import { GiBigEgg, GiBirdTwitter, GiBroccoli, GiChicken, GiChickenLeg, GiChickenOven, GiCorn, GiEggClutch, GiMeal, GiMeat, GiMuscleUp, GiPig, GiPigFace, GiRoastChicken, GiSteak, GiWeightLiftingUp, GiWheat } from "react-icons/gi";
import DummyImage0 from "@/app/assets/images/ai/dummy-farmer.jpeg"
import DummyImage2 from "@/app/assets/images/ai/dummy-farmer-2.png"
import DummyImage1 from "@/app/assets/images/ai/dummy-farmer-1.jpeg"
import Akloyo from "@/app/assets/images/staff/gm.jpg"
import Bernice from "@/app/assets/images/staff/bernice.png"
import Hoffman from "@/app/assets/images/staff/hoffman.jpeg"
import Mac from "@/app/assets/images/staff/mac.jpeg"

// Poultry Image
import PoultryImage1 from "@/app/assets/images/poultry/poultry.png"
import PoultryImage2 from "@/app/assets/images/poultry/poultry-1.jpg"
import PoultryImage3 from "@/app/assets/images/poultry/poultry-2.jpg"
import PoultryImage4 from "@/app/assets/images/poultry/poultry-8.jpg"
import PoultryImage5 from "@/app/assets/images/poultry/poultry-4.jpg"
import PoultryImage6 from "@/app/assets/images/poultry/poultry-5.jpg"

// Swine Image
import SwineImage1 from "@/app/assets/images/swine/pig-1.avif"
import SwineImage2 from "@/app/assets/images/swine/pig-2.jpg"
import SwineImage3 from "@/app/assets/images/swine/pig-3.jpg"
import SwineImage4 from "@/app/assets/images/swine/pig-4.avif"
import SwineImage5 from "@/app/assets/images/swine/pig-4.jpg"
import SwineImage6 from "@/app/assets/images/swine/pig-5.avif"


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

// Poultry Feed Data
export const poultryFeedData = {
  "services": {
    "description": "Big Stars Animal Feed provides high-quality poultry feed and concentrates formulated for different stages of poultry development. Their services support improved productivity, nutritional health, and farmer profitability across Ghana and West Africa.",
    "feed_products": [
      {
        "name": "Chick Pre-Starter Mash",
        "description": "A specially formulated mash for day-old chicks (1–7 days), providing vital nutrients for a healthy start.",
        "icon": <GiBigEgg />
      },
      {
        "name": "Chick Mash",
        "description": "Balanced feed for chicks aged 2–8 weeks, supporting strong growth and development during the early brooding phase.",
        "icon": <GiChicken />
      },
      {
        "name": "Grower Mash",
        "description": "Designed for pullets aged 9–18 weeks to build healthy body mass before laying begins.",
        "icon": <GiBroccoli />
      },
      {
        "name": "Layer Plus",
        "description": "High-energy feed for early laying hens (19–29 weeks) to boost egg production onset.",
        "icon": <GiEggClutch />
      },
      {
        "name": "Layer Mash 1",
        "description": "Complete feed for layers in mid-production (30–50 weeks), formulated to maximize egg output and shell strength.",
        "icon": <FaBalanceScale />
      },
      {
        "name": "Layer Mash 2",
        "description": "Optimized for late-stage layers (50 weeks+), sustaining consistent egg quality and hen health.",
        "icon": <FaBox />
      },
      {
        "name": "Broiler Starter Mash",
        "description": "Nutrient-dense feed to promote rapid growth and muscle development in broilers during the first weeks.",
        "icon": <GiChickenOven />
      },
      {
        "name": "Broiler Finisher Mash",
        "description": "Supports weight gain and meat quality in broilers nearing market age.",
        "icon": <GiMeat />
      },
      {
        "name": "Guinea Fowl Starter",
        "description": "Special feed for young guinea fowl to support healthy early development and immune function.",
        "icon": <GiBirdTwitter />
      },
      {
        "name": "Guinea Fowl Finisher",
        "description": "Finishing feed tailored for mature guinea fowls to enhance growth and meat yield.",
        "icon": <GiRoastChicken />
      }
    ],
    "concentrates": [
      {
        "name": "50% Chick Concentrate",
        "description": "High-protein supplement for mixing chick starter feed formulations.",
        "icon": <GiChickenLeg />
      },
      {
        "name": "50% Grower Concentrate",
        "description": "Designed to mix balanced grower feed for developing birds.",
        "icon": <GiWheat />
      },
      {
        "name": "5% Layer Concentrate",
        "description": "Highly efficient formula for egg-laying birds to be mixed with farm-based grains.",
        "icon": <FaEgg  />
      },
      {
        "name": "20% Layer Concentrate",
        "description": "Provides essential minerals and nutrients to support layers in mid-production.",
        "icon": <FaDrumstickBite />
      },
      {
        "name": "25% Layer Concentrate",
        "description": "Customized for enhanced feed efficiency in high-performance laying hens.",
        "icon": <FaFeather />
      },
      {
        "name": "50% Layer Concentrate",
        "description": "A balanced formulation for flexibility in home feed mixing for laying birds.",
        "icon": <FaWarehouse />
      },
      {
        "name": "5% Broiler Concentrate",
        "description": "Minimal inclusion formula to improve cost-efficiency and broiler growth.",
        "icon": <GiWeightLiftingUp />
      },
      {
        "name": "30% Broiler Concentrate",
        "description": "Balanced nutrition source to formulate energy-dense broiler feed.",
        "icon": <GiSteak />
      },
      {
        "name": "35% Broiler Concentrate",
        "description": "Rich in protein and minerals for building quality broiler muscle mass.",
        "icon": <GiMuscleUp />
      },
      {
        "name": "50% Broiler Concentrate",
        "description": "Highly concentrated base to mix your own complete broiler feed at farm level.",
        "icon": <GiMeal />
      }
    ]
  }
}

// Poultry Image Data
export const poultryImageData = [
  {
    "id": 1,
    "src": PoultryImage1,
    "alt": "50kg bag of Egg Layer Concentrate from Big Stars Animal Feed"
  },
  {
    "id": 2,
    "src": PoultryImage2,
    "alt": "Big Stars Broiler Grower Feed package stacked in warehouse"
  },
  {
    "id": 3,
    "src": PoultryImage3,
    "alt": "Healthy poultry birds fed with Big Stars feed"
  },
  {
    "id": 4,
    "src": PoultryImage4,
    "alt": "Animal feed production process at Big Stars facility"
  },
  {
    "id": 5,
    "src": PoultryImage5,
    "alt": "Farmer holding Big Stars feed with poultry in background"
  },
  {
    "id": 5,
    "src": PoultryImage6,
    "alt": "Farmer holding Big Stars feed with poultry in background"
  },
]
// Swine Image Data
export const swineImageData = [
  {
    "id": 1,
    "src": SwineImage1,
    "alt": "50kg bag of Egg Layer Concentrate from Big Stars Animal Feed"
  },
  {
    "id": 2,
    "src": SwineImage2,
    "alt": "Piglets feeding from a sow in a clean pigsty"
  },
  {
    "id": 3,
    "src": SwineImage3,
    "alt": "Lactating sow lying down with a litter of piglets"
  },
  {
    "id": 4,
    "src": SwineImage4,
    "alt": "A well-maintained swine farm using Big Stars Animal Feed"
  },
  {
    "id": 5,
    "src": SwineImage5,
    "alt": "Piglets feeding from a sow in a clean pigsty"
  },
  {
    "id": 5,
    "src": SwineImage6,
    "alt": "Piglets feeding from a sow in a clean pigsty"
  },
]

// Swine Feed Data
export const swineFeedData = {
  "category": "Pig Feed",
  "company": "Big Stars Animal Feed",
  "description": "Big Stars Animal Feed offers a range of specialized pig feeds tailored to meet the nutritional needs of pigs at various stages of growth and reproduction. These feeds are designed to support optimal health, growth, and productivity in swine.",
  "products": [
    {
      "name": "Pig Weaner/Lactating Sow Feed",
      "description": "Formulated to support the nutritional requirements of piglets during weaning and lactating sows, ensuring healthy development and milk production.",
      "icon": <FaPiggyBank />
    },
    {
      "name": "Pig Finisher Feed",
      "description": "Designed to promote rapid weight gain and efficient feed conversion in pigs approaching market weight.",
      "icon": <GiPigFace />
    },
    {
      "name": "Pig Breeder Feed",
      "description": "Tailored to meet the needs of breeding pigs, enhancing reproductive performance and overall health.",
      "icon": <GiPig />
    }
  ],
  "contact": {
    "website": "https://www.bigstars.ltd",
    "email": "admin@bigstars.ltd",
    "phone": [
      "+233 593 866 591",
      "+233 540 109 002",
      "+233 540 109 001"
    ],
    "address": "P.O. Box CS 9379, IND A 12/19, Heavy Industrial Area, Community 7, Tema, Ghana"
  },
  "distribution": "Available in all 16 regions of Ghana through sales depots and agents.",
  "source": "https://www.bigstars.ltd"
}
