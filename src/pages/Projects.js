import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projectData from './content-data/project-data'

export default function Projects() {
  return (
    <div className="body--container">
      <div className="main-content--container">
        <h1 className="main-content--header">Projects</h1>
        <div className="projects-array--container flex">
          {projectData.map((project, i) => {
            return <ProjectCard key={i} project={project} />
          })}
        </div>
      </div>
    </div>
  )
}
