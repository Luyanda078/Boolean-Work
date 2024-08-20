import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import Nopage from './components/nopage'
import Traffic from './components/traffic'
import Exercisez from './components/exercisez'
import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="./home" element={<Home />} />
          <Route path="./traffic" element={<Traffic />} />
          <Route path="./exercisez" element={< Exercisez/>} />
          <Route path="./nopage" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
