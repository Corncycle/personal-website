import React from 'react'

export default function Contact() {
  return (
    <div className="body--container">
      <div className="main-content--container">
        <h1 className="main-content--header">Contact me</h1>
        <p className="p">
          The best way to reach me is by email:{' '}
          <a
            className="project-card--link"
            href="mailto:calebstromberg@gmail.com"
          >
            calebstromberg@gmail.com
          </a>
          .
        </p>
        <p className="p">
          I also try to keep an eye on{' '}
          <a
            className="project-card--link"
            href="https://www.linkedin.com/in/caleb-stromberg/"
          >
            my LinkedIn page
          </a>
          .
        </p>
      </div>
    </div>
  )
}
