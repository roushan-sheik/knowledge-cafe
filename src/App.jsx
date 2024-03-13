import React from "react";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Layout from "./components/layout/Layout";
const App = () => {
  return (
    <Layout>
      <Blogs />
      <Bookmarks />
    </Layout>
  );
};

export default App;
