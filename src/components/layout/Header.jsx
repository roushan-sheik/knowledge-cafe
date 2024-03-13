import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="">
      <div>
        <h2>Learning Cafe</h2>
      </div>
      <div>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
