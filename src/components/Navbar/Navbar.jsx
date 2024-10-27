import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { motion } from "framer-motion";
import "./Navbar.css";

const navbarLoadVariant = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 50, opacity: 1 },
};

const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <motion.div
        className="navbar-content shimmer"
        variants={navbarLoadVariant}
        initial="initial"
        animate="animate"
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <ul className="navbar-items">
          <li className="navbar-item">
            <HomeIcon className="icon" />
            <p>Home</p>
          </li>
          <li className="navbar-item">
            <PersonIcon className="icon" />
            <p>About</p>
          </li>
          <li className="navbar-item">
            <BusinessCenterIcon className="icon" />
            <p>Experience</p>
          </li>
          <li className="navbar-item">
            <LaptopMacIcon className="icon" />
            <p>Projects</p>
          </li>
          <li className="navbar-item">
            <PermPhoneMsgIcon className="icon" />
            <p>Contact</p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
