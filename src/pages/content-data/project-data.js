import findTheFighterImg from '../../images/project-images/find-the-fighter.png'
import smashMemoryImg from '../../images/project-images/smash-memory.png'
import personalWebsiteImg from '../../images/project-images/personal-website.png'

const projectData = [
  {
    img: findTheFighterImg,
    name: 'Find The Fighter',
    description:
      'An image searching game bootstrapped by create-react-app. High scores are stored and retrieved from a Firebase Firestore database to be compared online.',
    demoLink: 'https://corncycle.github.io/find-the-fighter/',
    sourceLink: 'https://github.com/Corncycle/find-the-fighter',
  },
  {
    img: smashMemoryImg,
    name: 'Smash Memory',
    description:
      'A browser game to test memory of previously selected Smash Bros. fighters. High scores are stored locally using the localStorage api. Assets were scraped from smashbros.com using axios in Node.js',
    demoLink: 'https://corncycle.github.io/memory-game/',
    sourceLink: 'https://github.com/Corncycle/memory-game',
  },
  {
    img: personalWebsiteImg,
    name: 'Personal Website',
    description:
      'The site you are currently on! This site was made in React, with client-side routing from React Router. It also has responsive design with a collapsible nav bar for mobile.',
    demoLink: 'https://www.calebstromberg.com/',
    sourceLink: 'https://github.com/Corncycle/personal-website',
  },
]

export default projectData
