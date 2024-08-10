import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

import React from "react";
// import { useQuery } from "react-query";
// import { makeRequest } from "../../axios";

 const Posts = () => {
 
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => makeRequest.get("/posts").then((res) => res.data),
  });


  
  // Logging the data to the console
  console.log(data);

  // Render different content based on loading and error states
  return (
    <div className="posts">
    {error
      ? "Something went wrong!"
      : isLoading
      ? "loading"
      : data.map((post) => <Post post={post} key={post.id} />)}
  </div>
  );
};

export default Posts;
