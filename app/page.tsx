'use client'

// import { useEffect, useState } from 'react';
// import Link from '@/node_modules/next/link';
// import { useRouter } from '@/node_modules/next/navigation';
// import { Post } from '@/interface';


export default function Home() {

  return (
    <div className="flex flex-col p-10 font-light font-sans">
     
      <div className="py-11">
        <h3 className="text-4xl pt-5 text-yellow-600 font-light flex 
        justify-center content-center ">Välkommen till</h3>
        <h2 className="text-5xl pt-5 text-yellow-600 font-light flex 
        justify-center content-center ">DOC.create!</h2>

        <div className="pt-12 max-h-screen max-w-xl text-gray-400">

          <h3 className="text-xl text-center">
          DOC.create är ditt omfattande dokumenthanteringssystem 
          som förenklar och effektiviserar dokumenthanteringsprocessen. 
          </h3>
          <h3 className="text-xl text-center">
          Skapa, redigera och hantera dokument enkelt och smidigt.
          </h3>
        
        </div>
      </div>

    </div>
  );
}