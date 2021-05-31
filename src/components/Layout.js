import React,{useState} from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen , setIsOpen] =useState(false)
  const togglebtn = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <Navbar togglebtn={togglebtn} />
     <Sidebar isOpen={isOpen} togglebtn={togglebtn} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
