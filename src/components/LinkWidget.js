import React from 'react'

export default function LinkWidget({ imgSrc, alt, href }) {
  return (
    <a title={alt} href={href} className="link-widget--link">
      <img alt={alt} src={imgSrc} className="link-widget--image"></img>
    </a>
  )
}
