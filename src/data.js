import { FaBalanceScale, FaBlender, FaBox, FaDrumstickBite, FaEgg, FaFeather, FaHeartbeat, FaLayerGroup, FaLeaf, FaMoneyBillWave, FaPiggyBank, FaSeedling, FaShieldAlt, FaWarehouse } from "react-icons/fa";
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
import { FaDumbbell } from "react-icons/fa6";


// Chick Image
import ChickImage1 from "@/app/assets/images/poultry/chick-1.webp"
import ChickImage2 from "@/app/assets/images/poultry/chick-2.webp"
import ChickImage3 from "@/app/assets/images/poultry/chick-3.jpg"
import ChickImage4 from "@/app/assets/images/poultry/chick-5.jpg"
import ChickImage5 from "@/app/assets/images/poultry/chick-7.jpg"
import ChickImage6 from "@/app/assets/images/poultry/hen-2.jpg"
import ChickImage7 from "@/app/assets/images/poultry/hen-2.webp"
import ChickImage8 from "@/app/assets/images/poultry/hen-3.jpg"
import ChickImage9 from "@/app/assets/images/poultry/hen-1.webp"
import ChickImage10 from "@/app/assets/images/poultry/chick-9.jpg"

// Welfare Commit Image
import WelfareImage1 from "@/app/assets/images/poultry/poultry.png"
import WelfareImage2 from "@/app/assets/images/poultry/large-poultry-farm.jpeg"
import WelfareImage3 from "@/app/assets/images/poultry/chick-5.jpg"
import WelfareImage4 from "@/app/assets/images/poultry/poultry-2.jpg"

// Slide Image
import SlideData1 from "@/app/assets/images/factory/feed-check-4.jpg"
import SlideData2 from "@/app/assets/images/factory/feed-checking-1.jpg"
import SlideData3 from "@/app/assets/images/factory/feed-bagging-1.jpg"
import SlideData4 from "@/app/assets/images/factory/feed-at-lab-5.jpg"
import SlideData5 from "@/app/assets/images/factory/feed-at-lab-3.jpg"

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
    "link": "/animal-nutrition/concentrates"
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
    "link": "/contact-us"
  },
  {
    "title": "Our Story",
    "link": "/about-us/vision-and-mission"
  },
  {
    "title": "Our Team",
    "link": "/about-us/team-members"
  },
  {
    "title": "Vision & Mission",
    "link": "/about-us/vision-and-mission"
  },
  {
    "title": "Animal Welfare",
    "link": "/animal-welfare"
  },
  {
    "title": "Concentrates",
    "link": "/animal-nutrition/concentrates"
  },
  {
    "title": "Get in Touch",
    "link": "/contact-us"
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

// concentratesData
export const concentratesData = {
  "title": "Big Stars Feed Concentrates: Smarter Nutrition, Better Yield",
  "short_description": "Big Stars Animal Feed Concentrates are nutrient-rich premixes designed to deliver cost-effective, high-performance nutrition for poultry and pigs.",
  "long_description": "Big Stars Animal Feed Concentrates are expertly formulated premixed supplements designed to be combined with local energy sources like maize, wheat bran, or rice bran to produce complete feed. Our concentrates offer farmers a cost-effective way to create high-quality, balanced rations while maintaining control over raw materials.",
  "features": [
    {
      "title": "High Nutrient Density",
      "description": "Packed with essential proteins, amino acids, vitamins, and minerals needed for optimal animal growth, productivity, and immunity.",
      "icon": <FaDumbbell />
    },
    {
      "title": "Species-Specific Blends",
      "description": "Available in formulations tailored for layers, broilers, growers, ducks, turkeys, and pigs, ensuring animals get the right nutrition at each stage.",
      "icon": <FaLayerGroup />
    },
    {
      "title": "Easy Mixing",
      "description": "Designed for straightforward on-farm mixing with simple instructions, making it accessible for both commercial and smallholder farmers.",
      "icon": <FaBlender />
    },
    {
      "title": "Quality Assurance",
      "description": "Every batch is produced under strict quality control to guarantee consistency, safety, and performance.",
      "icon": <FaShieldAlt />
    },
    {
      "title": "Economical Feeding",
      "description": "Concentrates allow farmers to reduce feed costs without compromising performance by utilizing affordable local ingredients.",
      "icon": <FaMoneyBillWave />
    }
  ],
  "popular_products": [
    "Egg Layer Concentrate",
    "Broiler Starter Concentrate",
    "Broiler Grower Concentrate",
    "Broiler Finisher Concentrate",
    "Grower Concentrate",
    "Duck & Turkey Concentrates",
    "Pig Breeder Concentrate",
    "Pig Weaner Concentrate"
  ],
  "conclusion": "Whether you're raising poultry or pigs, Big Stars' concentrate solutions are trusted across Ghana for their reliability, effectiveness, and value."
}

// Mash Data
export const mashData = [
  {
    "name": "Chick Pre-Starter Mash",
    "age_range": "1-7 days",
    "description": "Formulated for newly hatched chicks to boost early immunity and promote rapid growth during the critical first week of life."
  },
  {
    "name": "Chick Mash",
    "age_range": "2-8 weeks",
    "description": "Balanced feed designed to support healthy bone and feather development in growing chicks."
  },
  {
    "name": "Grower Mash",
    "age_range": "9-18 weeks",
    "description": "Ideal for pullets during their development phase, encouraging steady growth and preparing them for laying."
  },
  {
    "name": "Layer Plus",
    "age_range": "19-29 weeks",
    "description": "Nutrient-rich feed that supports peak onset of egg production with optimal calcium and protein content."
  },
  {
    "name": "Layer Mash 1",
    "age_range": "30-50 weeks",
    "description": "Formulated to maintain high egg productivity and shell quality during the prime laying period."
  },
  {
    "name": "Layer Mash 2",
    "age_range": "50 weeks and above",
    "description": "Supports consistent egg production and hen health in the late laying stage with added minerals and vitamins."
  },
  {
    "name": "Broiler Starter Mash",
    "age_range": "0-3 weeks",
    "description": "High-energy, protein-packed feed designed for fast-growing broilers during the starter phase."
  },
  {
    "name": "Broiler Finisher Mash",
    "age_range": "4-8 weeks",
    "description": "Optimized to promote rapid weight gain and meat quality in broilers nearing market age."
  },
  {
    "name": "Guinea Fowl Starter",
    "age_range": "0-4 weeks",
    "description": "Tailored to meet the nutritional needs of young keets for strong early growth and immunity."
  },
  {
    "name": "Guinea Fowl Finisher",
    "age_range": "5 weeks and above",
    "description": "Formulated to support meat development and energy requirements in maturing guinea fowl."
  },
  {
    "name": "Pig Weaner / Lactating Sow",
    "age_range": "Post-weaning / Lactation period",
    "description": "Specially designed for young piglets and lactating sows to support milk production and post-weaning transition."
  },
  {
    "name": "Pig Finisher",
    "age_range": "Finishing phase",
    "description": "Energy-dense formula to promote rapid weight gain and fattening in pigs ready for market."
  },
  {
    "name": "Pig Breeder",
    "age_range": "Breeding age",
    "description": "Optimized for boars and sows to maintain fertility, reproductive health, and overall vitality."
  },
  {
    "name": "Rabbit Feed",
    "age_range": "All stages",
    "description": "Balanced diet for rabbits of all ages, supporting digestion, fur quality, and overall wellbeing."
  }
]


// ConcentratesPercentData
export const concentratesPercentData = [
  {
    "name": "Chick Concentrate",
    "percentile": "50%",
    "description": "Feed concentrate suitable for young chicks."
  },
  {
    "name": "Grower Concentrate",
    "percentile": "50%",
    "description": "Balanced feed for growing poultry."
  },
  {
    "name": "Layer Concentrate",
    "percentile": "5%",
    "description": "Feed concentrate for laying hens at 5% inclusion."
  },
  {
    "name": "Layer Concentrate",
    "percentile": "20%",
    "description": "Feed concentrate for laying hens at 20% inclusion."
  },
  {
    "name": "Layer Concentrate",
    "percentile": "25%",
    "description": "Feed concentrate for laying hens at 25% inclusion."
  },
  {
    "name": "Layer Concentrate",
    "percentile": "50%",
    "description": "Feed concentrate for laying hens at 50% inclusion."
  },
  {
    "name": "Broiler Concentrate",
    "percentile": "5%",
    "description": "Feed concentrate for broilers at 5% inclusion."
  },
  {
    "name": "Broiler Concentrate",
    "percentile": "30%",
    "description": "Feed concentrate for broilers at 30% inclusion."
  },
  {
    "name": "Broiler Concentrate",
    "percentile": "35%",
    "description": "Feed concentrate for broilers at 35% inclusion."
  },
  {
    "name": "Broiler Concentrate",
    "percentile": "50%",
    "description": "Feed concentrate for broilers at 50% inclusion."
  }
]

// ConcentetrateImageData

export const concentrateImageData =  [
  {
    id: 1,
    src: ChickImage1,
    alt: "Close-up of a healthy yellow chick on poultry bedding"
  },
  {
    id: 2,
    src: ChickImage2,
    alt: "Group of baby chicks feeding under a brooder"
  },
  {
    id: 3,
    src: ChickImage3,
    alt: "Dozens of yellow chicks gathered on wood shavings"
  },
  {
    id: 4,
    src: ChickImage4,
    alt: "Poultry chicks feeding inside a clean brooding space"
  },
  {
    id: 5,
    src: ChickImage5,
    alt: "Healthy chicks roaming freely in a poultry enclosure"
  },
  {
    id: 6,
    src: ChickImage6,
    alt: "Adult hen standing alert in a clean poultry area"
  },
  {
    id: 7,
    src: ChickImage7,
    alt: "Brown hen in a farm environment looking healthy"
  },
  {
    id: 8,
    src: ChickImage8,
    alt: "Hen inside a poultry house feeding from a trough"
  },
  {
    id: 9,
    src: ChickImage9,
    alt: "Healthy hen in a free-range poultry setting"
  },
  {
    id: 10,
    src: ChickImage10,
    alt: "Group of active chicks walking on hay bedding"
  }
]

// Welfare Commit Data
export const welfareCommitData = [
  {
    "title": "Balanced Nutrition",
    "description": "Our specially designed feeds provide animals with the essential nutrients needed to prevent hunger and maintain optimal health.",
    "image": WelfareImage1,
    "imageAlt": "Balanced animal feed ingredients in a bowl",
    "flexDirection": "md:flex-row"
  },
  {
    "title": "Healthy Growth",
    "description": "By supporting immune systems and overall well-being, our feeds help reduce disease and discomfort.",
    "image": WelfareImage2,
    "imageAlt": "Healthy livestock growing on a farm",
    "flexDirection": "md:flex-row-reverse"
  },
  {
    "title": "Promoting Natural Behavior",
    "description": "We encourage farmers to adopt practices that allow animals to express natural behaviors, supported by our feed formulations tailored for different species and growth stages.",
    "image": WelfareImage3,
    "imageAlt": "Free-range chickens expressing natural behavior",
    "flexDirection": "md:flex-row"
  },
  {
    "title": "Stress Reduction",
    "description": "Quality feed is a key factor in reducing stress and improving animal resilience, especially during critical phases such as growth, laying, or finishing.",
    "image": WelfareImage4,
    "imageAlt": "Calm livestock in a stress-free environment",
    "flexDirection": "md:flex-row-reverse"
  }
]


// Slide Data 
export const slideData = [
  {
    img: SlideData1
  },
  {
    img: SlideData2
  },
  {
    img: SlideData3
  },
  {
    img: SlideData4
  },
  {
    img: SlideData5
  },
]