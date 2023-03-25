import React from 'react';
import '../App.css';
import bild from '../sys_bilder/menu_strich.png';
import logo from '../logos/png/logo-black.png';

export default function Header() {
  return (
    <div className='header_top'>
      <div className='header_inhalt' id='menu_logo'>
        <img src={bild} alt="Menü Logo" className='menu_strich' />
      </div>
      <div className='header_inhalt' id='logo'>
        <img src={logo} alt='Logo' id='logo_inhalt'/>
      </div>
      <div className='header_inhalt' id='btn_anmelden'>
        <button className='anmelden'>Anmelden</button>
      </div>
    </div>
  )
}
