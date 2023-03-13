import React from 'react'
import { BsGit, BsGithub } from 'react-icons/bs'
import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaReact } from 'react-icons/fa'
import {
  SiFirebase,
  SiJavascript,
  SiJest,
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
          {
            "I'm a recent graduate with a MS Mathematics, based in western Washington, who is interested in breaking into the software industry. Although my degree is in mathematics, I took various computer science courses throughout my education and have been continually interested in programming since I was introduced to it."
          }
        </p>
        <p className="p break-after">
          {
            "Since graduating, I've been self-studying how to build websites. My focus so far has been on the front-end but, now that I've finished this website, I plan to learn much more about the back-end. Accordingly, I've been writing primarily Javascript recently, but I tend to lean toward Python for smaller personal projects when I can."
          }
        </p>
        <p className="p break-after">
          {
            "When I'm not programming, I'm probably cooking, reading ancient Greek retellings, or playing competitive Smash Bros."
          }
        </p>
        <h1 className="main-content--header no-margin">Technologies</h1>
        <div className="main-content--note">
          Technologies I am currently comfortable with have{' '}
          <strong className="orangered-text">orange</strong> icons.{' '}
        </div>
        <div className="main-content--note">
          {' '}
          Technologies I have used previously but not for a considerable amount
          of time are in <strong className="gray-text">gray</strong>.
        </div>
        <div className="spacer-20px" />
        <p className="p">
          <strong className="bold">Languages: </strong> HTML{' '}
          <OrangeIcon Icon={FaHtml5} />
          , CSS <OrangeIcon Icon={FaCss3Alt} />, Javascript{' '}
          <OrangeIcon Icon={SiJavascript} />, Python{' '}
          <OrangeIcon Icon={FaPython} />,{' '}
          <span className="gray-text">
            Java <GrayIcon Icon={FaJava} />, Mathematica{' '}
            <GrayIcon Icon={SiWolframmathematica} />, LaTeX{' '}
            <img
              className="inline-icon gray-icon"
              src={LaTeXIcon}
              alt="LaTeX icon"
            />
          </span>
        </p>
        <p className="p">
          <strong className="bold">Frameworks/Libraries:</strong> React.js{' '}
          <OrangeIcon Icon={FaReact} />, Jest <OrangeIcon Icon={SiJest} />,
          Firebase Firestore <OrangeIcon Icon={SiFirebase} />
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
