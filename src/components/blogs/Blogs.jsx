import React from "react";
import Blog from "../blog/Blog";

const Blogs = ({ getBookMarkedData }) => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="lg:w-2/3 p-5 flex flex-col gap-8">
      {blogs.map((blog) => (
        <Blog getBookMarkedData={getBookMarkedData} key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
