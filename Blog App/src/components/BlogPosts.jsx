import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function BlogPosts() {
  const { isLoading, posts } = useContext(AppContext);
  return (
    <div className={`w-full max-w-[350px] md:max-w-[700px] mt-[90px] mb-[70px]`}>
      {isLoading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <p>No Posts Found</p>
      ) : (
        posts.map((post, index) => {
          return (
            <div key={index} className="flex flex-col gap-y-2 mb-10">
              <p className="font-bold   text-lg">{post.title}</p>
              <p className="italic font-semibold text-xs ">
                By {post.author} on
                <span className="font-bold non-italic underline">
                  {post.category}
                </span>
              </p>
              <p className="font-semibold text-md "> Posted on {post.date}</p>
              <p className="font-medium text-md">{post.content}</p>
              <p>
                {post.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="font-bold underline mr-3 text-xs text-blue-700"
                    >
                      #{tag}
                    </span>
                  );
                })}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default BlogPosts;
