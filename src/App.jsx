import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import Testimonial from './Components/Testimonial/Testimonial'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
      </Routes>
    </Router>
  )
}

export default App
