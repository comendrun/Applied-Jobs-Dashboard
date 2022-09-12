import React, { useState, useEffect } from "react";
import { images } from "../../Constants";
import NavMenuMobile from "./NavMenuMobile";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuShowing, setIsMobileMenuShowing] = useState(false);

  let user;

  let navigationLinks = () => {
    return !user ? ["Sign In", "Sign up"] : ["Dashboard", "Sign out"];
  };

  return (
    <>
      <nav
        className={`navbar fixed top-0 right-0 left-0 z-50 mobile-view laptop:hidden bg-[rgba(0,0,0,0.10)] backdrop-blur-md `}
      >
        <div className="top-section flex p-4 justify-between items-center z-50">
          <Link to="/applied-jobs-dashboard">Job Applications Dashboard</Link>
          <img
            src={images.hamburgerIcon}
            alt="hamburger"
            className="cursor-pointer"
            onClick={() => setIsMobileMenuShowing(true)}
          />
        </div>

        <NavMenuMobile
          closeMenuHandler={() => setIsMobileMenuShowing(false)}
          isMobileMenuShowing={isMobileMenuShowing}
          navLinkOnClickHandler={() => setIsMobileMenuShowing(false)}
        />

        {/* mobile-view div end ==> */}
      </nav>

      <nav
        className={`navbar fixed top-0 right-0 left-0 z-50 desktop-view hidden laptop:flex px-20 py-7 items-center bg-[rgba(0,0,0,0.25)] backdrop-blur `}
      >
        <Link to="/applied-jobs-dashboard" className="text-2xl font-bold">
          JAD
        </Link>

        <ul className="nav-items-desktop flex ml-auto gap-10 text-white text-xl">
          {navigationLinks().map((item, index) => {
            return (
              <li
                key={`desktop-${item}-${index}`}
                className="nav-item-desktop capitalize font-bold cursor-pointer py-3 "
              >
                <NavLink to={`/applied-jobs-dashboard/${item}`} className="">
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* navbar div end ==> */}
    </>
  );
}

export default Navbar;

// bg-[rgba(0,0,0,0.25)] backdrop-blur-md
