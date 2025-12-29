import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <div className="project-card--container flex-col align-center">
      <div className="project-card--image-wrapper">
        <img className="project-card--image" src={project.img} />
      </div>
      <div className="project-card--text-container flex-col">
        <h3 className="project-card--name">{project.name}</h3>
        <p
          className="project-card--description"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></p>
        <div className="project-card--links-container flex-col">
          {project.demoLink ? (
            <a className="project-card--link" href={project.demoLink}>
              Live
            </a>
          ) : null}
          {project.sourceLink ? (
            <a className="project-card--link" href={project.sourceLink}>
              Source
            </a>
          ) : null}
          {project.theoremSheetLink ? (
            <a className="project-card--link" href={project.theoremSheetLink}>
              Theorem Sheet
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
