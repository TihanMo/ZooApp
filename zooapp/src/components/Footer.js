import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='header_inhalt' id='menu_logo'>
        <Link to="impressum">Impressum</Link>
      </div>
      <div className='header_inhalt' id='logo'>
        <Link to="/">ZooZApp</Link>
      </div>
      <div className='header_inhalt' id='btn_anmelden'>
        <Link to="/">Hilfe</Link>
      </div>
    </div>
  )
}
