import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card--container flex-col align-center">
      <div className="project-card--image-wrapper">
        <img className="project-card--image" src={project.img} />
      </div>
      <div className="project-card--text-container flex-col">
        <h3 className="project-card--name">{project.name}</h3>
        <p className="project-card--description">{project.description}</p>
        <div className="project-card--links-container flex-col">
          <a className="project-card--link" href={project.demoLink}>
            Live Demo
          </a>
          <a className="project-card--link" href={project.sourceLink}>
            Source
          </a>
        </div>
      </div>
    </div>
  )
}
