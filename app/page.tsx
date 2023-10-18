'use client'

import { useEffect, useState } from 'react';
import Link from '@/node_modules/next/link';
import { useRouter } from '@/node_modules/next/router';


interface Post {
  id: number
  title: string
  content: string
  createdDate: Date
}

const handlePostClick = (postId: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  router.push(`/singlepage/${postId}`);
};

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

  return (
    <div className="flex flex-col p-10">
     
      <div>
        <h2 className="p-5 text-white">MINA INLÄGG:</h2>
        <div className="scroll-auto">
          <ul className="w-auto">
            {posts.map((post, index) => (
              <li className="text-white p-2"
                key={index}>
                <Link href={"/singlepage"} onClick={() => handlePostClick(post.id)}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}