import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className=" flex justify-between items-center border-b-2 mt-8 pb-6 select-none cursor-pointer">
      <div>
        <h2 className="text-2xl font-bold">Learning Cafe</h2>
      </div>
      <div>
        <img className="w-[50px] h-[50px]" src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
