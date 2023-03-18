import React from 'react';
import '../App.css';
import bild from '../sys_bilder/menu_strich.png';

export default function Header() {
  return (
    <div>
      <img src={bild} alt="SVG as an image" className='menu_strich'></img>
      <div className='trenn_strich'></div>
    </div>
  )
}
