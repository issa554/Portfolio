import React from "react"
import logo from "../assets/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import {Link} from 'gatsby'
const Navbar = ({togglebtn}) => {
  return <nav className="navbar">
    <div className="nav-center">
    <div className="nav-header">
      <Link href="/"> 
    <img src={logo} alt="logo" className="logo" />
      </Link>
  <button
  onClick={togglebtn}
  type="button" className="toggle-btn">
    <FaAlignRight></FaAlignRight>
    </button> 
    </div>
    <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
}

export default Navbar

