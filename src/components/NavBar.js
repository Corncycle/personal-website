import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({ pages, currPage }) {
  return (
    <div className="nav-bar--container flex align-center">
      <span className="nav-bar--header flex center">
        <Link to="/" className="nav-bar--header--link">
          Caleb
        </Link>
      </span>
      <ul className="nav-bar--items--container flex">
        {Object.entries(pages).map(([name, route], i) => {
          return (
            <Link key={i} to={route} className="nav-bar--items--link">
              <li
                className={
                  'nav-bar--items--item' +
                  (name === currPage ? ' active-page' : '')
                }
              >
                {name}
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
