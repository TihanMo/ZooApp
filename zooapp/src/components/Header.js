import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../App.css';
import bild from '../sys_bilder/menu_strich.png';
import logo from '../logos/png/logo-black.png';
import Impressum from './Impressum';

function openNav() {
  document.getElementById("menu_inhalt").style.width = "25%";
}

function closeNav() {
  document.getElementById("menu_inhalt").style.width = "0";
}

export default function Header() {
  return (
    <div className='header_top'>
      <div className='header_inhalt' id='menu_logo' onClick={openNav}>
        <img src={bild} alt="Menü Logo" className='menu_strich' />
      </div>
      <div id="menu_inhalt" class="m_inhalt">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="impressum" element={<Impressum />} />
            </Route>
          </Routes>
        </BrowserRouter>
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
