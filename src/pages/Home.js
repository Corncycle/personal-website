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
  SiKibana,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
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
          I'm a full stack software developer with an MS Mathematics based in
          Western Washington currently looking for work. At my most recent web
          development job I primarily worked on a Java backend and React
          frontend with Typescript.
        </p>
        <p className="p break-after">
          Although my industry experience is in web development, I'm also
          interested in graphics programming and game development. I've been
          exploring graphics programming with{' '}
          <a className="project-card--link" href="https://threejs.org/">
            three.js
          </a>{' '}
          and OpenGL, and am continuing learning more about the field on my own
          as I look for jobs.
        </p>
        <p className="p break-after">
          When I'm not programming, I'm probably playing competitive fighting
          games or reading.
        </p>
        <h1 className="main-content--header">Technologies</h1>
        <p className="p">
          <strong className="bold">Languages: </strong>
          Typescript <OrangeIcon Icon={SiTypescript} />, Javascript{' '}
          <OrangeIcon Icon={SiJavascript} />, Java <OrangeIcon Icon={FaJava} />,
          PostgreSQL <OrangeIcon Icon={SiPostgresql} />, Python{' '}
          <OrangeIcon Icon={FaPython} />, HTML <OrangeIcon Icon={FaHtml5} />,
          CSS <OrangeIcon Icon={FaCss3Alt} />
        </p>
        <p className="p">
          <strong className="bold">Frameworks/Libraries: </strong>
          React.js <OrangeIcon Icon={FaReact} />, Jest{' '}
          <OrangeIcon Icon={SiJest} />, Express <OrangeIcon Icon={SiExpress} />,
          three.js <OrangeIcon Icon={SiThreedotjs} />, Tailwind{' '}
          <OrangeIcon Icon={SiTailwindcss} />
        </p>
        <p className="p">
          <strong className="bold">Miscellaneous: </strong>
          Git <OrangeIcon Icon={BsGit} />, Github <OrangeIcon Icon={BsGithub} />
          , webpack <OrangeIcon Icon={SiWebpack} />, Kibana{' '}
          <OrangeIcon Icon={SiKibana} />
        </p>
      </div>
    </div>
  )
}
