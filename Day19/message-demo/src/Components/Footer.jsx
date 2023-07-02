import React from "react";
import { RiHome4Line } from "react-icons/ri";
import { FiMessageCircle } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div>
        <hr className=" mt-2" />
        <ul className="flex justify-between p-6 pt-2 pl-14 text-gray-300 pr-14 text-3xl">
          <NavLink
            to="/"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isPending ? "gray" : "",

                color: isActive ? "blue" : "gray",
              };
            }}
          >
            <li>
              <RiHome4Line />
            </li>
          </NavLink>
          <NavLink
            to="/messages"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isPending ? "gray" : "",

                color: isActive ? "blue" : "gray",
              };
            }}
          >
            <li>
              <FiMessageCircle />
            </li>
          </NavLink>
          <li>
            <CgProfile />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
