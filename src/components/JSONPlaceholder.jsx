import React, { useEffect, useState } from "react";
import axios from "axios";
import VolverHome from "./VolverHome";
import "./JSONPlaceholder.css";

export default function JSONPlaceholder() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Cargando posts...</div>;

  return (
    <div className="jsonplaceholder-container">
      <h2>Posts de JSONPlaceholder</h2>
      <ul className="jsonplaceholder-list">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <VolverHome />
    </div>
  );
}