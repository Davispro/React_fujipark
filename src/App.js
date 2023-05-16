import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Fujipark from './pages/Fujipark'
import Scenery from './pages/Scenery'
import './stylesheets/all.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Fujipark />} />
          <Route path="/scenery" element={<Scenery />} />
          <Route path="/new" />
        </Routes>
      </Router>
    </>
  )
}

export default App
