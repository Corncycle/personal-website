import React from 'react'
import { BsGit, BsGithub } from 'react-icons/bs'
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiTailwindcss,
  SiWebpack,
  SiWolframmathematica,
} from 'react-icons/si'
import { GrayIcon, OrangeIcon } from '../components/CustomIcon'
import LaTeXIcon from '../images/LaTeX.svg'

export default function Home() {
  return (
    <div className="body--container">
      <div className="main-content--container">
        <h1 className="main-content--header">About Me</h1>
        <p className="main-content--unique-title">
          <span className="dimgray-text">{"Hello, I'm"}</span>
          <span className="orangered-text">{' Caleb Stromberg'}</span>
        </p>
        <p className="p break-after">
          I'm a software engineer with an MS Mathematics based in Western
          Washington. I'm currently employed by{' '}
          <a className="project-card--link" href="https://hyperproof.io/">
            Hyperproof
          </a>
          , where I do integrations work in Typescript.
        </p>
        <p className="p break-after">
          Although I got into the software industry in 2023 through web
          development (and it's what I have the most experience with), I'm also
          interested in graphics programming and game development. I've recently
          been exploring and tinkering with{' '}
          <a className="project-card--link" href="https://threejs.org/">
            Three.js
          </a>{' '}
          and{' '}
          <a
            className="project-card--link"
            href="https://pmndrs.github.io/cannon-es/"
          >
            cannon-es
          </a>{' '}
          in Typescript, but I plan to delve into lower level graphics
          programming when I wrap up my current project.
        </p>
        <p className="p break-after">
          When I'm not programming, I'm probably cooking, reading ancient Greek
          retellings, or playing competitive Smash Bros.
        </p>
        <h1 className="main-content--header no-margin">Technologies</h1>
        <p className="p">
          <strong className="bold">Languages: </strong> HTML{' '}
          <OrangeIcon Icon={FaHtml5} />
          , CSS <OrangeIcon Icon={FaCss3Alt} />, Javascript{' '}
          <OrangeIcon Icon={SiJavascript} />, Node.js{' '}
          <OrangeIcon Icon={FaNodeJs} />, Python <OrangeIcon Icon={FaPython} />,{' '}
          <span>
            Java <OrangeIcon Icon={FaJava} />, LaTeX{' '}
            <img
              className="inline-icon orangered-icon"
              src={LaTeXIcon}
              alt="LaTeX icon"
            />
          </span>
        </p>
        <p className="p">
          <strong className="bold">Frameworks/Libraries:</strong> React.js{' '}
          <OrangeIcon Icon={FaReact} />, Express <OrangeIcon Icon={SiExpress} />
          , MongoDB <OrangeIcon Icon={SiMongodb} />, TailwindCSS{' '}
          <OrangeIcon Icon={SiTailwindcss} />
          , Jest <OrangeIcon Icon={SiJest} />
        </p>
        <p className="p">
          <strong className="bold">Miscellaneous:</strong> Git{' '}
          <OrangeIcon Icon={BsGit} />, Github <OrangeIcon Icon={BsGithub} />,
          webpack <OrangeIcon Icon={SiWebpack} />
        </p>
      </div>
    </div>
  )
}
