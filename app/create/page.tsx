// export default function Create() {
//     return(
//         <div>
//             <h2>Skapa</h2>
//         </div>
//     );
// }


'use client'

import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
        alert("Både titel och innehåll måste fyllas i.");
        return;
      }

    try {
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await response.json();
      console.log("New post added:", data);

      setTitle("");
      setContent("");


    } catch (error) {
      console.error("Error adding new post:", error);
    }
  };

  return (
    <div className="flex flex-col p-10 font-light font-sans">
      <h2 className="text-3xl p-5 text-yellow-600 flex 
                    justify-center content-center">Skapa dokument</h2>

      <form onSubmit={handleSubmit}>
        <div className="pb-6">
          {/* <label className="text-white">Titel:</label><br></br> */}
          <input className="p-8 bg-gray-300 text-gray-800 rounded-md "
            type="text"
            placeholder="Titel" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="pb-8">
          {/* <label className="text-white">Innehåll:</label><br></br> */}
          <textarea className="p-8 bg-gray-300 rounded-md "
            placeholder="Innehåll"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit"
            className="w-28 h-11 pt-2.5 border flex justify-center content-center  
            border-solid shadow bg-teal-900 text-white
            border-white rounded-3xl">Spara</button>
      </form>
    </div>
  );
};

export default Create;