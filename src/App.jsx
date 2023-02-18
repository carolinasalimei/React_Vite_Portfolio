import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'
import { Teams } from './Components/Teams/Teams'
import { About } from './Components/About/About'
import { Servicios } from './Components/Servicios/Servicios'
import { Feedback } from './Components/Feedback/Feedback'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'









function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Teams/>
      <About/>
      <Servicios/>
      <Feedback/>
      <Contact/>
      <Footer/>
   
      
       
    </div>
  )
}

export default App
