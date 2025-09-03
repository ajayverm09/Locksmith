import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import BlogDetails from './Pages/Single-Blog'
import ScrollToTop from './Components/ScrollToTop'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path="/blog/:id" element={<BlogDetails/>} />

        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
