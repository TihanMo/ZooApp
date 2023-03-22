import React from 'react';
import '../App.css';
import bild from '../sys_bilder/menu_strich.png';
import logo from '../logos/png/logo-black.png';

export default function Header() {
  return (
    <div className='header_top'>
      <img src={bild} alt="Menü Logo" className='menu_strich header_inhalt'></img>
      <img src={logo} alt='Logo' className='header_inhalt menu_strich' id='logo'></img>
      <button className='header_inhalt'>Anmelden</button>
    </div>
  )
}
