
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import './App.css'
import Home from './Pages/home'
import Nopage from './components/nopage'
import Traffic from './Pages/traffic'
import Exercisez from './Pages/exercisez'
import Layout from './components/layout'
import OddOrEven from './components/evenOdd';
import Movies from './Pages/myMovies';
import Contact from './Pages/contact';
import Object from './assets/movies'
import ViewMovie from './Pages/viewMovie';

// import vitePluginRequire from "vite-plugin-require";


function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="traffic" element={<Traffic />} />
          <Route path="exercisez" element={< Exercisez/>} />
          <Route path="myMovies" element={<Movies movie={Object}/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="nopage" element={<Nopage />} />
          <Route path="viewMovie/" element={<ViewMovie />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
