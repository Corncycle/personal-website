import findTheFighterImg from '../../images/project-images/find-the-fighter.png'
import smashMemoryImg from '../../images/project-images/smash-memory.png'
import personalWebsiteImg from '../../images/project-images/personal-website.png'
import coquestImage from '../../images/project-images/coquest.png'
import theoremSheetImage from '../../images/project-images/theorem-sheet.png'

const projectData = [
  {
    img: findTheFighterImg,
    name: 'Find The Fighter',
    description:
      'An image searching game bootstrapped by <span class="monospace">create-react-app</span>. High scores are stored and retrieved from a Firestore database to be compared online.',
    demoLink: 'https://corncycle.github.io/find-the-fighter/',
    sourceLink: 'https://github.com/Corncycle/find-the-fighter',
  },
  {
    img: personalWebsiteImg,
    name: 'Personal Website',
    description:
      'The site you are currently on! This site was made in React and packaged with webpack, with client-side routing from React Router. It has a responsive design and a collapsible nav bar for mobile.',
    demoLink: 'https://www.calebstromberg.com/',
    sourceLink: 'https://github.com/Corncycle/personal-website',
  },
  {
    img: coquestImage,
    name: 'Cohost Posts',
    description:
      'Cohost is a social media platform that allows users to create posts with HTML markup and inline CSS. However, many tags and styles are forbidden, including <span class="monospace">input</span>. Have you ever wondered what can be created using only the tags <span class="monospace">div</span>, <a class="project-card--link" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"><span class="monospace">summary</span> and <span class="monospace">details</span></a>, and inline CSS?',
    demoLink: 'https://cohost.org/Corncycle/post/362844-div-style-line-hei',
    sourceLink: 'https://github.com/Corncycle/chosts',
  },
  {
    img: smashMemoryImg,
    name: 'Smash Memory',
    description:
      'An in-browser game to test memory of previously selected Smash Bros. fighters. High scores are stored using the <span class="monospace">localStorage</span> API. Assets were scraped from smashbros.com using <span class="monospace">axios</span> in Node.js.',
    demoLink: 'https://corncycle.github.io/memory-game/',
    sourceLink: 'https://github.com/Corncycle/memory-game',
  },
  {
    img: theoremSheetImage,
    name: 'Elementary Sieve Methods',
    description:
      "For my Master's project, I studied a branch of number theory called sieve theory. Following <a class='project-card--link' href='https://books.google.com/books/about/An_Introduction_to_Sieve_Methods_and_The.html?id=1swo9Yf3d2YC'>Cojocaru & Murty's text</a>, I learned how to use Selberg's sieve to prove Brun's Theorem. The sheet of theorems I was expected to be able to prove is given below.",
    theoremSheetLink: '/theorem-sheet.pdf',
  },
]

export default projectData
