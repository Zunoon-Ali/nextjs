import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-5 px-4 bg-slate-400 py-3">
      <span>&copy;FaceBook</span>
      <ul className="flex ">
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">inquery</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
