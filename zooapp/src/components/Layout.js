import React from 'react'
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <Outlet />
      </div>
    )
  }