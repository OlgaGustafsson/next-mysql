import { Post } from "@/interface";

interface Props {
    post: Post;
}

const formatDate = (date: string | number | Date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('sv-SE');
  };

export default function DocComponent(props: Props) {
    return(
        <div className="flex flex-col rounded-lg 
            m-2 p-4 text-gray-200">
            <h3 className="text-xl text-yellow-600">{props.post.title}</h3>
            <p className="text-gray-200">{props.post.content}</p>
            <p className="text-yellow-600">{formatDate(props.post.createDate)}</p>
        </div>
    );
}