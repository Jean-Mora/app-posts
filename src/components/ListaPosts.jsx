import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListaPosts() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarPosts = async () => {
      try {
        setCargando(true);
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los posts");
        }

        const datos = await respuesta.json();
        setPosts(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    cargarPosts();
  }, []);

  if (cargando) {
    return <p className="loading">Cargando posts...</p>;
  }

  if (error) {
    return <p className="error">⚠️ {error}</p>;
  }

  return (
    <div className="list-container">
      <h2 className="section-title">📚 Lista de Publicaciones</h2>

      <div className="posts-grid">
        {posts.map((post) => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
            className="post-card-link"
          >
            <div className="post-card">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body.substring(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListaPosts;
