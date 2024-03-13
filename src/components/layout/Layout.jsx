import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="w-[80%] mx-auto max-w-[1440px]">
      {/* header  */}
      <Header />
      <main className="flex flex-col lg:flex-row">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
