import React, { useEffect, useState } from "react";
import logo from "./img/logo.svg";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";

import { FiFacebook, FiTwitter, FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsList } from "react-icons/bs";

// , AiFillLinkedin, FiGithub

const MaxComponent = () => {
  return (
    <>
      <div className="vert-center mx-auto">
        <Router>
          <Link to="#" className=" md:nav-item">
            Home
          </Link>
          <Link to="#" className=" md:nav-item">
            About
          </Link>
          <Link to="#" className=" md:nav-item">
            Projects
          </Link>
          <Link to="#" className=" md:nav-item">
            Contact
          </Link>
          <Link to="#" className=" md:nav-item">
            Profile
          </Link>
        </Router>
      </div>
      {/* SOCIAL ICONS */}
      {/* // import { FiFacebook, FiTwitter, AiFillLinkedin, FiGithub } from "react-icons"; */}
      <div className="vert-center mx-auto absolute  md:right-7 lg:right-32 xl:right-52 h-24">
        <Router>
          <Link to="#" className=" md:nav-item">
            <FiFacebook />
          </Link>
          <Link to="#" className=" md:nav-item">
            <FiTwitter />
          </Link>
          <Link to="#" className=" md:nav-item">
            <AiFillLinkedin />
          </Link>
          <Link to="#" className=" md:nav-item">
            <FiGithub />
          </Link>
        </Router>
      </div>
    </>
  );
};

const MinCompItems = () => {
  return <h1>MinCompItems</h1>;
};

const MinComponent = () => {
  const [renderItems, setrenderItems] = useState(false);

  const clickHandler = () => {
    console.log("From Clickhandler");
    setrenderItems(!renderItems);
  };

  return (
    <div className="vert-center">
      <button onClick={clickHandler} className="absolute right-20">
        <BsList className=" text-4xl text-sky-500 hover:text-gray-800 hover:ease-in-out spin-half hover:duration-200" />
        {renderItems ? <MinCompItems /> : null}
      </button>
    </div>
  );
};

const App = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const SMALLSIZE = 767;

  const resizeHandler = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div>
      <div
        className={`bg-slate-400 h-24 grid ${
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
        {innerWidth <= SMALLSIZE ? <MinComponent /> : <MaxComponent />}
      </div>
    </div>
  );
};

export default App;
