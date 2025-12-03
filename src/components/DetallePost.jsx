import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DetallePost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDetalles = async () => {
      try {
        setCargando(true);

        const respuestaPost = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!respuestaPost.ok) {
          throw new Error("Post no encontrado");
        }
        const datosPost = await respuestaPost.json();
        setPost(datosPost);

        const respuestaUsuario = await fetch(
          `https://jsonplaceholder.typicode.com/users/${datosPost.userId}`
        );
        if (!respuestaUsuario.ok) {
          throw new Error("Usuario no encontrado");
        }
        const datosUsuario = await respuestaUsuario.json();
        setUsuario(datosUsuario);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    cargarDetalles();
  }, [id]);

  if (cargando) return <p className="loading">Cargando contenido...</p>;
  if (error) return <p className="error">⚠️ {error}</p>;

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Volver
      </button>

      {post && (
        <>
          <h2 className="detail-title">{post.title}</h2>
          <p className="detail-body">{post.body}</p>

          {usuario && (
            <div className="author-card">
              <h3 className="author-title">👤 Autor</h3>
              <p><strong>Nombre:</strong> {usuario.name}</p>
              <p><strong>Email:</strong> {usuario.email}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default DetallePost;
