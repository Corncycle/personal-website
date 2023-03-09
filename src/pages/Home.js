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
            "I'm a recent graduate with a MS Mathematics, based in western Washington, who is interested in breaking into the software industry. Although my degree is in mathematics, I took various computer science courses throughout my education and have been continually interested in programming since I was first introduced to it."
          }
        </p>
        <p className="p break-after">
          {
            "Since graduating, I've been self-studying how to build websites. Accordingly, I've been writing primarily Javascript recently, but I tend to lean towards Python for smaller personal projects if I can."
          }
        </p>
        <p className="p break-after">
          {
            'Some of my recreational interests include cooking, reading ancient Greek retellings, and competitive Smash Bros.'
          }
        </p>
        <h1 className="main-content--header no-margin">Technologies</h1>
        <div className="main-content--note">
          Technologies I am currently comfortable with have{' '}
          <strong className="orangered-text">orange</strong> icons.{' '}
        </div>
        <div className="main-content--note">
          {' '}
          Technologies I have previously worked with but haven&apos;t used in a
          while are in <strong className="gray-text">gray</strong>.
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
            <img className="inline-icon gray-icon" src={LaTeXIcon} />
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
