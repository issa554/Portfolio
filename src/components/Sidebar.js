import React,{useState} from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({isOpen , togglebtn}) => {

  return <aside className={`sidebar ${isOpen && 'show-sidebar'}`} >
<button
onClick={togglebtn}
className="close-btn">
 <FaTimes />
</button>
<div className="side-contanier">
  <Links  styleClass={` ${isOpen && 'sidebar-links'}`} />
  <SocialLinks styleClass={` ${isOpen && 'sidebar-icons'}`} />
</div>
  </aside>
}

export default Sidebar
