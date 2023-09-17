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
    <div className="min-h-screen items-center">
      <Navbar />
      <main className='mb-10 pt-8 px-4 md:pt-12 md:px-12'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout