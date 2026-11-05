import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Footer } from './Components/Footer'
import Workshops from './Components/Workshops'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import ServicesPage from './pages/services'
import HomePage from './pages/home'
import NotFoundPage from './pages/notFound'
import Member from './pages/Member'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/services' element={<ServicesPage/>} />
          <Route path='/contact' element={<contactPage/>} />
          <Route path='*' element={<NotFoundPage/>}/>
          <Route path='/member' element={<Member/>}/>
        </Routes>

      </main>
    </BrowserRouter>

  )
}

export default App

