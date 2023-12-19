import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  websitetoshow,
  dashboard,
  threejs,
  adobeillustrator,
  expressjs,
  image1,
  image2,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mern Stack Developer",
    icon: backend,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "photoshop",
    icon: docker,
  },
  {
    name: "adobeillustrator",
    icon: adobeillustrator,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
];

const experiences = [
  {
    title: "Graphic Designer",
    company_name: "fiverr",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Translated concepts into captivating visuals, shaping brand identities and messages through innovative design.",
      "Collaborated closely with diverse clients to transform visions into tangible, polished designs.",
      "Created impactful logos, marketing materials, and social media graphics that elevated businesses.",
      "Earned recognition for consistently delivering designs that captured clients' unique essence.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Freelancer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed and maintained cutting-edge web applications using React.js and related technologies.",
      "Collaborated with diverse teams including designers, product managers, and developers to craft top-tier digital products.",
      "Created responsive designs for seamless user experiences across devices and browsers.",
      "Provided valuable insights through code reviews, fostering a culture of continuous improvement.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Crafting seamless e-commerce experiences on the Shopify platform, blending cutting-edge web development with business acumen.",
      "Collaborating closely with clients to transform ideas into functional and visually appealing online stores.",
      "Implementing custom designs, optimizing performance, and ensuring intuitive user interfaces.",
      "Leveraging Shopify's ecosystem to integrate apps, enhance functionality, and drive sales.",
    ],
  },
  {
    title: "Mern stack Developer",
    company_name: "Bitspro",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Empowered by the MERN (MongoDB, Express.js, React.js, Node.js) stack, I've been an active participant in a dynamic development environment, located in Hyderabad's Latifabad district.",
      "Collaborated closely with a talented team of developers, leveraging collective strengths to deliver successful projects that align with industry best practices.",
      "Championed the execution of various projects, harnessing cutting-edge technologies such as Three.js, Redux, TypeScript, and more, resulting in a steep learning curve and a repertoire of powerful skills.",
      "Contributed to the seamless completion of numerous projects, bridging creativity with functionality to create impactful web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link_github: "https://github.com/",
    source_code_link_website: "https://www.google.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link_github: "https://github.com/",
    source_code_link_website: "https://www.google.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link_github: "https://github.com/",
    source_code_link_website: "https://www.google.com/",
  },
  {
    name: "Eccommerce",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: websitetoshow,
    source_code_link_github: "https://github.com/",
    source_code_link_website: "https://www.google.com/",
  },
  {
    name: "Management",
    description:
      "A comprehensive Management software dashboard which helps in managing the world wide data colapse it and show the user simplified and comprised version.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link_github: "https://github.com/",
    source_code_link_website: "https://www.google.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

export interface URLTitleInterface {
  url?: string;
  title?: string;
  isLandscape?: string;
}
export interface PortfolioListItem {
  images: URLTitleInterface[];
  title: string;
  titleFont?: string;
  year?: string;
  startYear?: string;
  description: string;
  services: string[];
  techologies: string[];
  isLast?: boolean;
  subSystems?: PortfolioListItem[];
  isSubSystem?: boolean;
  logo?: string;
  isHomePage?: boolean;
}

export const PortfolioItems: PortfolioListItem[] = [
  {
    title: "Justuno",
    images: [{ url: carrent }, { url: carrent }, { url: carrent }],
    description: `<p class="mb-4">
    Create Personalized Website Experiences that Convert and Turn more website traffic into customers. 
    The fastest way to increase sales, lower costs, and hit your goals.     
  </p>
  <p>
    Leverage engaging, personalized CRO features designed to turn anonymous website traffic into known 
    subscribers and high-value customers. Use high-performing email and SMS collection to scale your 
    audience and build the foundation for segmented marketing experiences designed to convert.
  </p>`,
    services: ["001", "002"],
    techologies: ["react", "golang", "janus", "clickHouse", "gcp"],
    startYear: "2018",
    logo: "/images/portfolio/justuno/logo.svg",
    isHomePage: true,
    subSystems: [
      {
        title: "Design Canvas",
        images: [{ url: carrent }, { url: carrent }],
        description: `<p class="mb-4">
        Beatufiully designed <b>AD Popup creator</b> for 
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://www.justuno.com"
        >
          www.justuno.com
        </a>
        , Design Canvas does provide both designers and non-techical
        persons the ability to create seamless ad popups that can be
        integrated to the system using justuno.com.
      </p>
      <p>
        With the Design Canvas a user can intuitively create any type of
        popup with our vast list of plugins and components.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
      {
        title: "Workflow Builder",
        images: [
          { url: "/images/portfolio/justuno/workflow-builder.png" },
          { url: "/images/portfolio/justuno/workflow-builder.png" },
        ],
        description: `<p class="mb-4">
        The workflow builder is very simple tool that allows the user to 
        create process visually which in the background truns in to 
        a configuration that is used to execute those process.
        
        
        Designed for 
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://www.justuno.com"
        >
          www.justuno.com
        </a>
        , Workflow Builder serves as a core tool to determine how and when 
        Ads would appear on the customer sites. Specifically with Workflow Builder
        the user determin different ads based on the customer activities.
      </p>
      <p>
        With the Design Canvas a user can intuitively create any type of
        popup with our vast list of plugins and components.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
    ],
  },
];

export interface IconTitleInterface {
  icon?: string;
  title?: string;
}

export interface SubServiceInterface extends IconTitleInterface {
  style: { height: number; width: number; marginTop: number };
  outerWidth: string;
}

export interface ServiceListItemInterface extends IconTitleInterface {
  id: string;
  description: string;
  excerpt: string;
  services: SubServiceInterface[];
}

export const ServiceList: ServiceListItemInterface[] = [
  {
    id: "001",
    icon: "fa-desktop",
    title: "Development",
    excerpt: "Creating web application that are more than you identity.",
    description: `<p class="mb-4">What sets Digital Marmalade apart from most other digital agencies is our fusion of intelligent design, our finely tuned development process and our experienced team of developers.</p>
      <p class="mb-4">Over the past 20 years we've created a huge array of diverse applications from recruitment auctioning systems, sport learning platforms and charity fundraising applications to puzzle solutions for UK national newspapers.</p>
      <p class="mb-4">Our approach to application development focuses on delivering impactful solutions in the most economical way. We can help bring your ideas to life from conceptualisation through to launch and we're happy to support your inhouse dev teams if required.</p>
      <p class="mb-4">We generally build our applications and content management systems within the Laravel open source PHP framework. This gives us the tools to develop intuitive, bespoke solutions that are robust, scalable and secure.</p>`,
    services: [
      {
        icon: "fa-browser",
        title: "Web Development",
        outerWidth: "33.33333%",
        style: {
          marginTop: 0,
          height: 240,
          width: 420,
        },
      },
      {
        icon: "fa-mobile",
        title: "App Development",
        outerWidth: "33.33333%",
        style: {
          marginTop: 280,
          height: 240,
          width: 420,
        },
      },
      {
        icon: "fa-paintbrush-fine",
        title: "Interface & Experience Designing",
        outerWidth: "33.33333%",
        style: {
          marginTop: 130,
          height: 420,
          width: 240,
        },
      },
      {
        icon: "fa-watch-apple",
        title: "Smart Watch App Development",
        outerWidth: "50%",
        style: {
          marginTop: 60,
          height: 240,
          width: 420,
        },
      },
    ],
  },
  {
    id: "002",
    icon: "fa-people-group",
    title: "Team Extensions",
    excerpt:
      "Mobile Application that takes your revenue stream to the next level.",
    description:
      "Websites and Desktop application development is our expert zone.",
    services: [
      {
        icon: "fa-user-tie-hair",
        title: "Managers & Leads",
        outerWidth: "50%",
        style: {
          marginTop: 120,
          height: 240,
          width: 420,
        },
      },
      {
        icon: "fa-user-visor",
        title: "Developers & Designs",
        outerWidth: "33.333%",
        style: {
          marginTop: 0,
          height: 240,
          width: 420,
        },
      },
      // {
      //   icon: "fa-user-police",
      //   title: "UI / UX Creators",
      // },
      // {
      //   icon: "fa-user-hair-buns",
      //   title: "Quality Assurance",
      // },
      // {
      //   icon: "fa-user-headset",
      //   title: "Quality Assurance & Support",
      //   style: {
      //     marginTop: 0,
      //     height: 240,
      //     width: 420,
      //   },
      // },
      // {
      //   icon: "fa-house-user",
      //   title: "In-house Team Extension",
      //   style: {
      //     marginTop: 0,
      //     height: 240,
      //     width: 420,
      //   },
      // },
    ],
  },
  // {
  //   id: "003",
  //   icon: "fa-scanner-gun",
  //   title: "Automation",
  //   excerpt:
  //     "Bringing automation to your life at your home, factory or your car.",
  //   description:
  //     "Websites and Desktop application development is our expert zone.",
  //   services: [
  //     {
  //       title: "Warehouse Automation",
  //       icon: "fa-warehouse",
  //       style: {
  //         marginTop: 0,
  //         height: 240,
  //         width: 420,
  //       },
  //     },
  //     {
  //       title: "House Automation",
  //       icon: "fa-house",
  //       style: {
  //         marginTop: 0,
  //         height: 240,
  //         width: 420,
  //       },
  //     },
  //     {
  //       title: "Factory Automation",
  //       icon: "fa-forklift",
  //       style: {
  //         marginTop: 0,
  //         height: 240,
  //         width: 420,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: "004",
  //   icon: "fa-paintbrush-pencil",
  //   title: "Branding & Marketing",
  //   excerpt:
  //     "Mobile Application that takes your revenue stream to the next level.",
  //   description:
  //     "Websites and Desktop application development is our expert zone.",
  //   services: [
  //     {
  //       title: "Brand Setup",
  //       icon: "fa-copyright",
  //       style: {
  //         marginTop: 0,
  //         height: 240,
  //         width: 420,
  //       },
  //     },
  //     {
  //       title: "Digital Marketing",
  //       icon: "fa-share-nodes",
  //       style: {
  //         marginTop: 0,
  //         height: 240,
  //         width: 420,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: "005",
  //   icon: "fa-vr-cardboard",
  //   title: "AR & VR",
  //   excerpt:
  //     "Leveraging Augmented & Virtual Reality to tackle real world problem like training.",
  //   description:
  //     "Websites and Desktop application development is our expert zone.",
  //   services: [
  //     {
  //       title: "AR based Training",
  //       icon: "fa-chalkboard-user",
  //       style: {
  //         marginTop: 0,
  //         height: 240,
  //         width: 420,
  //       },
  //     },
  //     {
  //       title: "Customized Virtual Experiences",
  //       icon: "fa-tree-palm",
  //       style: {
  //         marginTop: 0,
  //         height: 240,
  //         width: 420,
  //       },
  //     },
  //   ],
  // },
];

export interface TechnologyInterface {
  icon: string;
  title: string;
  svg?: string;
}

export const TechnologyItems: TechnologyInterface[] = [
  {
    title: "React",
    icon: "react",
  },
  {
    title: "Go",
    icon: "golang",
  },
  {
    title: "Sass",
    icon: "sass",
  },
  {
    title: "NodeJS",
    icon: "node-js",
  },
  {
    title: "Android",
    icon: "android",
  },
  {
    title: "Zebra",
    icon: "zebra",
    svg: "zebra.png",
  },
  {
    title: "AWS",
    icon: "aws",
  },
  {
    title: "azure",
    icon: "azure",
    svg: "azure.png",
  },
  {
    title: "GCP",
    icon: "gcp",
    svg: "gcp.svg",
  },
  {
    title: "Php",
    icon: "php",
  },
  {
    title: "Wordpress",
    icon: "wordpress",
  },
  {
    title: "Html5",
    icon: "html5",
  },
  {
    title: "IOS",
    icon: "apple",
  },
  {
    title: "Joomla",
    icon: "joomla",
  },
  {
    title: "Python",
    icon: "python",
  },
  {
    title: "DigitalOcean",
    icon: "digital-ocean",
  },
  {
    title: "Electron",
    icon: "electron",
    svg: "electron.png",
  },
  {
    title: "ASP.NET",
    icon: "asp",
    svg: "asp.net.png",
  },
  {
    title: "MVC",
    icon: "mvc",
    svg: "asp.net.png",
  },
  {
    title: "Postgres",
    icon: "postgres",
    svg: "postgreSql.png",
  },
  {
    title: "MySQL",
    icon: "mysql",
    svg: "mysql.png",
  },
  {
    title: "MS SQL",
    icon: "mssql",
    svg: "mssSql.png",
  },
  {
    title: "Neo4g",
    icon: "neo4g",
    svg: "neo4g.png",
  },
  {
    title: "JanusGraph",
    icon: "janus",
    svg: "JanusGraph.png",
  },
  {
    title: "ClickHouse",
    icon: "clickHouse",
    svg: "clickhouse.svg",
  },
];

export interface AboutUsFirstSliderCardInterface {
  title: string;
  paragraphs: string[];
  image: string;
}

export const AboutUsFirstSliderCard: AboutUsFirstSliderCardInterface[] = [
  {
    title: "Overview",
    paragraphs: [
      "BitsPro is a small team of committed individuals focusing on building people-literate technologies. We help startups in building Multiexperience based MVPs leveraging various modalities, digital touchpoints, apps, and devices to design and develop a seamless experience for their customers.",
      "Our process is driven by a proven MVP Development Framework and powered by passionate people who are committed to delivery and excellence.",
    ],
    image: image1,
  },
  {
    title: "Specialties",
    paragraphs: [
      "Multiexperience Solutions, MXDP, Mobile Application Development, Website & Web Application Development, Cloud Infrastructure Management, Mobile VR App Development, Augmented Reality App Development, Data Engineering, Machine Learning, Business Process Automation, and Automation Testing",
    ],
    image: image2,
  },
];
