import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((res) => {
      res.json().then((posts) => setPosts(posts));
    });
  }, []);

  return (
    <>
      {posts.length > 0 &&
        posts.map((post, index) => <Post key={posts._id} post={post} />)}
    </>
  );
};

export default IndexPage;
