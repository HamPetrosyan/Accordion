import React, { useState, useEffect } from "react";

import { Accordion } from "./Components/Accordion";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        if (!response.ok) {
          throw new Error("Respone was not ok.");
        } else {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.error("Fetching posts error:");
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <Accordion key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}
