// src/data/portfolio.ts

export const PROFILE = {
    name: "Veselin Veselinov",
    role: "Junior Python Developer",
    subRole: "Django Specialist & Hardware Enthusiast",
    location: "Dobrich/Varna, Bulgaria",
    bio: "A dedicated and fast-learning junior developer specializing in Python, C++, and SQL. Through personal projects, I have gained practical experience in building software and solving real-world problems. I am passionate about the intersection of software and the physical world.",
    email: "your-email@gmail.com", // Add your real email here
    socials: {
        github: "https://github.com/Veselin15",
        linkedin: "https://www.linkedin.com/in/veselin-veselinov-a7bb9930a",
        fiverr: "https://www.fiverr.com/veselin_06/"
    },
};

export const SKILLS = [
    {name: "Python", category: "Backend"},
    {name: "Django", category: "Backend"},
    {name: "FastAPI", category: "Backend"},
    {name: "PostgreSQL", category: "Database"},
    {name: "React / Next.js", category: "Frontend"},
    {name: "Docker", category: "DevOps"},
    {name: "C++", category: "Embedded"},
    {name: "Arduino", category: "Embedded"},
];

export const EDUCATION = [
    {
        school: "Technical University Varna",
        degree: "Information and Communication Technology",
        year: "2025 - 2029",
        icon: "university",
        description: "One of the best Universities in Bulgaria."
    },
    {
        school: "Software University (SoftUni)",
        degree: "Software Engineer with Python",
        year: "2022 - 2025",
        icon: "code",
        description: "Python Basics, Fundamentals, Advanced, OOP, ORM, PostgreSQL, and Django Web."
    },
    {
        school: "Language Learning High School 'Geo Milev'",
        degree: "Primary Language: German; Secondary: English",
        year: "2020 - 2025",
        icon: "school",
        description: "Elite Language Learning High School in Dobrich, Bulgaria."
    }
];

export const CERTIFICATES = [
    {
        title: "DSD II German Diploma",
        issuer: "Der Kultusministerkonferenz",
        year: "2025",
        url: "https://drive.google.com/file/d/1nS3441KSGVEEvuNpMnQNFw2sIZGJR0Om/view?usp=sharing"
    },
    {
        title: "Django Advanced",
        issuer: "SoftUni",
        year: "2025",
        url: "https://softuni.bg/certificates/details/248897/5cb379ca"
    },
    {
        title: "Django Basics",
        issuer: "SoftUni",
        year: "2025",
        url: "https://softuni.bg/certificates/details/246234/caf6a2c4"
    },
    {
        title: "PostgreSQL",
        issuer: "SoftUni",
        year: "2025",
        url: "https://softuni.bg/certificates/details/241385/21b4f6c5"
    },
    {
        title: "Python OOP",
        issuer: "SoftUni",
        year: "2024",
        url: "https://softuni.bg/certificates/details/231822/70cd1167"
    },
    {
        title: "Python Advanced",
        issuer: "SoftUni",
        year: "2024",
        url: "https://softuni.bg/certificates/details/227651/e1ebd439"
    }
];

export type ProjectCategory = "Software" | "Hardware";

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    description: string;
    longDescription?: string;
    tech: string[];
    image?: string;
    repoUrl?: string;
    liveUrl?: string;
    features?: string[];
    gallery?: string[];
}

export const PROJECTS: Project[] = [
    // --- SOFTWARE PROJECTS ---
{
        id: "techjobsdata-api",
        title: "TechJobsData API",
        category: "Software",
        description: "A high-performance, real-time job aggregation engine. Scrapes, normalizes, and serves tech job listings from LinkedIn, Glassdoor, and Indeed via a clean REST API.",
        tech: ["Django", "DRF", "Scrapy", "Celery", "PostgreSQL", "Docker", "Stripe"],
        repoUrl: "https://github.com/Veselin15/TechJobsData-API",
        liveUrl: "https://techjobsdata.com"
    },
    {
        id: "calories-tracker",
        title: "CaloriesTracker",
        category: "Software",
        description: "A modern, full-stack nutrition tracking application. Users can log meals, set dietary goals, and visualize progress with interactive charts, powered by the FatSecret API.",
        tech: ["Django", "PostgreSQL", "Docker", "Chart.js", "Bootstrap", "FatSecret API"],
        repoUrl: "https://github.com/Veselin15/CaloriesTracker.git",
    },
    {
        id: "face-recognition",
        title: "Celebrity Face Recognition AI",
        category: "Software",
        description: "An AI-powered web app that identifies celebrities from user images. Utilizes FaceNet for facial feature extraction and Support Vector Machines (SVM) for high-accuracy classification.",
        tech: ["Python", "Django", "FaceNet", "PyTorch", "SVM", "PostgreSQL"],
        repoUrl: "https://github.com/Veselin15/Image_Classification_AI.git"
    },
    {
        id: "project-planner-webapp",
        title: "Project Planner WebApp",
        category: "Software",
        description: "A robust Django-based project management tool featuring rich text planning (CKEditor), a modern Dark UI, and secure user authentication with PostgreSQL.",
        tech: ["Django", "PostgreSQL", "Docker", "Bootstrap 5", "CKEditor"],
        repoUrl: "https://github.com/Veselin15/Project-Planner-WebApp"
    },
    {
        id: "secure-banking-cpp",
        title: "Secure Banking System (C++)",
        category: "Software",
        description: "A secure console-based banking system featuring SHA-256 password hashing, persistent JSON storage, and automatic transaction recovery via journaling.",
        tech: ["C++", "OpenSSL", "JSON", "Multithreading", "SHA-256"],
        repoUrl: "https://github.com/Veselin15/banking_system_cpp"
    },
    {
        id: "petstagram",
        title: "Petstagram",
        category: "Software",
        description: "A social photo-sharing application for pet owners. Inspired by Instagram, it features pet profiles, photo tagging, and community interactions like likes and comments.",
        tech: ["Django", "Python", "SQLite", "Pillow", "HTML5", "CSS3"],
        repoUrl: "https://github.com/Veselin15/Petsagram",
        image: "/images/projects/petstagram.png"
    },

    // --- HARDWARE PROJECTS ---
    {
        id: "homelab-server",
        title: "Home Lab Server & Portfolio",
        category: "Hardware",
        description: "Transforming old hardware into a powerful home Linux server hosted via Cloudflare Tunnels.",
        // Note: Using template literals (backticks) for multi-line strings
        longDescription: `
### 1. The Idea: New Life for Old Hardware
Instead of throwing away my old laptop, I decided to turn it into the heart of my **home lab**. The goal was to create a fully functional web server accessible from anywhere in the world, without paying for expensive cloud hosting (VPS) and without compromising my home network security. On this server, I built and hosted my personal portfolio – the very site you are looking at right now.

### 2. Hardware and Server Architecture
The first step was installing **Ubuntu Server** on the machine. I chose an architecture based entirely on microservices (Containers) for ease of management and scalability.

- **Docker & Docker Compose:** Everything runs in isolated containers. This ensures that the software (databases, site, cache) does not depend on the operating system and can be migrated to another machine in seconds.
- **Nginx Proxy Manager:** I use this as a "gatekeeper". It distributes traffic to the correct containers (e.g., the portfolio on port 8000, the chatbot on 8001) and manages SSL certificates.
- **Cloudflare Zero Trust Tunnel:** This was the "icing on the cake". Instead of opening ports on the router (which is a security risk) or paying for a static IP, I created an encrypted tunnel directly to Cloudflare. This keeps the site protected from DDoS attacks and accessible via HTTPS.

### 3. The Software: Modern Django Stack
The portfolio itself is not just a static HTML page, but a complex web system:

- **Backend:** Python & Django – a powerful framework providing the core logic and administration panel.
- **Frontend:** I utilized Tailwind CSS and DaisyUI for a modern, dark-themed design.
- **Database:** PostgreSQL – a professional database for storing projects and configuration settings.
- **AI Chatbot:** I integrated Google Gemini AI. When you ask a question in the chat, Django sends the request to Celery (an asynchronous queue), which is managed by Redis.

### 4. Challenges & Troubleshooting
- **MTU (Maximum Transmission Unit):** The connection to the Google API was timing out due to the double encapsulation of packets. I configured the Docker network to use a smaller packet size (MTU 1280), which stabilized the connection.
- **Caching & Mobile Menu:** Resolved display issues on specific screens through precise tuning of Tailwind classes and Cloudflare cache management.
`,
        tech: ["Ubuntu Server", "Docker", "Nginx Proxy Manager", "Cloudflare Tunnel", "Django", "PostgreSQL", "Redis", "Celery"],
        features: [
            "Self-Hosted on Old Hardware",
            "Cloudflare Zero Trust Security",
            "Dockerized Microservices",
            "AI Chatbot Integration (Gemini)",
            "Nginx Reverse Proxy"
        ],
        // FIXED PATHS: Added leading slash "/"
        image: "/images/projects/homelab-server/homelab.jpg",
        gallery: [
            "/images/projects/homelab-server/front_panel.jpg",
            "/images/projects/homelab-server/homelab.jpg",
            "/images/projects/homelab-server/code.png"
        ]
    },
    {
        id: "audio-amplifier-tonecontrol",
        title: "Audio Amp 30W & Baxandall Tone Control DIY",
        category: "Hardware",
        description: "Simple audio amplifier 30W and baxandall tone control(treble and bass)",
        longDescription: `
### 1. Concept and Circuit Design
I have always believed that the best sound is the one you create yourself. In the late summer of 2025, I took on the challenge of assembling a compact yet high-quality 30-watt audio amplifier. The system is built on a modular principle:

- **The Heart (PSU):** To ensure stable operation, I used a transformer with specific secondary windings. A **+12V / -12V** rail powers the preamplifier (critical for op-amp performance), while a powerful **+42V** single rail drives the main power stage.
- **The Brain (Tone Control):** For sound shaping, I chose the classic **Baxandall topology** implemented with **uA741** operational amplifiers. This allows independent Bass and Treble adjustment without introducing significant distortion.
- **The Muscle (Power Stage):** I relied on the proven **TDA 2050** chip. It delivers up to 32W of power with very low harmonic distortion, making it an excellent choice for home Hi-Fi applications.

### 2. PCB Fabrication
For the power supply and tone control, I avoided generic boards. Instead, I manufactured them myself using the **photoresist method**:
1. Printing a negative photomask of the circuit.
2. Exposing the copper surface to UV light.
3. Developing and etching the board to achieve precise traces.

### 3. Assembly and Enclosure
I decided to give new life to an old device (**Upcycling**), giving the unit a unique retro-industrial look.
- **Modifications:** Drilled new holes for potentiometers (Volume, Treble, Bass) and installed a dedicated ON/OFF switch with an LED indicator.
- **Connectivity:** High-quality banana binding posts were mounted on the back panel for secure speaker connections.
- **Internals:** PCBs are mounted using standoffs to ensure proper isolation and airflow.

### 4. Final Touches & Conclusion
I used a label printer to create custom labels for all controls. The result is an amplifier that delivers punchy bass and crystal-clear highs—proof that with passion and a soldering iron, we can build gear that brings more joy than anything bought off the shelf.
`,
        tech: ["TDA 2050", "uA741 Op-Amp", "PCB Design", "Photoresist Etching", "Analog Electronics"],
        features: [
            "Custom Baxandall Tone Control",
            "Dual-Rail Power Supply",
            "Hand-Etched PCBs",
            "Upcycled Industrial Enclosure",
            "30W Hi-Fi Output"
        ],
        image: "/images/projects/audio-amplifier-tonecontrol/main.jpg", // Make sure to create this folder
        gallery: [
            "/images/projects/audio-amplifier-tonecontrol/above.jpg",
            "/images/projects/audio-amplifier-tonecontrol/back.jpg",
            "/images/projects/audio-amplifier-tonecontrol/front_panel.jpg",
            "/images/projects/audio-amplifier-tonecontrol/opened_above.jpg",
            "/images/projects/audio-amplifier-tonecontrol/opened_side.jpg",
            "/images/projects/audio-amplifier-tonecontrol/opened_side2.jpg",
            "/images/projects/audio-amplifier-tonecontrol/scheme-amplifier.jpg",
            "/images/projects/audio-amplifier-tonecontrol/scheme-power-supply.jpg",
            "/images/projects/audio-amplifier-tonecontrol/scheme-power-supply-PCB.jpg",
            "/images/projects/audio-amplifier-tonecontrol/scheme-preamp-tonecontrol.jpg",
            "/images/projects/audio-amplifier-tonecontrol/scheme-preamp-tonecontrol-PCB.jpg"
        ]
    },
    {
        id: "active-speaker-conversion",
        title: "Active Speaker",
        category: "Hardware",
        description: "Transforming a passive Samsung subwoofer into a fully autonomous audio system with Bluetooth and FM Radio.",
        longDescription: `
### 1. The Enclosure: From Passive to Active
In August 2024, I transformed an old passive **Samsung subwoofer** into a modern active speaker. The enclosure featured a "hollow" rear zone structurally separated from the acoustic chamber, which was the perfect place to install electronics without disrupting the sound. I utilized the factory plastic standoffs to securely mount the new boards.

### 2. Electronics: The "Ironing Method"
Unlike my previous photoresist projects, I experimented with the **Toner Transfer method** ("ironing") to fabricate the PCBs.
- **Amplifier:** A custom mono stage delivering **20-30W**, equipped with a massive heatsink for passive cooling.
- **Power Supply:** A filtering block with a bridge rectifier (**S4VB**) and quality **Marcon electrolytic capacitors** (4700uF / 35V), powered by a reliable **LAPP AG transformer** to ensure hum-free operation.

### 3. Modern Interface and Assembly
To add modern functionality, I integrated a multi-functional module (**JQ-D106BT-A1**) which adds:
- **Bluetooth Connectivity**
- **FM Radio** (with an internal antenna routed discreetly)
- **USB & TF Card Slots**
- **AUX Input**

### 4. Cable Management
I paid special attention to the wiring. All cables are **twisted** to reduce electromagnetic interference and tidied up with zip ties. The control panel, power jack, and fuse were fitted into custom-cut holes, resulting in a clean, factory-like finish.
`,
        tech: ["Toner Transfer PCB", "Analog Audio", "Bluetooth Integration", "Power Supply Design"],
        features: [
            "Bluetooth & FM Radio",
            "Upcycled Samsung Enclosure",
            "Custom 30W Mono Amplifier",
            "Low-Noise Power Supply",
            "Internal Antenna Routing"
        ],
        image: "/images/projects/active-speaker/main.jpg", // Make sure to create this folder
        gallery: [
            "/images/projects/active-speaker/amplifier.jpg",
            "/images/projects/active-speaker/multi-functional-module.jpg",
            "/images/projects/active-speaker/power-supply.jpg",
            "/images/projects/active-speaker/speaker-main.jpg",
            "/images/projects/active-speaker/speaker-open.jpg",
            "/images/projects/active-speaker/transformer.jpg"
        ]
    },
    {
        id: "diy-cooling-module",
        title: "DIY Room Cooling Module with PWM Control",
        category: "Hardware",
        description: "A high-airflow cooling module built from repurposed computer fans, featuring a custom MC14049UB-based PWM speed controller.",
        longDescription: `
### 1. The Challenge: Beating the Summer Heat
The scorching heat of **Summer 2023** challenged me to find a quick and effective cooling solution for my workspace. Rather than purchasing a standard desk fan, I decided to engineer my own high-airflow module by repurposing powerful computer components and designing a custom control circuit.

### 2. Construction and Design
My goal was to generate a significant airflow in a compact form factor.
- **Unified Block:** I combined **three large computer fans (120mm)** into a single unit.
- **Mounting:** The fans are mechanically linked and mounted onto a sturdy **wooden base**, which provides stability and dampens vibrations.
- **Power:** The system runs on an external **12V source**, connected via a standard DC barrel jack mounted directly on the controller board.

### 3. Electronics: Custom PWM Speed Control
The highlight of this project is the custom speed controller. Instead of using simple voltage regulation (which reduces torque and efficiency), I implemented **Pulse Width Modulation (PWM)**.

- **The Brain (MC14049UB):** The core of the board is the **MC14049UB Hex Inverter/Buffer** IC, configured to act as an oscillator. By adjusting the potentiometer, I vary the **duty cycle** of the signal sending power to the fans.
- **Efficiency:** The driving transistors operate in **switching mode**, minimizing power loss as heat. Small heatsinks ensure long-term reliability.
- **Smooth Control:** This design allows for precise speed adjustment from a silent breeze to maximum airflow.

### 4. PCB Fabrication
Consistent with my other electronics projects, I wanted a professional finish. I designed the PCB myself and manufactured it using the **photoresist method**:
1. Exposing the photosensitive board through a negative template.
2. Chemical etching to remove excess copper.
3. Drilling and soldering components for a compact layout that mounts neatly on the fan frame.

### Conclusion
Since August 2023, this module has become an essential part of my desk setup. It serves as a great example of **upcycling**—enhancing standard computer parts with custom analog electronics to solve a real-world problem.
`,
        tech: ["MC14049UB", "PWM Control", "Analog Electronics", "PCB Design", "Upcycling"],
        features: [
            "Custom PWM Speed Controller",
            "High-Airflow (3x 120mm Fans)",
            "Hand-Etched PCB",
            "Efficient Switching Mode",
            "Vibration-Dampened Base"
        ],
        image: "/images/projects/diy-cooling-module/main.jpg",
        gallery: [
            "/images/projects/diy-cooling-module/above.jpg",
        ]
    },
];