import React from 'react';
import '../App.css';
import bild from '../sys_bilder/menu_strich.png';

export default function Header() {
  return (
    <div className='header_top'>
      <img src={bild} alt="Menü Logo" className='menu_strich header_inhalt'></img>
      <button className='header_inhalt'>Anmelden</button>
      <div className='trenn_strich'></div>
    </div>
  )
}
