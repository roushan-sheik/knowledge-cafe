import React from "react";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Layout from "./components/layout/Layout";
const App = () => {
  const [bookmarkData, setBookmarkData] = React.useState([]);
  // get button data from blog component
  function getBookMarkedData(data) {
    setBookmarkData([...bookmarkData, data]);
  }

  return (
    <Layout>
      <Blogs getBookMarkedData={getBookMarkedData} />
      <Bookmarks bookmarkData={bookmarkData} />
    </Layout>
  );
};

export default App;
