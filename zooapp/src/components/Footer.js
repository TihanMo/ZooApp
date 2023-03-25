import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer_inhalt' id='menu_logo'>
        <Link to="impressum">Impressum</Link>
      </div>
      <div className='footer_inhalt' id='logo_text'>
        <Link to="/">ZooZApp</Link>
      </div>
      <div className='footer_inhalt' id='hilfe'>
        <Link to="/hilfe">Hilfe</Link>
      </div>
    </div>
  )
}
