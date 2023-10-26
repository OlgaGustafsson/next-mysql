/* eslint-disable @next/next/no-img-element */
'use client'


export default function Home() {

  return (
    <div className="flex flex-col p-10 font-light font-sans">
     
      <div className="py-11">
        <h3 className="text-4xl pt-5 text-yellow-600 font-light flex 
        justify-center content-center tracking-wide">Välkommen till</h3>
        <h2 className="text-5xl pt-5 text-yellow-600 font-light flex 
        justify-center content-center tracking-wide">DOC.create!</h2>

        <div className="pt-16 max-h-screen max-w-xl text-gray-400 
        flex justify-center content-center">

          <h3 className="text-2xl text-center tracking-wide">
          &quot; DOC.create är ditt omfattande dokumenthanteringssystem 
          som förenklar och effektiviserar dokumenthanteringsprocessen. 
          Skapa, redigera och hantera dokument enkelt och smidigt. &quot;
          </h3>
        
        </div>
      </div>

      <div className="flex justify-center pt-16">
      <img className="w-52 h-52 rounded"
          src="https://cdn.pixabay.com/photo/2013/07/12/16/31/ring-binder-151051_1280.png"
          alt="docoments" />
      </div>

    </div>
  );
}