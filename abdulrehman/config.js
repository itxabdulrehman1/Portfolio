import { FaGithub, FaInstagram, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail } from "react-icons/hi";

export const config = {
    developer: {
        name: "Abdul Rehman",
        role: "Senior Flutter & Full-Stack Developer",
        tagline: "Elegance is my North-Star",
        bio: "Senior Flutter & Full-Stack Developer with a lot of projects and working websites. I Build What You Get Amazed OF!",
    },
    social: {
        github: "itxabdulrehman1",
        instagram: "abdur_sighted",
        linkedin: "#" // User requested to leave as dummy for now
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "KHABRAN News App",
            description: "A fully functional Flutter Android application to get the latest news. Features real-time updates and a clean user interface.",
            image: "/projects/project-1.webp", // Placeholder, user needs to update images
            technologies: ["Flutter", "Dart", "API"],
            github: "https://github.com/itxabdulrehman1/Khabran_news_app.git",
            demo: "#"
        },
        {
            id: 2,
            title: "7brewsmenu.us",
            description: "A real brand non-affiliated website on a United States coffee brand. Built with WordPress for ease of management and high performance.",
            image: "/projects/project-2.webp", // Placeholder
            technologies: ["WordPress", "PHP", "CSS"],
            github: "#",
            demo: "https://7brewsmenu.us/"
        }
    ],
    skills: [
        {
            title: "Frontend / Mobile",
            icon: <HiCode />,
            description: "Mobile & Web Interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Flutter", level: "Expert", hot: true },
                { name: "Dart", level: "Expert" },
                { name: "Next.js", level: "Advanced" },
                { name: "HTML/CSS", level: "Expert" }
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Logic",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Advanced", hot: true },
                { name: "Python", level: "Intermediate" },
                { name: "C++", level: "Intermediate" },
                { name: "C#", level: "Intermediate" }
            ]
        },
        {
            title: "Tools",
            icon: <HiCube />,
            description: "Development Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "Android Studio", level: "Expert", hot: true },
                { name: "VS Code", level: "Expert" },
                { name: "WordPress", level: "Expert", hot: true }
            ]
        }
    ],
    experiences: [
        {
            position: "Senior Flutter & Full Stack Developer",
            company: "Freelancer",
            period: "2023 - Present",
            location: "Multan",
            description: "I have made many projects that deal with real world work. Specializing in mobile app development with Flutter and full-stack web solutions.",
            responsibilities: [
                "Developing cross-platform mobile applications using Flutter",
                "Building responsive websites using Next.js and WordPress",
                "Delivering high-quality solutions for diverse client requirements",
                "Managing end-to-end development lifecycle"
            ],
            technologies: ["Flutter", "Dart", "Next.js", "WordPress", "Node.js"]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@itxabdulrehman1",
            link: "https://github.com/itxabdulrehman1"
        },
        {
            icon: <FaInstagram className="w-5 h-5" />,
            label: "Instagram",
            value: "@abdur_sighted",
            link: "https://www.instagram.com/abdur_sighted?igsh=MWFld3o3ZXVoN20wNw%3D%3D&utm_source=qr"
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "itxarrehman@gmail.com",
            link: "mailto:itxarrehman@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Multan",
            link: null
        }
    ]
}