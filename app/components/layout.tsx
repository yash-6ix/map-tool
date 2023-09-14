'use client'
import '../globals.css'
import React from 'react';
import Navbar from './navbar'
import Footer from './footer'


type LayoutProps = {
    children: React.ReactNode
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout