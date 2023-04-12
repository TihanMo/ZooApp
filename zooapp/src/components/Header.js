import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../App.css';
import bild from '../sys_bilder/menu_strich.png';
import logo from '../logos/png/logo-black.png';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header_top'>
      <div className='header_inhalt' id='menu_logo'>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      </div>
      <div className='header_inhalt' id='logo'>
        <Link to="/">
          <img src={logo} alt='Logo' id='logo_inhalt'/>
        </Link>
      </div>
      <div className='header_inhalt' id='btn_anmelden'>
        <Link to="/login" className='anmelden_text'>
          <button className='anmelden'>
            Anmelden
          </button>
        </Link>
      </div>
    </div>
  )
}
