import { useParams } from "react-router-dom";
import { usePostDetail } from "../hooks/usePostDetail";


export default function PostDetail() {
const { id } = useParams();
const { post, loading, error } = usePostDetail(id);


if (loading) return <p>Cargando...</p>;
if (error) return <p>Error: {error}</p>;


return (
<div className="p-4">
<h1 className="text-3xl font-bold">{post?.title}</h1>
<p className="mt-2 text-gray-700">{post?.body}</p>
</div>
);
}