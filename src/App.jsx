import React from "react";

const App = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div>
      <h2>App</h2>
    </div>
  );
};

export default App;
