import React from 'react'
import githubImg from '../images/widgets/github-white.png'
import linkedInImg from '../images/widgets/linkedin-white.png'
import mailImg from '../images/widgets/mail-white.png'
import LinkWidget from './LinkWidget'

export default function BottomBar() {
  const widgets = [
    {
      imgSrc: githubImg,
      alt: "Caleb's Github",
      href: 'https://github.com/Corncycle',
    },
    {
      imgSrc: linkedInImg,
      alt: "Caleb's LinkedIn",
      href: 'https://www.linkedin.com/in/caleb-stromberg/',
    },
    {
      imgSrc: mailImg,
      alt: "Caleb's Email",
      href: 'mailto:calebstromberg@gmail.com',
    },
  ]

  return (
    <div className="bottom-bar--container flex center">
      {widgets.map((widget, i) => {
        return (
          <LinkWidget
            key={i}
            imgSrc={widget.imgSrc}
            alt={widget.alt}
            href={widget.href}
          />
        )
      })}
    </div>
  )
}
