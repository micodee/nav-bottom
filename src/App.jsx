import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { BiMessageDetail } from "react-icons/bi";
import { HiPhotograph } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";

const list = document.querySelectorAll(".list");
const activeLink = () => {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
};
list.forEach((item) => item.addEventListener("click", activeLink));

const App = () => {
  return (
    <div className="nav">
      <ul>
        <li className="list active">
          <a href="#">
            <span className="icon">
              <AiOutlineHome />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <GoPerson />
            </span>
            <span className="text">Profile</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <BiMessageDetail />
            </span>
            <span className="text">Messages</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <HiPhotograph />
            </span>
            <span className="text">Photos</span>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <span className="icon">
              <AiOutlineSetting />
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default App;
