import React, { useEffect, useState } from "react";
import logo from "./img/logo.svg";
import { HashRouter as Router, Link } from "react-router-dom";

import { FiFacebook, FiTwitter, FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsList } from "react-icons/bs";

// , AiFillLinkedin, FiGithub

const NavRoutes = () => {
  return (
    <Router>
      <Link to="#" className=" nav-item-sm md:nav-item-mg">
        Home
      </Link>
      <Link to="#" className=" nav-item-sm md:nav-item-mg">
        About
      </Link>
      <Link to="#" className=" nav-item-sm md:nav-item-mg">
        Projects
      </Link>
      <Link to="#" className=" nav-item-sm md:nav-item-mg">
        Contact
      </Link>
      <Link to="#" className=" nav-item-sm md:nav-item-mg">
        Profile
      </Link>
    </Router>
  );
};

const MaxComponent = () => {
  return (
    <>
      <div className="vert-center mx-auto">
        <NavRoutes />
      </div>
      {/* SOCIAL ICONS */}
      {/* // import { FiFacebook, FiTwitter, AiFillLinkedin, FiGithub } from "react-icons"; */}
      <div className="vert-center mx-auto absolute  md:right-7 lg:right-32 xl:right-52 h-24">
        <Router>
          <Link to="#" className=" md:nav-item-mg">
            <FiFacebook />
          </Link>
          <Link to="#" className=" md:nav-item-mg">
            <FiTwitter />
          </Link>
          <Link to="#" className=" md:nav-item-mg">
            <AiFillLinkedin />
          </Link>
          <Link to="#" className=" md:nav-item-mg">
            <FiGithub />
          </Link>
        </Router>
      </div>
    </>
  );
};

const MinComponent = ({ renderItems, setrenderItems }) => {


  const [bsListHoverStates, setBsListHoverStates] = useState(true)

  const clickHandler = () => {
    console.log("From Clickhandler");
    setrenderItems(!renderItems);
    setBsListHoverStates(!bsListHoverStates);
  };

  return (
    <div className="vert-center">
      <button onClick={clickHandler} className="absolute right-20">
        <BsList
          className={`text-4xl ${
            bsListHoverStates
              ? "text-sky-300 hover:text-gray-800"
              : "hover:text-sky-300 text-gray-800"
          } hover:ease-in-out spin-half hover:duration-200`}
        />
      </button>
    </div>
  );
};

const App = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [renderItems, setrenderItems] = useState(false);
  const SMALLSIZE = 767;

  const resizeHandler = () => {
    setInnerWidth(window.innerWidth);
    if (window.innerWidth > SMALLSIZE) {
      setrenderItems(false);
    } else if (renderItems && window.innerWidth <= SMALLSIZE) {
      setrenderItems(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="bg-slate-400 min-h-[6rem]">
      <div
        className={`h-24 grid ${
          innerWidth <= SMALLSIZE ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        {/* LOGO */}
        <div className="vert-center">
          <img
            src={logo}
            alt=""
            className=" inline-block mx-5 lg:ml-16 2xl:ml-20 w-48 "
          />
        </div>
        {innerWidth <= SMALLSIZE ? (
          <MinComponent
            renderItems={renderItems}
            setrenderItems={setrenderItems}
          />
        ) : (
          <MaxComponent />
        )}
      </div>
      {renderItems ? <NavRoutes /> : null}
    </div>
  );
};

export default App;
