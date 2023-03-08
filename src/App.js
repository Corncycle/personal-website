import React from 'react'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <div>{"Welcome to Caleb's website!"}</div>
      <Routes>
        <Route
          path="/"
          element={<div>{'You are currently on the main page'}</div>}
        />
        <Route
          path="/about"
          element={<div>{'You are currently on the about page'}</div>}
        />
      </Routes>
    </div>
  )
}
