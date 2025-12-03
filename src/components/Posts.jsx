import { usePosts } from "../hooks/usePosts";


export default function Posts() {
const { posts, loading, error } = usePosts();


if (loading) return <p>Cargando...</p>;
if (error) return <p>Error: {error}</p>;


return (
<div className="p-4 space-y-3">
<h1 className="text-2xl font-bold">Lista de Posts</h1>
{posts?.map((p) => (
<div key={p.id} className="border rounded p-3 shadow">
<h2 className="font-semibold text-lg">{p.title}</h2>
<p>{p.body}</p>
</div>
))}
</div>
);
}