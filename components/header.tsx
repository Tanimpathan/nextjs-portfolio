"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="z-[999] relative">
      {/* <div className="fixed top-0 left-1/2 w-full h-[4.15rem] bg-white bg-opacity-80 rounded-none border border-white border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] -translate-x-1/2 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"></div> */}

      <motion.nav
        className="fixed top-0 left-1/2 bg-white bg-opacity-80 rounded-none border border-white border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] -translate-x-1/2 w-full sm:w-auto sm:top-6 sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex flex-wrap sm:flex-nowrap text-xs sm:text-sm">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Projects</li>
          <li className="nav-item">Skills</li>
          <li className="nav-item">Experience</li>
          <li className="nav-item">Contact</li>
        </ul>
      </motion.nav>
    </header>
  );
}
