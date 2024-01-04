import React, { useContext, useEffect } from "react";
import { AppContext } from "../src/context/AppContext";
import Header from "../src/components/Header";
import BlogPosts from "../src/components/BlogPosts";
import Footer from "../src/components/Footer";
import "./index.css";
function App() {
  const { darkmode, fetchBlogPosts } = useContext(AppContext);

  //api calling
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div
      className={`w-full min-w-[420px] h-full  flex flex-col items-center relative ${
        darkmode ? "bg-black text-white" : "bg-[#e0aaff] text-black"
      }`}
    >
      <Header />
      <BlogPosts />
      <Footer />
    </div>
  );
}

export default App;
