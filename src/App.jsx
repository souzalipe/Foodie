import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Testimonial from './Components/Testimonial/Testimonial'

function App() {

  return (
    <div className='App'>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
