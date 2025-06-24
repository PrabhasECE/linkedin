export const currentUserProfile = {
  avatarInitial: 'P',
  avatarColor: '#E0245E', // Magenta/Pink color from the image
  name: 'Prabhas Mannava',
  headline: 'Student at RGUKT',
  location: 'Guntur, Andhra Pradesh',
  education: 'RGUKT, NUZVID',
  avatarSrc: 'https://cdn-useast1.kapwing.com/static/templates/custom-background-profile-picture-maker-full-75577a19.webp'
};

// --- Dummy Data for Posts ---
export const dummyPosts = [
  {
    id: 1,
    avatar: 'https://vassardigital.ai/wp-content/uploads/2024/10/og-light-banner.jpg',
    author: 'Vassar Labs',
    followers: '9,718',
    timeAgo: '2w',
    content: [
      '#Vassarlabs is looking for #Remotesensing #GISExpert',
      'Location:- Vijayawada',
      'Required Skills:-',
      'Experienced in handling satellite and drone data for weather analysis, natural disaster monitoring, crop assessment, and land use change detection with Strong in handling in image processing software utilities, Programming (Python, R, Matlab, etc) and communication skills',
      'Ph.D or M.Tech or M.Sc in Remote sensing',
      'Please share the profiles to pravallika@vassarlabs.com',
      '#GIS #remotesensing #cropmonitoring #disastermonitoring #arcgis #qgis #matlab #python #geospatial #vassarlabs #hiring #weatherforcasting',
    ],
    image: null,
    reactionsCount: 62,
    reactions: ['like', 'message', 'love'],
    commentsCount: 3,
    repostsCount: 5,
    verified: true,
  },
  {
    id: 2,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuNhTZJTtkR6b-ADMhmzPvVwaLuLdz273wvQ&s',
    author: 'John Smith',
    followers: '1,200',
    timeAgo: '1d',
    content: [
      'Excited to share my latest article on building scalable web applications with #Reactjs and #Nodejs. Check it out!',
      '#WebDevelopment #MERNStack #Programming',
    ],
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231110115359/Roadmap-to-Mern-stack-developer-copy-(3).webp',
    reactionsCount: 150,
    reactions: ['like', 'love'],
    commentsCount: 20,
    repostsCount: 10,
    verified: false,
  },
  {
    id: 3,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzX7zr11zuCUlRDzTZxOFKwhQxOgaC8bc-hw&s',
    author: 'AI Community',
    followers: '50,000',
    timeAgo: '3h',
    content: [
      'New advancements in #MachineLearning are transforming industries. What are your thoughts on the future of #AI in healthcare?',
    ],
    image: "https://chipxpert.in/wp-content/uploads/2025/02/VLSI-vs-embedd.jpg",
    reactionsCount: 500,
    reactions: ['like'], 
    commentsCount: 80,
    repostsCount: 30,
    verified: true,
  },
  {
  id: 4,
  avatar: 'https://cdn.icon-icons.com/icons2/2407/PNG/512/microsoft_edge_icon_146206.png', // Placeholder avatar
  author: 'Global Tech Insights',
  followers: '75,210',
  timeAgo: '1h',
  content: [
    'The latest trends in #QuantumComputing are fascinating! We dive deep into the potential impact on data security and AI development in our new whitepaper.',
    'What are your thoughts on the ethical implications?',
    '#TechTrends #AI #Cybersecurity'
  ],
  image: null, // Example image for quantum computing
  reactionsCount: 345,
  reactions: ['like', 'message'], // 'insightful' is a common LinkedIn reaction
  commentsCount: 55,
  repostsCount: 18,
  verified: true,
},
{
  id: 5,
  avatar: 'https://community.nasscom.in/sites/default/files/media/images/startup.jpeg', // Placeholder avatar
  author: 'Startup Success Stories',
  followers: '2,890',
  timeAgo: '2d',
  content: [
    'Huge congratulations to "InnovateX" on securing their Series B funding! Their dedication to sustainable energy solutions is truly inspiring. Excited to see what they achieve next!',
    '#StartupLife #GreenEnergy #Innovation #FundingSuccess'
  ],
  image: 'https://i.ytimg.com/vi/ivoV4h6xXWE/hqdefault.jpg', // Example image for startup success
  reactionsCount: 88,
  reactions: ['love', 'like'],
  commentsCount: 12,
  repostsCount: 3,
  verified: false,
}
];

// --- Dummy Data for Job Listings ---
export const dummyJobs = [
  // (Keep your existing dummyJobs data here, including the updates I gave previously)
  {
    id: 1,
    title: 'Software Engineer (Frontend)',
    company: 'Tech Solutions Inc.',
    location: 'Hyderabad, Telangana, India (On-site)',
    timePosted: '1 day ago',
    applicants: 150,
    easyApply: true,
    companyLogo: 'https://via.placeholder.com/40/0A66C2/FFFFFF?text=TS',
    description: 'We are seeking a skilled Frontend Software Engineer to join our dynamic team. You will be responsible for developing and implementing user interface components using React.js and other modern web technologies. Experience with RESTful APIs, state management (Redux/Zustand), and responsive design is a plus.',
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Redux', 'REST APIs'],
    experienceLevel: 'Mid-Senior Level',
    jobType: 'Full-time',
    onSiteRemote: 'On-site',
  },
  {
    id: 2,
    title: 'Data Analyst',
    company: 'Innovate Data Co.',
    location: 'Bangalore, Karnataka, India (Hybrid)',
    timePosted: '3 days ago',
    applicants: 80,
    easyApply: false,
    companyLogo: 'https://via.placeholder.com/40/FF5733/FFFFFF?text=ID',
    description: 'Join our growing data team! We are looking for a Data Analyst to help us extract insights from complex datasets. Responsibilities include data collection, cleaning, analysis, and visualization. Proficiency in SQL, Python (Pandas, NumPy), and data visualization tools (Tableau, Power BI) is required.',
    skills: ['SQL', 'Python', 'Data Visualization', 'Tableau', 'Excel'],
    experienceLevel: 'Entry Level',
    jobType: 'Full-time',
    onSiteRemote: 'Hybrid',
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'Creative Minds Studio',
    location: 'Remote (India)',
    timePosted: '5 days ago',
    applicants: 60,
    easyApply: true,
    companyLogo: 'https://via.placeholder.com/40/33A6B4/FFFFFF?text=CM',
    description: 'We are seeking a talented UX/UI Designer to create intuitive and aesthetically pleasing user experiences for our digital products. You will work closely with product managers and engineers to translate user needs into design solutions. Expertise in Figma, Adobe XD, and user research methodologies is essential.',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping'],
    experienceLevel: 'Associate',
    jobType: 'Full-time',
    onSiteRemote: 'Remote',
  },
  {
    id: 4,
    title: 'Cloud Architect',
    company: 'Global Cloud Services',
    location: 'Pune, Maharashtra, India (On-site)',
    timePosted: '1 week ago',
    applicants: 45,
    easyApply: false,
    companyLogo: 'https://via.placeholder.com/40/7B1FA2/FFFFFF?text=GC',
    description: 'As a Cloud Architect, you will design, implement, and manage scalable and secure cloud infrastructure solutions on AWS, Azure, or GCP. Strong understanding of cloud native services, containerization (Docker, Kubernetes), and DevOps practices is required.',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'DevOps'],
    experienceLevel: 'Director',
    jobType: 'Full-time',
    onSiteRemote: 'On-site',
  },
  {
    id: 5,
    title: 'Marketing Specialist',
    company: 'Brand Builders Agency',
    location: 'Mumbai, Maharashtra, India (Hybrid)',
    timePosted: '2 days ago',
    applicants: 110,
    easyApply: true,
    companyLogo: 'https://via.placeholder.com/40/FFC300/FFFFFF?text=BB',
    description: 'Looking for a dynamic Marketing Specialist with experience in digital campaigns and social media. Must be creative and results-driven.',
    skills: ['Digital Marketing', 'Social Media', 'Content Creation', 'SEO'],
    experienceLevel: 'Entry Level',
    jobType: 'Full-time',
    onSiteRemote: 'Hybrid',
  },
  {
    id: 6,
    title: 'Customer Support Executive',
    company: 'HelpDesk Solutions',
    location: 'Chennai, Tamil Nadu, India (On-site)',
    timePosted: '4 days ago',
    applicants: 200,
    easyApply: true,
    companyLogo: 'https://via.placeholder.com/40/6A0DAD/FFFFFF?text=HD',
    description: 'Join our customer support team! We need empathetic individuals to assist our clients with their queries. Excellent communication skills required.',
    skills: ['Customer Service', 'Communication', 'Problem Solving'],
    experienceLevel: 'Entry Level',
    jobType: 'Full-time',
    onSiteRemote: 'On-site',
  },
  {
    id: 7,
    title: 'Project Manager',
    company: 'Synergy Projects',
    location: 'Hyderabad, Telangana, India (Hybrid)',
    timePosted: '1 week ago',
    applicants: 70,
    easyApply: false,
    companyLogo: 'https://via.placeholder.com/40/008080/FFFFFF?text=SP',
    description: 'Experienced Project Manager needed to oversee various tech projects from conception to completion. PMP certification a plus.',
    skills: ['Project Management', 'Agile', 'Scrum', 'Leadership'],
    experienceLevel: 'Mid-Senior Level',
    jobType: 'Full-time',
    onSiteRemote: 'Hybrid',
  },
  { // New dummy job 8
    id: 8,
    title: 'Senior Software Architect',
    company: 'Innovate AI Labs',
    location: 'Bangalore, Karnataka, India (Remote)',
    timePosted: '6 days ago',
    applicants: 30,
    easyApply: false,
    companyLogo: 'https://via.placeholder.com/40/9C27B0/FFFFFF?text=IL',
    description: 'Seeking a seasoned Software Architect to lead the design and development of our next-gen AI platforms. Strong background in scalable systems and cloud architecture required.',
    skills: ['System Design', 'Cloud Architecture', 'Python', 'Machine Learning', 'Leadership'],
    experienceLevel: 'Director',
    jobType: 'Full-time',
    onSiteRemote: 'Remote',
  },
  { // New dummy job 9
    id: 9,
    title: 'Human Resources Generalist',
    company: 'People First Solutions',
    location: 'Delhi, Delhi, India (On-site)',
    timePosted: '2 weeks ago',
    applicants: 90,
    easyApply: true,
    companyLogo: 'https://via.placeholder.com/40/4CAF50/FFFFFF?text=PF',
    description: 'We are looking for an HR Generalist to support our growing team with recruitment, employee relations, and HR policies. Experience with HRIS systems is a plus.',
    skills: ['HR Management', 'Recruitment', 'Employee Relations', 'HRIS'],
    experienceLevel: 'Associate',
    jobType: 'Full-time',
    onSiteRemote: 'On-site',
  },
  { // New dummy job 10
    id: 10,
    title: 'Financial Analyst',
    company: 'Apex Capital Advisors',
    location: 'Mumbai, Maharashtra, India (On-site)',
    timePosted: '3 days ago',
    applicants: 75,
    easyApply: false,
    companyLogo: 'https://via.placeholder.com/40/E91E63/FFFFFF?text=AC',
    description: 'An opportunity for a detail-oriented Financial Analyst to join our investment banking team. Responsibilities include financial modeling, valuation, and market research.',
    skills: ['Financial Modeling', 'Valuation', 'Market Research', 'Excel', 'Corporate Finance'],
    experienceLevel: 'Entry Level',
    jobType: 'Full-time',
    onSiteRemote: 'On-site',
  },
  { // New dummy job 11
    id: 11,
    title: 'Content Writer',
    company: 'Digital Storytellers',
    location: 'Anywhere (Remote)',
    timePosted: '1 day ago',
    applicants: 120,
    easyApply: true,
    companyLogo: 'https://via.placeholder.com/40/FF9800/FFFFFF?text=DS',
    description: 'Passionate Content Writer wanted to create engaging articles, blog posts, and website copy. Strong research skills and SEO knowledge are highly valued.',
    skills: ['Content Writing', 'SEO', 'Blogging', 'Research', 'Copywriting'],
    experienceLevel: 'Entry Level',
    jobType: 'Contract', // Example of a non-Full-time job
    onSiteRemote: 'Remote',
  },
  { // New dummy job 12
    id: 12,
    title: 'Network Administrator',
    company: 'SecureNet Systems',
    location: 'Chennai, Tamil Nadu, India (On-site)',
    timePosted: '5 days ago',
    applicants: 50,
    easyApply: false,
    companyLogo: 'https://via.placeholder.com/40/795548/FFFFFF?text=SN',
    description: 'Responsible for maintaining and securing our company\'s computer networks. Experience with Cisco, firewalls, and network protocols is essential.',
    skills: ['Network Administration', 'Cisco', 'Cybersecurity', 'Firewall', 'Protocols'],
    experienceLevel: 'Associate',
    jobType: 'Full-time',
    onSiteRemote: 'On-site',
  },
];


// --- Dummy Data for Conversations (Make sure this array is not empty) ---
export const dummyConversations = [
  // IMPORTANT: Ensure this array contains at least one conversation object,
  // and each conversation object has a 'messages' array property.
  // Example:
  {
    id: 1,
    name: 'Poojitha Mannava',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Sounds good! Let me know when you\'re free.',
    time: '1h',
    unread: 2,
    messages: [
      { id: 1, sender: 'Alice Johnson', text: 'Hi, are you free for a quick call this afternoon?', time: '1:30 PM', isMe: false },
      { id: 2, sender: 'Me', text: 'Hey Alice! Yes, I can do after 3 PM. Does that work for you?', time: '1:32 PM', isMe: true },
    ],
  },
  {
    id: 2,
    name: 'Prabhas Mannava',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    lastMessage: 'Got it, thanks for the update.',
    time: '5h',
    unread: 0,
    messages: [
      { id: 1, sender: 'Bob Williams', text: 'Got it, thanks for the update.', time: '10:00 AM', isMe: false },
      { id: 2, sender: 'Me', text: 'No problem!', time: '10:01 AM', isMe: true },
      { id: 3, sender: 'Me', text: 'Shall we connect now?', time: '10:01 AM', isMe: true },
      { id: 4, sender: 'Me', text: 'or evening?', time: '10:02 AM', isMe: true },
    ],
  },
  // ... (add all your other dummy conversations here, each with a 'messages' array)
];


export const dummyPeople = [
    {
        id: 1,
        name: "Gangadhar Munuri",
        headline: "Aspiring Software Developer || MERN Stack Developer | React.js & Node.js Enthusiast",
        profilePic: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?semt=ais_hybrid&w=740", // Example direct URL
        backgroundImg: "https://cdn.shopify.com/s/files/1/0066/4574/3686/files/Philadelphia_LinkedIn_Cover_Photo.png?v=1627913440",
        openToWork: true,
        verified: false,
        mutualConnections: 10,
    },
    {
        id: 2,
        name: "Kusuma Kumari Kasse",
        headline: "Digital Design Engineer @ceremorphic | UX/UI Specialist | Figma & Adobe XD",
        profilePic: "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg?semt=ais_hybrid&w=740", // Example direct URL
        backgroundImg: "https://www.shutterstock.com/image-vector/banner-design-geometric-shape-abstract-260nw-2365893783.jpg",
        openToWork: true,
        verified: true,
        mutualConnections: 5,
    },
    {
        id: 3,
        name: "Anitha Kolla",
        headline: "CORE JAVA | REACT JS | FRONTEND Developer | Web Technologies",
        profilePic: "https://thumbs.dreamstime.com/b/profile-picture-young-indian-woman-renter-headshot-portrait-confident-tenant-pose-modern-own-new-apartment-house-226719004.jpg", // Example direct URL
        backgroundImg: "https://marketplace.canva.com/EAEvZ3NDFto/1/0/1600w/canva-blush-wave-linkedin-banner-nuNmg4S1vq8.jpg",
        openToWork: true,
        verified: false,
        mutualConnections: 15,
    },
    {
        id: 4,
        name: "HEMALATHA SRI ANUSURI",
        headline: "Open to Work|Software Trainee at Yalamanchili Software Solutions",
        profilePic: "https://images.snapwi.re/6b4e/58061908c9e0b29f0a7b23c6.w800.jpg", // <--- CORRECTED EXAMPLE HERE
        backgroundImg: "https://www.shutterstock.com/shutterstock/photos/2051817977/display_1500/stock-photo-technology-background-and-linkedin-profile-banner-2051817977.jpg",
        openToWork: true,
        verified: false,
        mutualConnections: 8,
    },
    {
        id: 5,
        name: "Hemalatha Pallem",
        headline: "Front-End Developer | React.js | MERN stack | JavaScript | HTML | CSS",
        profilePic: "https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4=", // Example direct URL
        backgroundImg: "https://static.vecteezy.com/system/resources/previews/004/929/866/non_2x/low-poly-abstract-modern-background-bright-colors-chaotic-triangles-of-variable-size-and-rotation-minimalist-layout-for-business-card-landing-page-wallpaper-website-brochure-trendy-eps10-vector.jpg",
        openToWork: false,
        verified: true,
        mutualConnections: 12,
    },
    {
        id: 6,
        name: "Divya Poluri",
        headline: "Graduate in civil engineering | Structural Design | AutoCAD",
        profilePic: "https://www.shutterstock.com/image-photo/positive-confident-company-director-formal-260nw-2451794051.jpg", // Example direct URL
        backgroundImg: "https://bcassetcdn.com/assets/images/designcom/carousel/carousel-linkedin-banner.webp",
        openToWork: false,
        verified: true,
        mutualConnections: 3,
    },
    {
        id: 7,
        name: "Shaik Jasmin",
        headline: "IT &NOT IT FIELD INTERN | Data Entry Specialist | Microsoft Office",
        profilePic: "https://i.pinimg.com/736x/9c/f4/da/9cf4daa1185e463bd67c6ac53de356be.jpg", // Example direct URL
        backgroundImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9J64iBUp1Jj5hG4grE6H1rjSsEPGkfswBpA&s",
        openToWork: true,
        verified: false,
        mutualConnections: 7,
    },
    {
        id: 8,
        name: "Chellarao kanda",
        headline: "AIR-111. IN GATE 2025(MT) | Mechanical Engineering | Thermodynamics",
        profilePic: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example direct URL
        backgroundImg: "https://i.easil.com/wp-content/uploads/20190717140843/diagonal_stripe_business_card_custom-800x200.jpg",
        openToWork: false,
        verified: false,
        mutualConnections: 20,
    },
];

// Dummy Data for Notifications
export const dummyNotifications = [
  {
    id: 1,
    type: 'like',
    actorName: 'Amarnath',
    actorAvatar: 'https://images.unsplash.com/photo-153571387500-fd4d0cd655ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'Amarnath liked your post: "Excited to announce..."',
    time: '2h ago',
    isRead: false,
    actionLink: '/feed/post/123',
  },
  {
    id: 2,
    type: 'comment',
    actorName: 'Nani',
    actorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'Nani commented on your post: "Great insights!"',
    time: '3h ago',
    isRead: false,
    actionLink: '/feed/post/123#comment',
  },
  {
    id: 3,
    type: 'connection',
    actorName: 'Siraj',
    actorAvatar: 'https://images.unsplash.com/photo-1507003211169-e695f2665a3d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'Siraj sent you a connection request.',
    time: '5h ago',
    isRead: false,
    actionLink: '/mynetwork/invitations',
  },
  {
    id: 4,
    type: 'profile_view',
    actorName: 'A viewer', // LinkedIn often hides names for profile views unless premium
    actorAvatar: 'https://via.placeholder.com/150/EEEEEE/888888?text=Anon',
    content: 'Someone viewed your profile.',
    time: '1d ago',
    isRead: true,
    actionLink: '/me/views',
  },
  {
    id: 5,
    type: 'job_update',
    actorName: 'LinkedIn Jobs',
    actorAvatar: 'https://static-00.linkedin.com/scds/common/u/img/linkedin_logo_dark_80x80.png', // Placeholder
    content: 'Your application for Senior Software Engineer at TechCorp has been viewed.',
    time: '2d ago',
    isRead: true,
    actionLink: '/jobs/applications',
  },
  {
    id: 6,
    type: 'celebration',
    actorName: 'Friends & Colleagues',
    actorAvatar: 'https://images.unsplash.com/photo-1520333769362-b13c61d56350?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'It\'s Sarah Connor\'s work anniversary!',
    time: '3d ago',
    isRead: true,
    actionLink: '/feed/celebrations',
  },
  {
    id: 7,
    type: 'like',
    actorName: 'Rahul',
    actorAvatar: 'https://images.unsplash.com/photo-1546961342-ea58156641ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    content: 'Rahul reacted to your comment on a post.',
    time: '1 week ago',
    isRead: true,
    actionLink: '/feed/post/456#comment',
  },
  {
    id: 8,
    type: 'event',
    actorName: 'Company Page',
    actorAvatar: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Company',
    content: 'New updates from "Innovate Solutions" page you follow.',
    time: '1 week ago',
    isRead: true,
    actionLink: '/company/innovate-solutions',
  },
   {
    id: 9,
    type: 'profile_view',
    actorName: 'A viewer', // LinkedIn often hides names for profile views unless premium
    actorAvatar: 'https://via.placeholder.com/150/EEEEEE/888888?text=Anon',
    content: 'Someone viewed your profile.',
    time: '1d ago',
    isRead: true,
    actionLink: '/me/views',
  },
   {
    id: 10,
    type: 'profile_view',
    actorName: 'A viewer', // LinkedIn often hides names for profile views unless premium
    actorAvatar: 'https://via.placeholder.com/150/EEEEEE/888888?text=Anon',
    content: 'Someone viewed your profile.',
    time: '1d ago',
    isRead: true,
    actionLink: '/me/views',
  }
];

// Dummy Data (replace with your actual props/state management)
export const dummyProfileData = {
  name: "Prabhas Mannava",
  headline: "Full Stack Developer | React.js | Material UI Enthusiast", 
  location: "Ponnur, Andhra Pradesh, India",
  connections: 500,
  views: 120,
  searchAppearances: 17,
  postImpressions: 230,
  about: "Passionate about crafting intuitive and responsive web interfaces. Eager to learn and contribute to real-world projects. Seeking to grow in a fast-paced, learning-first environment.",
  experience: [
    { id: 1, title: "Front-End Development Intern", company: "Gigaversity", years: "Jul 2025 - Present", description: "Working on building responsive web interfaces." },
    { id: 2, title: "Student Developer", company: "My University", years: "Sept 2022 - May 2025", description: "Developed various projects using React and Node.js." },
  ],
  education: [
    { id: 1, degree: "Bachelor of Technology", field: "Electronics & Communication", university: "RGUKT Nuzvid", years: "2022 - 2026" },
    { id: 1, degree: "Pre University Course", field: "MPC", university: "RGUKT Nuzvid", years: "2020 - 2022" }
  ],
  recentActivities: [
    { id: 1, text: "React Hooks explained in 5 minutes.", type: "post" },
    { id: 2, text: "Connected with Rahul.", type: "connection" },
    { id: 3, text: "Liked Accenture Post.", type: "like" },
  ],
  skills: ["React.js", "Material UI", "JavaScript", "HTML", "CSS", "Git", "MongoDB"],
  peopleYouMayKnow: [
    { id: 1, name: "Alice Wonderland", headline: "Software Engineer", avatar: "https://placehold.co/40x40/ADD8E6/000000?text=AW" },
    { id: 2, name: "Bob The Builder", headline: "Project Manager", avatar: "https://placehold.co/40x40/90EE90/000000?text=BB" },
    { id: 3, name: "Charlie Chaplin", headline: "UI/UX Designer", avatar: "https://placehold.co/40x40/FFB6C1/000000?text=CC" },
  ],
  recommendedCourses: [
    { id: 1, title: "Mastering React Hooks", provider: "LinkedIn Learning" },
    { id: 2, title: "Advanced CSS Grid Layouts", provider: "Udemy" },
    { id: 3, title: "Full-Stack Development with MERN", provider: "Coursera" },
  ],
};



export const recentConversations = [
  {
    id: 1,
    name: "ChatGPT",
    lastMessage: "Looking forward to your project!",
    time: "2h ago",
    avatar: "https://placehold.co/40x40/FFD700/000000?text=AI"
  },
  {
    id: 2,
    name: "Samantha Lee",
    lastMessage: "Did you review the PR?",
    time: "Yesterday",
    avatar: "https://placehold.co/40x40/ADD8E6/000000?text=SL"
  },
  {
    id: 3,
    name: "Alex Johnson",
    lastMessage: "Okay, sounds good!",
    time: "Mon",
    avatar: "https://placehold.co/40x40/FFB6C1/000000?text=AJ"
  },
  {
    id: 4,
    name: "Michael Chen",
    lastMessage: "Let's connect soon.",
    time: "Last Week",
    avatar: "https://placehold.co/40x40/A9A9A9/FFFFFF?text=MC"
  }
];

// ... (rest of your dummyData.js content, if any) ...