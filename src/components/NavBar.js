import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import menuButtonImg from '../images/menu.svg'

export default function NavBar({
  pages,
  currPage,
  navCollapsed,
  setNavCollapsed,
}) {
  useEffect(() => {
    const root = document.documentElement

    root.style.setProperty('--navbar-item-count', Object.keys(pages).length)
  }, [])

  return (
    <div className="nav-bar--container flex">
      <div className="nav-bar--top-level flex align-center">
        <span className="nav-bar--header flex center">
          <Link to="/" className="nav-bar--header--link">
            Caleb
          </Link>
        </span>
        <button
          className={
            'minimal nav-bar--button' + (navCollapsed ? ' nav-collapsed' : '')
          }
          onClick={() => {
            setNavCollapsed(!navCollapsed)
          }}
        >
          <img
            className="nav-bar--button--image"
            src={menuButtonImg}
            alt="Collapsible navigation button"
          />
        </button>
      </div>
      <ul
        className={
          'nav-bar--items--container flex' +
          (navCollapsed ? ' nav-collapsed' : '')
        }
      >
        {Object.entries(pages).map(([name, route], i) => {
          return name !== 'resume' ? (
            <li
              key={i}
              className={
                'nav-bar--items--item' +
                (name === currPage ? ' active-page' : '')
              }
            >
              <Link to={route} className="nav-bar--items--link">
                {name}
              </Link>
            </li>
          ) : (
            <li
              key={i}
              className={
                'nav-bar--items--item' +
                (name === currPage ? ' active-page' : '')
              }
            >
              <a
                href="/caleb-stromberg-resume.pdf"
                className="nav-bar--items--link"
              >
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
