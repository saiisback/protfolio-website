export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I put client collaboration first, driving open and clear communication ",
    description: "Your Project is my project",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptable to any timezone for communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Constantly improving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by a love for tech and development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Decentralized Charity App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to start a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Created Leetcode Clone",
    des: "A Leetcode clone with a dark mode, and a code editor with syntax highlighting and autocompletion.",
    img: "/P1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg",'/firebase.svg' ],
    url:'/ui.github.com',
    link: "https://github.com/saiisback/leetcode_clone",
    status:"Check Github repo",
  },
  {
    id: 2,
    title: "Waycup website - group of freelancers",
    des: "A  designed and deployed website for a group of freelancers, with a blog and a contact form.",
    img: "/P2.png",
    iconLists: ["/html.svg", "/css.svg", "/javascript.svg",],
    url:'/ui.waycup.com',
    link: "https://way-cup.github.io/waycup.github.io/",
    status:"Check live site",
  },
  {
    id: 3,
    title: "Dog Services and Care App UI ",
    des: "A UI design for a dog health app,with all the necessities needed for the dog care  and a clean and modern design.",
    img: "/P3.png",
    iconLists: ["/figma.svg"],
    url:"/ui.pawsleeves",
    link: "https://www.figma.com/design/0fKcMjp7w4Kq5sQ5NCnzqv/Dog-services-app-UI?node-id=25-145&t=S2wfY3aEhhkxeWEX-1",
    status:"Check Figma file",
  },
  {
    id: 4,
    title: "Music Streaming Service UI",
    des: "A UI design for a music streaming service, with a light mode and a music player.",
    img: "/P4.png",
    iconLists: ["/figma.svg"],
    url:'/ui.MusicApp',
    link: "https://www.figma.com/design/8Om8TBst0WQ1NqGf03uWdx/Music-Mobile-App-UI?node-id=3-115&t=0kTrbRlvq6rNKwek-0",
    status:"Check Figma file",
  },
  {
    id: 5,
    title: "Spotify Ui Clone",
    des: "A clone which redesigns the Spotify web player, with a light mode and a music player.",
    img: "/P5.png",
    iconLists: ["/figma.svg"],
    url:'/ui.musicfy',
    link: "https://www.figma.com/design/eyENYXXU89WfBBHmLEf5qm/Music-Streaming-Service?node-id=0-1&t=HLA7C5LxCY6K0Es2-1",
    status:"Check Figma file",
  },
];

export const testimonials = [
  {
    quote:
      "I would rate your service 5/5⭐️.You have done a fantastic job while doing my work, It was systematic work and it was quick service by Sai Karthik.I expected that it would take more than a week but it took less than that, And i also liked the designs made by Sai karthik. It was quite unique and user friendly designs",
    name: "Mayank lilani",
    title: "marketing Head",
    img:'./tail.svg',
  },
  {
    quote:
      "Sai Karthik has a really amazing work ethic and determination. He stands out for being adaptable and productive, which makes him a great asset to any project.It's amazing how well he can handle several jobs at once and provide excellent outcomes. His persistent dedication and enthusiasm for perfection are absolutely admirable.",
    name: "Aditya S nair",
    title: "President of Atal lab at DPSBN",
    img:'',
  },
  
];

export const companies = [
  {
    id: 1,
    name: "Delhi public school",
    img: "/next.svg",
    nameImg: "/nextjs-13.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/re.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web developer",
    desc: "Assisted  Many clients in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Acted as judge for hackthons for my school",
    desc: "Judged the projects of students in hackathons, providing feedback and guidance.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Ui/Ux Designer",
    desc: "Made design for dog health app, and a few other projects for clients.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Participated in the Smart India Hackathon",
    desc: "Developed a indegenouos ROV for underwater exploration and surveillance.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:'https://github.com/saiisback'
  },
  {
    id: 2,
    img: "/insta.svg",
    link:'https://www.instagram.com/invalid.dev/'
  },
  {
    id: 3,
    img: "/link.svg",
    link:'https://www.linkedin.com/in/sai-karthik-ketha'
  },
];