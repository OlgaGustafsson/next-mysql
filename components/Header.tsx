import Link from '@/node_modules/next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 flex flex-wrap items-center 
    justify-around h-24 bg-darkgray text-teal-900">
        <Link href="/">
          <div className="flex flex-wrap justify-center">
            <h1 className="text-4xl">DOC.create</h1>
          </div>
        </Link>

        <div className="flex flex-wrap justify-center">
       
        <nav>
            <ul className="list-none flex gap-2">

                <li>
                  <Link href="/">Hem</Link>
                </li> 

                <li>
                <Link href="/documents">Dokument</Link>
                </li>

                <li>
                    <Link href="/create">Skapa nytt</Link>
                </li>
              
            </ul>
        </nav>

        </div>
    </header>
  )
}