import Link from '@/node_modules/next/link'
import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="sticky top-0 flex flex-wrap items-center 
    justify-around h-24 bg-teal-900 text-teal-900">
        <Link href="/">
          <div className="flex flex-wrap justify-center text-yellow-600">
            <h1 className="text-4xl">DOC.create</h1>
          </div>
        </Link>

        <div className="flex flex-wrap justify-center  text-gray-400">
          
          <Navbar />

        </div>
    </header>
  )
}