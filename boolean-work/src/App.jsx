
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import './App.css'
import Home from './components/home'
import Nopage from './components/nopage'
import Traffic from './components/traffic'
import Exercisez from './components/exercisez'
import Layout from './components/layout'
import OddOrEven from './components/evenOdd';
// import vitePluginRequire from "vite-plugin-require";


function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/traffic" element={<Traffic />} />
          <Route path="/exercisez" element={< Exercisez/>} />
          <Route path="/nopage" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
