import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import BottomBar from './components/BottomBar'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  const pages = {
    home: '/',
    projects: '/projects',
    contact: '/contact',
  }

  const [currPage, setCurrPage] = useState('home')

  const currLocation = useLocation()

  useEffect(() => {
    for (const page in pages) {
      if (pages[page] === currLocation.pathname) {
        setCurrPage(page)
      }
    }
  }, [currLocation])

  return (
    <div className="main--container flex-col">
      <NavBar pages={pages} currPage={currPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <hr className="horizontal-break" />
      <BottomBar />
    </div>
  )
}
