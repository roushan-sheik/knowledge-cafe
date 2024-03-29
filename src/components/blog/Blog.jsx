import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({ blog, getBookMarkedData }) => {
  const { cover, title, name, author_img, date, reading_time, hashtags } = blog;
  function handleBookmarkClicked() {
    getBookMarkedData({title, reading_time});
  }
  return (
    <div>
      {/* image box  */}
      <div className="lg:h-[25rem] h-[200px]  w-full object-cover rounded-md">
        <img className="w-full rounded-md h-full" src={cover} alt="Blog Img" />
      </div>
      {/* profile box  */}
      <div className="flex flex-col lg:flex-row justify-between mt-6 items-center">
        {/* left box  */}
        <div className="flex gap-5 items-center">
          <div className="w-[50px] h-[50px] rounded-full object-cover">
            <img
              className="w-full h-full rounded-full"
              src={author_img}
              alt="Author"
            />
          </div>
          <div>
            <h4 className="font-bold lg:text-2xl text-lg primary cursor-pointer">
              {name}
            </h4>
            <div className="flex text-base gap-2 items-center">
              <CiCalendarDate />
              <p className="secondary text-sm">{date}</p>
            </div>
          </div>
        </div>
        {/* right box  */}
        <div className="flex gap-2 text-lg items-center secondary">
          <p>{`${reading_time} min read`}</p>
          <button onClick={handleBookmarkClicked} className="cursor-pointer">
            <FaRegBookmark />
          </button>
        </div>
      </div>
      {/* content box  */}
      <div>
        {/* title */}
        <h2 className="lg:text-3xl text-xl font-bold primary py-4 mt-4">
          {title}
        </h2>
        {/* hash tag  */}
        <div className="flex gap-3 text-lg secondary">
          {hashtags.map((tag) => {
            return <span key={tag}>{tag}</span>;
          })}
        </div>
        {/* button  */}
        <button className="mt-6 text-lg third underline">Mark as read</button>
      </div>
    </div>
  );
};

export default Blog;
