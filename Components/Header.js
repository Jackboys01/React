import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <header className="bg-black text-white py-4 overflow-hidden">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-semibold pl-1">
        <img  className="bg-white py-1 px-1 rounded" src="/Images/brand_logo.png" alt="logo" />
      </div>
      <nav className="flex space-x-8 items-center"> {/* Center-align links vertically */}
        <Link href="/Menu">Menu</Link>
        <Link href="/Location">Location</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded  py-2 px-4" >
      <Link href="/Login" >Login</Link>
      </button>
    </div>
  </header>

  )
}

export default Header