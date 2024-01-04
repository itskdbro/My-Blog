import { createContext, useState } from "react";
import axios from "axios";

// step-1 -> context create karna
export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(null);
  const [darkmode, setDarkMode] = useState(false);
  const BaseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

  async function fetchBlogPosts(page = 1) {
    const Url = `${BaseUrl}?page=${page}`;
    setIsLoading(true);
    try {
      await axios.get(Url).then((Response) => {
        console.log(Response.data);
        setPosts(Response.data.posts);
        setPage(Response.data.page);
        setTotalPage(Response.data.totalPages);
      });
    } catch (error) {
      console.log("Error in fetching blogs from API", error);
      setPosts([]);
      setpage(1);
      setTotalPage(null);
    }
    setIsLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }
  function DarkModeHandler(value) {
    setDarkMode(value);
  }

  const value = {
    isLoading,
    setIsLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPage,
    fetchBlogPosts,
    handlePageChange,
    darkmode,
    setDarkMode,
    DarkModeHandler,
  };

  // step-2 -> context ko provide karvana
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
