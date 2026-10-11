import portfolioPoster from './assets/portfolio-development.jpg'
import roboticsPoster from './assets/robotics-iot.png'
import designPoster from './assets/design-thinking.jpg'

export const events = [
  {
    id: 'portfolio',
    title: 'Portfolio Development & Deployment',
    shortTitle: 'Portfolio Development',
    category: 'WEB DEVELOPMENT',
    description: 'Learn to build, showcase and deploy a professional digital portfolio with practical HTML, CSS and deployment experience.',
    poster: portfolioPoster,
    accent: 'orange',
    status: 'Past event',
    tags: ['HTML & CSS', 'GitHub Pages', 'Portfolio'],
    highlights: ['Build your own portfolio website', 'Learn the basics of HTML & CSS', 'Deploy your work online', 'Showcase projects and achievements'],
  },
  {
    id: 'robotics',
    title: 'Build Sprint: Robotics & IoT',
    shortTitle: 'Robotics & IoT',
    category: 'ROBOTICS & IOT',
    description: 'A hands-on introduction to robotics, sensors, automation and connected devices through practical project building.',
    poster: roboticsPoster,
    accent: 'blue',
    status: 'Past event',
    tags: ['Arduino', 'Sensors', 'Automation'],
    highlights: ['Explore robotics and IoT', 'Build and test real-world projects', 'Practice coding and electronics', 'Learn through team collaboration'],
  },
  {
    id: 'design',
    title: 'Design Thinking Sprint',
    shortTitle: 'Design Thinking',
    category: 'INNOVATION',
    description: 'Help students transform real-world problems into thoughtful ideas, prototypes and practical solutions.',
    poster: designPoster,
    accent: 'purple',
    status: 'Past event',
    tags: ['Ideation', 'Prototyping', 'Problem Solving'],
    highlights: ['Identify real-world problems', 'Generate and refine ideas', 'Collaborate on prototypes', 'Present innovative solutions'],
  },
]
