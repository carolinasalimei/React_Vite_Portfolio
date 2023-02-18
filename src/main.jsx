import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'
import { Teams } from './Components/Teams/Teams'
import { About } from './Components/About/About'
import { Servicios } from './Components/Servicios/Servicios'
import { Feedback } from './Components/Feedback/Feedback'
import { Contact } from './Components/Contact/Contact'
import { Footer } from './Components/Footer/Footer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Navbar/>
      <Home/>
      <Teams/>
      <About/>
      <Servicios/>
      <Feedback/>
      <Contact/>
      <Footer/>
  
    
  </React.StrictMode>,
)
