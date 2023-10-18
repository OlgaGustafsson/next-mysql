'use client'
import { useParams } from "@/node_modules/next/navigation";
import { useEffect, useState } from "react";


interface Post {
    id: string
    title: string
    content: string
    createdDate: Date
  }

export default function Singlepage() {
    const { postId } = useParams<{ postId?: string}>();
    
    console.log(postId);
    const [post, setPost] = useState();

    useEffect(() => {
        if(postId) {
        const getPost = async () => {
            try {
                const response = await fetch(`http://localhost:3000/posts/${postId}`);
                const data = await response.json();
                setPost(data[0]);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        getPost();
    }
    }, [postId])

    const handleEdit = () => {

    };

    const handleDelete = () => {

    };

    if(!post) {
        return <div>Loading...</div>
    }


    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.createdDate}</p>

            <button onClick={handleEdit}>Redigera</button>
            <button onClick={handleDelete}>Ta bort</button>
        </div>
    );
}