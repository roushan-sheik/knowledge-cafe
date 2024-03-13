import React from "react";

const Bookmarks = () => {
  return (
    <div className="w-1/3 p-5">
      {/* header  */}
      <div className="flex items-center justify-center gap-2 py-5 px-3 rounded-md  gp-2 font-bold text-xl third border-[#6047ec] bg-[#6047ec1a] border-1 ">
        <h5>Spent time on read:</h5>
        <span>{0} min</span>
      </div>
      {/* daynamic box parent  */}
      <div className="bg-[#1111110d] p-5 rounded-md mt-4">
        {/* title  */}
        <div className="flex gap-2 items-center primary font-bold mb-3 text-xl">
          <h4>Bookmarks Blogs: </h4>
          <span>{0}</span>
        </div>
        {/* added items  */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-md p-4">
            <h4 className="font-semibold text-base primary">
              History Unraveled: Untold Stories and Forgotten Tales of the Past
            </h4>
          </div>
          <div className="bg-white rounded-md p-4">
            <h4 className="font-semibold text-base primary">
              History Unraveled: Untold Stories and Forgotten Tales of the Past
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
