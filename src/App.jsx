import { useState } from 'react'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'


function App() {

  return (
    <>
      <div>
        <NavBar />
        <Home />
        <Projects />
      </div>
    </>
  )
}

export default App
