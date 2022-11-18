import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { BiMessageDetail } from "react-icons/bi";
import { HiPhotograph } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import "../../css/nav1.css";

const Nav1 = () => {
  const [active, activeChange] = useState("#profile");
  return (
    <div className="nav">
      <ul>
        <li className={active === "#" ? "list active" : "list"}>
          <a
            href="#"
            onClick={() => {
              activeChange("#");
            }}
          >
            <span className="icon">
              <AiOutlineHome />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className={active === "#profile" ? "list active" : "list"}>
          <a
            href="#"
            onClick={() => {
              activeChange("#profile");
            }}
          >
            <span className="icon">
              <GoPerson />
            </span>
            <span className="text">Profile</span>
          </a>
        </li>
        <li className={active === "#message" ? "list active" : "list"}>
          <a
            href="#"
            onClick={() => {
              activeChange("#message");
            }}
          >
            <span className="icon">
              <BiMessageDetail />
            </span>
            <span className="text">Messages</span>
          </a>
        </li>
        <li className={active === "#photos" ? "list active" : "list"}>
          <a
            href="#"
            onClick={() => {
              activeChange("#photos");
            }}
          >
            <span className="icon">
              <HiPhotograph />
            </span>
            <span className="text">Photos</span>
          </a>
        </li>
        <li className={active === "#settings" ? "list active" : "list"}>
          <a
            href="#"
            onClick={() => {
              activeChange("#settings");
            }}
          >
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

export default Nav1;
