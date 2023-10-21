'use client'
import { useEffect, useState } from 'react';
import { Post } from "@/interface";
import { useRouter } from '@/node_modules/next/navigation';

export default function Document( {params} : { params: {id: number, title: string, content: string, createDate: Date }}) {

    const router = useRouter();

    const [postData, setPostData] = useState<Post | null>(null);
    
    const [showModal, setShowModal] = useState(false);
    //const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');


    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/posts/${params.id}`);
                const data = await response.json();
                console.log("API Response Data:", data);

                // if (data[0].title && data[0].content) {
                //     console.log("Title:", data[0].title);
                //     console.log("Content:", data[0].content);
                // }
                setPostData(data);
            } catch (error) {
                console.error('Error fetching post data:', error);
            }
        };

        fetchPostData();
    }, [params.id]);
    

    console.log("postData:", postData);


    const formatDate = (date: string | number | Date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('sv-SE');
      };

        
      // UPDATE post

  const handleEdit = (id: number) => {

        setShowModal(true);

        if (postData) {
        setEditedTitle(postData[0].title);
        setEditedContent(postData[0].content);
        } 
    
  };

//   const updatePost = async () => {
//    //console.log("selectedPost", selectedPost);
//     try {
//       const response = await fetch(`http://localhost:3000/posts/${params.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title: editedTitle, content: editedContent }),
//       });
//       const data = await response.json();
//       console.log('Uppdaterade data:', data);
//       setShowModal(false);
//       setPostData({ ...postData, title: editedTitle, content: editedContent });
//     } catch (error) {
//       console.error('Fel vid uppdatering av inlägg:', error);
//     }
//   };

const updatePost = async () => {
    //console.log("selectedPost", selectedPost);
    try {
      const response = await fetch(`http://localhost:3000/posts/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: editedTitle, content: editedContent }),
      });
      const data = await response.json();
      console.log('Uppdaterade data:', data);
      setShowModal(false);
  
      // hämta den uppdaterade datan och uppdatera state
      const updatedResponse = await fetch(`http://localhost:3000/posts/${params.id}`);
      const updatedData = await updatedResponse.json();
      setPostData(updatedData);
    } catch (error) {
      console.error('Fel vid uppdatering av inlägg:', error);
    }
  };

  // DELETE post

  const handleDelete = (id: number) => {
    // borttagning
    deletePost(id);
    alert("Dokumentet är raderad")
    router.push('/documents')
    console.log(`Ta bort post med ID: ${id}`);
  };

  const deletePost = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log('Deleted data:', data);
      // uppdatera poster efter borttagning
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };


    return (
        <div className="flex flex-col rounded-lg 
            m-2 p-4 text-gray-200">

            {postData ? (
                <div className="flex flex-col p-10 font-light font-sans
                    overflow-y-auto max-h-screen w-80">
                    <h2>id: {params.id}</h2>
                    <h2 className="text-2xl text-yellow-600 pb-3">{postData[0].title}</h2>
                    <p className="text-gray-200 pb-3">{postData[0].content}</p>
                    <p className="text-gray-200">{formatDate(postData[0].createDate)}</p>
                </div>
            ) : (
                <p>Inga parametrar tillgängliga.</p>
            )}
            
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => handleDelete(params.id)}
                    className="bg-gray-300 text-teal-900 font-light mr-2 py-1 px-3 rounded-3xl"
                    >
                    Ta bort
                </button>
                <button
                    onClick={() => handleEdit(params.id)}
                    className="border border-solid shadow bg-teal-900 text-white font-light py-2 px-4 mr-2 rounded-3xl"
                >
                Redigera
                </button>
            </div>


            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                        <input
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className="text-gray-700 border border-gray-400 p-2 mb-2 w-full rounded"
                        />
                        <textarea
                            value={editedContent}
                            onChange={(e) => setEditedContent(e.target.value)}
                            className="text-gray-700 border border-gray-400 p-2 mb-4 w-full rounded"
                        />
                        <button
                            onClick={() => {
                                updatePost();
                                
                            }}
                            className="bg-teal-900 text-white font-light py-2 px-4 mr-2 rounded"
                        >
                        Spara ändringar
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-gray-300 text-teal-900 font-light py-2 px-4 rounded"
                            >
                            Stäng
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}