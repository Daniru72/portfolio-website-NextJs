/**
 * GET /api/portfolio
 *
 * Returns structured portfolio data (projects, services, skills, experience,
 * credentials, and stats) as JSON.  This endpoint makes it easy to extract
 * all the details you need when uploading your work to Behance or any other
 * portfolio platform.
 */

const portfolioData = {
  owner: {
    name: 'Daniru',
    title: 'Full Stack Developer & UI/UX Designer',
    bio: 'I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. My expertise lies in both front-end and back-end development, allowing me to build complete solutions that deliver exceptional user experiences.',
    yearsOfExperience: 10,
    satisfiedClients: 250,
    finishedProjects: 650,
    winningAwards: 8,
  },

  projects: [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce web application with product management, cart functionality, and payment integration built with Next.js and Node.js.',
      category: 'Web Development',
      tools: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      thumbnail: '/thumb1.jpg',
      link: '/',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, animated personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion to showcase projects and skills.',
      category: 'UI/UX Design & Development',
      tools: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      thumbnail: '/thumb2.jpg',
      link: '/',
    },
    {
      title: 'Dashboard UI',
      description:
        'An analytics dashboard with interactive charts, real-time data visualization, and responsive design for business intelligence insights.',
      category: 'UI/UX Design',
      tools: ['React', 'Chart.js', 'Figma', 'Tailwind CSS'],
      thumbnail: '/thumb3.jpg',
      link: '/',
    },
    {
      title: 'Mobile Banking App',
      description:
        'A clean and intuitive mobile banking app UI/UX design featuring account management, transactions, and budgeting tools.',
      category: 'UI/UX Design',
      tools: ['Figma', 'Adobe XD', 'Photoshop'],
      thumbnail: '/thumb4.jpg',
      link: '/',
    },
    {
      title: 'Brand Identity System',
      description:
        'A comprehensive brand identity design including logo, typography, color palette, and style guide for a technology startup.',
      category: 'Branding',
      tools: ['Illustrator', 'Photoshop', 'Figma'],
      thumbnail: '/thumb3.jpg',
      link: '/',
    },
    {
      title: 'Restaurant Booking Platform',
      description:
        'A restaurant reservation and ordering platform with real-time table availability, menu management, and SMS notifications.',
      category: 'Web Development',
      tools: ['React', 'Express', 'PostgreSQL', 'Twilio'],
      thumbnail: '/thumb1.jpg',
      link: '/',
    },
    {
      title: 'SaaS Landing Page',
      description:
        'A high-converting SaaS product landing page with engaging animations, clear value propositions, and optimized call-to-action sections.',
      category: 'UI/UX Design & Development',
      tools: ['Next.js', 'Framer Motion', 'Figma'],
      thumbnail: '/thumb2.jpg',
      link: '/',
    },
    {
      title: 'Social Media App',
      description:
        'A full-featured social networking application with real-time messaging, post feeds, notifications, and user profile management.',
      category: 'Web Development',
      tools: ['React', 'Firebase', 'Node.js', 'Socket.io'],
      thumbnail: '/thumb3.jpg',
      link: '/',
    },
  ],

  services: [
    {
      title: 'Branding',
      description:
        'Crafting memorable brand identities — logos, color systems, typography, and style guides that communicate your vision and build lasting recognition.',
    },
    {
      title: 'Design',
      description:
        'Creating visually compelling UI/UX designs with Figma, Adobe XD, and Photoshop — from wireframes and prototypes to pixel-perfect final assets.',
    },
    {
      title: 'Development',
      description:
        'Building fast, responsive, and scalable web applications using React, Next.js, Node.js, and modern full-stack technologies tailored to your goals.',
    },
    {
      title: 'Copywriting',
      description:
        'Writing clear, persuasive, and SEO-friendly copy for websites, landing pages, and marketing materials that engage your audience and drive conversions.',
    },
    {
      title: 'SEO',
      description:
        'Boosting your online visibility through technical SEO, on-page optimization, performance tuning, and content strategy to drive organic traffic growth.',
    },
  ],

  skills: {
    webDevelopment: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Framer Motion', 'WordPress'],
    uiUxDesign: ['Figma', 'Adobe XD', 'Adobe Photoshop'],
  },

  experience: [
    { title: 'UX/UI Designer - XYZ Company', stage: '2012 - 2023' },
    { title: 'Web Developer - ABC Agency', stage: '2010 - 2012' },
    { title: 'Intern - DEF Corporation', stage: '2008 - 2010' },
  ],

  credentials: [
    { title: 'Web Development - ABC University, LA, CA', stage: '2011' },
    { title: 'Computer Science Diploma - AV Technical Institute', stage: '2009' },
    { title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA', stage: '2006' },
  ],

  awards: [
    { title: 'Webby Awards - Honoree', stage: '2011 - 2012' },
    { title: 'Adobe Design Achievement Awards - Finalist', stage: '2009 - 2010' },
  ],
};

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  res.status(200).json(portfolioData);
}
