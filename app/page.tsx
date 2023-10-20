'use client'

import { useEffect, useState } from 'react';
import Link from '@/node_modules/next/link';
import { useRouter } from '@/node_modules/next/navigation';


interface Post {
  id: number
  title: string
  content: string
  createDate: Date
}

// const handlePostClick = (id: number ) => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const router = useRouter();
//   router.push(`/singlepage/${id}`);
// };

// const handleEdit = (id: number) => {
//   // redigering
//   console.log(`Redigera post med ID: ${id}`);
// };

// const handleDelete = (id: number) => {
//   // borttagning
//   console.log(`Ta bort post med ID: ${id}`);
// };


export default function Home() {


  const [posts, setPosts] = useState<Post[]>([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // update post

  const handleEdit = (id: number) => {
    const postToEdit = posts.find(post => post.id === id);
    console.log(postToEdit);
    if (postToEdit) {
      setSelectedPost(postToEdit);
      setEditedTitle(postToEdit.title);
      setEditedContent(postToEdit.content);
      setShowModal(true);
    }
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   setEditedTitle('');
  //   setEditedContent('');
  // };


  const updatePost = async () => {
    console.log("selectedPost", selectedPost);
    try {
      const response = await fetch(`http://localhost:3000/posts/${selectedPost.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: editedTitle, content: editedContent }),
      });
      const data = await response.json();
      console.log('Uppdaterade data:', data);
      setShowModal(false);
      getPosts();
    } catch (error) {
      console.error('Fel vid uppdatering av inlägg:', error);
    }
  };

  // dalete post

  const handleDelete = (id: number) => {
    // borttagning
    
    console.log(`Ta bort post med ID: ${id}`);
  };


  const formatDate = (date: string | number | Date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('sv-SE');
  };

  return (
    <div className="flex flex-col p-10 font-light font-sans">
     
      <div>
        <h2 className="text-3xl p-5 text-white flex 
        justify-center content-center ">2023</h2>
        <div className="overflow-y-auto max-h-screen w-80">
          {/* <ul className="w-auto">
            {posts.map((post, index) => (
              <li className="text-white p-2"
                key={index}>
                <Link href={"/singlepage"} onClick={() => handlePostClick(post.id)}>
                  <h3>{post.title} </h3>
                  <p>{post.content}</p>
                </Link>
              </li>
            ))}
          </ul> */}
        
            {posts.map((post, index) => (
              <article className="text-white p-2 mb-6"
                key={index}>
                {/* <Link href={"/singlepage"} onClick={() => handlePostClick(post.id)}> */}
                  <h2 className="text-2xl text-gray-200">{post.title} </h2>
                  <p className="text-gray-300">{post.content}</p>
                  <p className="text-gray-300">{formatDate(post.createDate)}</p>
                {/* </Link> */}

                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="bg-gray-300 text-teal-900 font-light mr-2 py-1 px-3 rounded-3xl"
                    >
                      Ta bort
                    </button>
                    <button
                      onClick={() => handleEdit(post.id)}
                      className="border border-solid shadow bg-teal-900 text-white font-light py-2 px-4 mr-2 rounded-3xl"
                    >
                      Redigera
                    </button>
                  </div>
              </article>
            ))}
        
        </div>
      </div>

      {showModal && selectedPost && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="border border-gray-400 p-2 mb-2 w-full rounded"
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="border border-gray-400 p-2 mb-4 w-full rounded"
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