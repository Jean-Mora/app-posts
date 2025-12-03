import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaPosts from "./components/ListaPosts";
import DetallePost from "./components/DetallePost";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="header">
          <h1 className="title">📝 App de Posts</h1>
          <p className="subtitle">Explora publicaciones y conoce más sobre sus autores</p>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<ListaPosts />} />
            <Route path="/post/:id" element={<DetallePost />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
