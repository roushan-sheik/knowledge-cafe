import React from "react";

const Blogs = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return <div className="w-2/3">Blogs</div>;
};

export default Blogs;
