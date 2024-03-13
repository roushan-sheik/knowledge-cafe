import React from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div className="w-2/3 p-5 flex flex-col gap-8">
      {blogs.map((blog) => (
        <Blog blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
