// export default function Struktur() {
//     return(
//         <div>
//             <h2>Dokument</h2>
//         </div>
//     );
// }



'use client'

import { useEffect, useState } from 'react';
import Link from '@/node_modules/next/link';
import { useRouter } from '@/node_modules/next/navigation';
import DocComponent from '@/components/DocComponent';
import { Post } from '@/interface';


export default function Home() {


  const [posts, setPosts] = useState<Post[]>([]);

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

//   const formatDate = (date: string | number | Date) => {
//     const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//     return new Date(date).toLocaleDateString('sv-SE');
//   };


  return (
    <div className="flex flex-col p-10 font-light font-sans">
     
      <div>
        <h2 className="text-3xl p-5 text-yellow-600 flex 
                    justify-center content-center ">Mina dokument</h2>
            <div className="overflow-y-auto max-h-screen w-80">
     
            {posts.map((post) => (
           
                <Link key={post.id} href={`/documents/${post.id}`}>
          
                    <DocComponent post={post} />

                </Link>
        
            ))}
        
        </div>
      </div>
    </div>
  );
}