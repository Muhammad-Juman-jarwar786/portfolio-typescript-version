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
  photoshop,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  websitetoshow,
  threejs,
  adobeillustrator,
  expressjs,
  image1,
  image2,
  dashboard,
  dashboard1,
  dashboard2,
  dashboard3,
  dashboard4,
  dashboard5,
  dashboardLogo,
  movie,
  movie1,
  movie2,
  movie3,
  movie5,
  movie6,
  movieLogo,
  ecommerce,
  ecommerce1,
  ecommerce2,
  ecommerce3,
  ecommerce4,
  ecommerce5,
  ecommerceLogo,
  poultry,
  poultry1,
  poultry3,
  poultry4,
  poultryLogo,
  natours,
  // natours1,
  natours2,
  natours3,
  natours4,
  natours5,
  natours6,
  natoursLogo,
  next,
  next2,
  next3,
  next4,
  nextLogo,
  chat1,
  chat2,
  chat3,
  chat4,
  chatLogo,
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
    name: "adobeillustrator",
    icon: adobeillustrator,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
  {
    name: "figma",
    icon: figma,
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
  logoName?: string;
  isHomePage?: boolean;
}

export const PortfolioItems: PortfolioListItem[] = [
  {
    title: "Admin Dashboard",
    images: [{ url: dashboard }, { url: dashboard4 }],
    description: `<p class="mb-4 text-gray-900">
    The admin dashboard is a streamlined interface that offers real-time system metrics. Its user-friendly design allows for efficient monitoring and management of the system.     
  </p>
  <p class="text-gray-900">
    In addition to its robust analytics, the dashboard also provides powerful administrative tools. This integration showcases a commitment to enhancing user experience and effective system management.
  </p>`,
    services: ["001", "002"],
    techologies: ["react", "golang", "js", "clickHouse", "gcp"],
    startYear: "2021",
    logo: dashboardLogo,
    logoName: "Code Web",
    isHomePage: true,
    subSystems: [
      {
        title: "Design Canvas",
        images: [{ url: dashboard5 }, { url: dashboard1 }],
        description: `<p class="mb-4 text-gray-900">
        Beatufiully designed <b>Admin Dashboard</b> for 
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://dashboard-react-admin-website.netlify.app/"
        >
          www.Code-Web.com
        </a>
        , Design Canvas does provide both designers and non-techical
        persons the ability to read and understand the data via charts.
      </p>
      <p class="text-gray-900">
        With the Design Canvas an admin or manager can intuitively Add any type of
        info with our vast list of plugins and components.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2021",
      },
      {
        title: "Workflow Builder",
        images: [{ url: dashboard2 }, { url: dashboard3 }],
        description: `<p class="mb-4 text-gray-900">
        The workflow builder is very simple tool that allows the user to
        create, update delete data visually which in the background truns in to
        a configuration that is used to execute those process.

        Designed for
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://dashboard-react-admin-website.netlify.app/"
        >
          www.Code-Web.com
        </a>
        , Workflow Builder serves as a core tool to determine how and when
        users and products would be added on the database.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
    ],
  },
  {
    title: "StreamIt",
    images: [{ url: movie }, { url: movie3 }],
    description: `<p class="mb-4 text-gray-900">
    Streamit: A dynamic movie project inspired by Netflix. Showcasing a diverse library of films, it offers an immersive streaming experience tailored to the viewer’s preferences. A testament to innovative design and seamless user interface.     
  </p>
  <p class="text-gray-900">
Streamit utilizes captivating, personalized features to transform anonymous website visitors into recognized subscribers and valuable customers. It employs efficient email and SMS collection methods to expand its audience base, laying the groundwork for segmented marketing experiences that are designed to convert. This approach enhances user engagement and promotes a more personalized streaming experience.
  </p>`,
    services: ["001", "002"],
    techologies: ["react", "golang", "janus", "clickHouse", "gcp"],
    startYear: "2021",
    logo: movieLogo,
    isHomePage: true,
    subSystems: [
      {
        title: "Design Canvas",
        images: [{ url: movie1 }, { url: movie2 }],
        description: `<p class="mb-4 text-gray-900">
        Beatufiully designed <b>Website</b> for 
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://movie-website-design1.netlify.app/"
        >
          www.streamit.com
        </a>
        , Design Canvas: A robust and intuitive interface that allows users to visualize and manipulate the layout of Streamit. It’s a playground for creativity, enabling the design of unique and engaging user experiences.
      </p>
      <p class="text-gray-900">
        With the Design Canvas a user can watch any type of
        movie with our vast list of movies and Web-Series.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
      {
        title: "Workflow Builder",
        images: [{ url: movie5 }, { url: movie6 }],
        description: `<p class="mb-4 text-gray-900">
        The Workflow Builder: A powerful tool that streamlines the creation and management of content workflows. It ensures seamless content delivery, from upload to streaming, enhancing the efficiency and reliability of Streamit.
        
        
        Designed for 
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://movie-website-design1.netlify.app/"
        >
          www.streamit.com
        </a>
        , Workflow Builder serves as a core tool to determine how and when 
        new mpvies would appear on the streamit. Specifically with Workflow Builder
        the team determines different movies based on the customer search.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
    ],
  },
  {
    title: "E-Commerce",
    images: [{ url: ecommerce }, { url: ecommerce2 }],
    description: `<p class="mb-4 text-gray-900">
      Presenting a fully responsive e-commerce website, equipped with a secure payment system. This platform offers a seamless shopping experience, effectively converting website traffic into customers, thereby increasing sales and lowering costs.
    </p>
    <p class="text-gray-900">
        The website employs advanced CRO features to transform anonymous traffic into known subscribers and high-value customers. It uses high-performing email and SMS collection strategies to expand your audience, laying the groundwork for segmented marketing experiences designed to convert.
    </p>`,
    services: ["001", "002"],
    techologies: ["react", "golang", "janus", "clickHouse", "gcp"],
    startYear: "2018",
    logo: ecommerceLogo,
    isHomePage: true,
    subSystems: [
      {
        title: "Design Canvas",
        images: [{ url: ecommerce4 }, { url: ecommerce3 }],
        description: `<p class="mb-4 text-gray-900">
        Beatufiully designed <b>E-Commerce website</b> 
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://www.justuno.com"
        >
          www.justuno.com
        </a>
        , The website is enhanced with dynamic animations powered by Anime.js, adding an engaging element to the user interface. This simple yet effective e-commerce solution caters to the evolving needs of businesses and consumers alike.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
      {
        title: "Workflow Builder",
        images: [{ url: ecommerce1 }, { url: ecommerce5 }],
        description: `<p class="mb-4 text-gray-900">
        The Workflow Builder of this e-commerce website is designed to streamline the process of product management. It provides a user-friendly interface where the admin can easily add new products by simply filling out a form.
        
        
        Designed for 
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://www.justuno.com"
        >
          www.justuno.com
        </a>
        , This tool ensures a smooth and efficient workflow, allowing the admin to focus on other important aspects of managing the e-commerce platform. The fully responsive design ensures that the Workflow Builder is accessible and functional across various devices, enhancing the overall user experience.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
    ],
  },
  {
    title: "Poultry-Farm",
    images: [{ url: poultry }, { url: poultry1 }],
    description: `<p class="mb-4 text-gray-900">
    This system <a class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm" href="https://poultryfarm-management-system.web.app/" > Poultry-Farm </a> is developed with a focus on maximizing returns with minimum investment. It allows for the safe and efficient management of data, including the selection of data collection records, proper and safe data readings, proper feedmill and medication maintenance, and the report of analytical data.    
  </p>
  <p class="text-gray-900">
  The Poultry Farm Management System is a robust and reliable tool that plays a crucial role in the successful management of a poultry farm. It ensures that all records are kept safely and can be easily fetched, thereby enhancing the efficiency and effectiveness of farm management3.
  </p>`,
    services: ["001", "002"],
    techologies: ["react", "golang", "janus", "clickHouse", "gcp"],
    startYear: "2018",
    logo: poultryLogo,
    isHomePage: true,
    subSystems: [
      {
        title: "Workflow Builder",
        images: [{ url: poultry3 }, { url: poultry4 }],
        description: `<p class="mb-4 text-gray-900">
        , This tool is designed to handle various tasks, including the addition of products and other essential items. It allows administrators to maintain control over the farm’s operations, ensuring that all activities are carried out efficiently and effectively
      </p>
      <p class="text-gray-900">
      The Workflow Builder of the Poultry Farm Management System is a robust and reliable tool that plays a crucial role in the successful management of a poultry farm. It ensures that all records are kept safely and can be easily fetched, thereby enhancing the efficiency and effectiveness of farm management
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
    ],
  },
  {
    title: "Natours",
    images: [{ url: natours }, { url: natours2 }],
    description: `<p class="mb-4 text-gray-900">
    The Natours website is a tour booking web application. It offers various features such as authentication and authorization, tour booking, payment processing, user and admin profiles. The website showcases modern responsive design using HTML/CSS and CSS preprocessing is accomplished using SASS.  
  </p>
  <p class="text-gray-900">
  The SASS applies variables, mixins, selector nesting, partials, imports, extensions and more to improve CSS power, and create a cleaner, more compact and maintainable code base. The website offers unique tours with stunning visuals and activities like surfing, skating, parajumping, rock climbing and more. It’s a great platform where users can plan and book their travelling plans.
  </p>`,
    services: ["001", "002"],
    techologies: ["react", "golang", "janus", "clickHouse", "gcp"],
    startYear: "2018",
    logo: natoursLogo,
    isHomePage: true,
    subSystems: [
      {
        title: "Design Canvas",
        images: [{ url: natours6 }, { url: natours3 }],
        description: `<p class="mb-4 text-gray-900">
        Beatufiully designed <b> Tourism Website.</b>
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://natours-project0.netlify.app/"
        >
          www.natours.com
        </a>
        , The Design Canvas incorporates a variety of features, including animations with @keyframes and transitions, clip-paths, background-clip, shape-outside, backdrop filter, transform, object-fit, perspective, and calc() to showcase the power of CSS styling.
      </p>
      <p class="text-gray-900">
      It also uses the BEM (Block-Element-Modeling) design convention and employs complex selectors, and pseudo selectors. Additionally, the 7-1 rule for component-based design architecture is applied to promote reusable, scalable, and maintainable code.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
      {
        title: "Workflow Builder",
        images: [{ url: natours4 }, { url: natours5 }],
        description: `<p class="mb-4 text-gray-900">
        This tool is designed to handle various tasks, including the addition of tours and other essential items. It allows administrators to maintain control over the platform’s operations, ensuring that all activities are carried out efficiently and effectively.
        Moreover, the Workflow Builder is developed with a focus on maximizing returns with minimum investment. It allows for the safe and efficient management of data, including the selection of data collection records, proper and safe data readings, proper feedmill and medication maintenance, and the report of analytical data.
      </p>
      <p class="text-gray-900">
      The Workflow Builder of the Natours website is a robust and reliable tool that plays a crucial role in the successful management of a tourism platform.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
    ],
  },
  {
    title: "Car Rent",
    images: [{ url: next }, { url: next2 }],
    description: `<p class="mb-4 text-gray-900">
    Create Personalized Website Experiences that Convert and Turn more website traffic into customers. 
    The fastest way to increase sales, lower costs, and hit your goals.     
  </p>
  <p class="text-gray-900">
    Leverage engaging, personalized CRO features designed to turn anonymous website traffic into known 
    subscribers and high-value customers. Use high-performing email and SMS collection to scale your 
    audience and build the foundation for segmented marketing experiences designed to convert.
  </p>`,
    services: ["001", "002"],
    techologies: ["react", "golang", "janus", "clickHouse", "gcp"],
    startYear: "2018",
    logo: nextLogo,
    isHomePage: true,
    subSystems: [
      {
        title: "Design Canvas",
        images: [{ url: next3 }, { url: next4 }],
        description: `<p class="mb-4 text-gray-900">
        Beatufiully designed <b>AD Popup creator</b> for 
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://rent-car1.netlify.app/"
        >
          www.carhub.com
        </a>
        , Design Canvas does provide both designers and non-techical
        persons the ability to create seamless ad popups that can be
        integrated to the system using justuno.com.
      </p>
      <p class="text-gray-900">
        With the Design Canvas a user can intuitively create any type of
        popup with our vast list of plugins and components.
      </p>`,
        services: ["001", "002", "004"],
        techologies: ["react", "golang", "sass"],
        year: "2023",
      },
    ],
  },
  {
    title: "Group Chat",
    images: [{ url: chat1 }, { url: chat4 }],
    description: `<p class="mb-4 text-gray-900">
    Create Personalized Website Experiences that Convert and Turn more website traffic into customers. 
    The fastest way to increase sales, lower costs, and hit your goals.     
  </p>
  <p class="text-gray-900">
    Leverage engaging, personalized CRO features designed to turn anonymous website traffic into known 
    subscribers and high-value customers. Use high-performing email and SMS collection to scale your 
    audience and build the foundation for segmented marketing experiences designed to convert.
  </p>`,
    services: ["001", "002"],
    techologies: ["react", "golang", "janus", "clickHouse", "gcp"],
    startYear: "2018",
    logo: chatLogo,
    isHomePage: true,
    subSystems: [
      {
        title: "Design Canvas",
        images: [{ url: chat2 }, { url: chat3 }],
        description: `<p class="mb-4 text-gray-900">
        Beatufiully designed <b>AD Popup creator</b> for 
        <a
          class="px-1.5 py-0.5 bg-yellow-900 text-grey-900 font-bold rounded-sm"
          href="https://group-chat0.netlify.app/login"
        >
          www.group-chat.com
        </a>
        , Design Canvas does provide both designers and non-techical
        persons the ability to create seamless ad popups that can be
        integrated to the system using justuno.com.
      </p>
      <p class="text-gray-900">
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
    title: "Javascript",
    icon: "js",
    // svg: "JanusGraph.png",
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

export interface ProjectShowCaseInterface {
  id: number;
  description: string;
  githubLink: string;
  imageUrl: string;
  name: string;
  tagcolor1: string;
  tagcolor2: string;
  tagcolor3: string;
  tagname1: string;
  tagname2: string;
  tagname3: string;
  websiteLink: string;
}

export const ProjectShowCase: ProjectShowCaseInterface[] = [
  {
    id: 1,
    description:
      "React Admin Dashboard: A dynamic, responsive, and user-friendly dashboard built with React.js. Features include real-time data visualization, modular components, customizable layouts, and API integration. Demonstrates proficiency in modern front-end technologies and commitment to efficient, user-centric design.",
    githubLink: "https://github.com/Muhammad-Juman-jarwar/Dashboard-react",
    imageUrl: dashboard,
    name: "Admin Dashboard",
    tagcolor1: "blue-text-gradient",
    tagcolor2: "green-text-gradient",
    tagcolor3: "pink-text-gradient",
    tagname1: "Reactjs",
    tagname2: "Javascript",
    tagname3: "Materialui",
    websiteLink: "https://dashboard-react-admin-website.netlify.app/",
  },
  {
    id: 2,
    description:
      "A sleek and user-friendly website designed for movie enthusiasts. Features include a vast movie database, user ratings and reviews, personalized recommendations, and seamless streaming capabilities just like Netflix. Showcases a commitment to providing an engaging and immersive movie viewing experience.",
    githubLink: "https://github.com/Muhammad-Juman-jarwar786/Movie-Website",
    imageUrl: movie,
    name: "Movie Website Design",
    tagcolor1: "blue-text-gradient",
    tagcolor2: "green-text-gradient",
    tagcolor3: "pink-text-gradient",
    tagname1: "Reactjs",
    tagname2: "Tailwindcss",
    tagname3: "Typescript",
    websiteLink: "https://movie-website-design1.netlify.app/",
  },
  {
    id: 3,
    description:
      "A comprehensive e-commerce platform built with modern technologies. Features include a user-friendly interface, secure payment gateway, efficient ‘Add to Cart’ functionality, and state management with Redux Toolkit. Designed to provide a seamless online shopping experience, mirroring all the facilities of a typical e-commerce website.",
    githubLink: "https://github.com/Muhammad-Juman-jarwar786/Eccomerce-website",
    imageUrl: ecommerce,
    name: "Ecommerce Website",
    tagcolor1: "blue-text-gradient",
    tagcolor2: "green-text-gradient",
    tagcolor3: "pink-text-gradient",
    tagname1: "Reactjs",
    tagname2: "Tailwindcss",
    tagname3: "Animejs",
    websiteLink: "https://e-commerce-website0.netlify.app/",
  },
  {
    id: 4,
    description:
      "A Software designed basically for Poultry Farm Management System. Features include a user-friendly and Responsive interface, secure payment gateway, efficient reports and invoice generation techniques, effective daily reports and state management with Redux Toolkit. Designed to run the farm efficiently and effectively.",
    githubLink: "https://github.com/Muhammad-Juman-jarwar/PoultryFarm",
    imageUrl: poultry,
    name: "Poultry Farm System",
    tagcolor1: "blue-text-gradient",
    tagcolor2: "green-text-gradient",
    tagcolor3: "pink-text-gradient",
    tagname1: "ReactTs",
    tagname2: "Charts",
    tagname3: "Tailwindcss",
    websiteLink: "https://poultryfarm-management-system.web.app/",
  },
  {
    id: 5,
    description:
      "An immersive tour booking platform designed with modern web technologies. Features include a variety of tour options, secure booking and payment system, user reviews, and a visually appealing interface. Demonstrates a commitment to providing a seamless and engaging user experience in the travel and tourism sector.",
    githubLink: "https://github.com/Muhammad-Juman-jarwar/Natours-Project",
    imageUrl: natours,
    name: "Natours",
    tagcolor1: "blue-text-gradient",
    tagcolor2: "green-text-gradient",
    tagcolor3: "pink-text-gradient",
    tagname1: "Javascript",
    tagname2: "Html",
    tagname3: "css",
    websiteLink: "https://natours-project0.netlify.app/",
  },
  {
    id: 6,
    description:
      "A simple and efficient car rental platform built with Nextjs. CarEase offers a seamless booking experience, making car rental easy and hassle-free. It showcases a commitment to creating user-friendly web solutions in the car rental industry. Its intuitive interface and quick processing make it a go-to choice for hassle-free car rentals",
    githubLink: "https://github.com/Muhammad-Juman-jarwar/Rent-Car",
    imageUrl: next,
    name: "Rent Car",
    tagcolor1: "blue-text-gradient",
    tagcolor2: "green-text-gradient",
    tagcolor3: "pink-text-gradient",
    tagname1: "Nextjs",
    tagname2: "Tailwindcss",
    tagname3: "javascript",
    websiteLink: "https://rent-car1.netlify.app/",
  },
];
