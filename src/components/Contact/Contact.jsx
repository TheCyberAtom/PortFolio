import React from "react";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.1, ease: "easeOut" }}
      >
        <div className="grid-mask"></div>
        <motion.div
          className="contact-content-left"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="left-details">
            <h2>
              <WavingHandIcon className="hello-icon" /> Hi There,
            </h2>
            <h2>Let's code your vision together.</h2>
          </div>
          <div className="left-email">
            <EmailIcon sx={{ fontSize: "2.5em" }} className="email-icon" />
            <div className="email-text">
              <p>Mail me at</p>
              <a href="mailto:rkm.rahulkmishra@gmail.com">
                rkm.rahulkmishra@gmail.com
              </a>
            </div>
          </div>
          <div className="left-socials">
            <p>Socials : </p>
            <a
              href="https://www.linkedin.com/in/thecyberatom/"
              aria-label="github profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/TheCyberAtom"
              aria-label="github profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </motion.div>
        <motion.div
          className="contact-content-right"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        >
          <div className="title">
            <h2>Send me a message</h2>
            <RocketLaunchIcon className="rocket-icon" />
          </div>
          <form>
            <div className="name-group input-group">
              <label name="name" id="name">
                Full Name
              </label>
              <br />
              <input type="text" required />
            </div>
            <div className="email-group input-group">
              <label name="email" id="email">
                Email Address
              </label>
              <br />
              <input type="email" name="email" id="email" />
            </div>
            <div className="message-group input-group">
              <label name="message" id="message">
                Message
              </label>
              <br />
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="primary-button send-btn">
              Send <SendIcon className="send-icon" />
            </button>
          </form>
        </motion.div>
      </motion.div>
      <span className="copyright">
        <i>&#169; 2024 | All rights reserved. Made by Rahul Kumar Mishra</i>
      </span>
    </div>
  );
};

export default Contact;
