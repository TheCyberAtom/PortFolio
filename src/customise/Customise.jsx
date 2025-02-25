import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import { motion, AnimatePresence } from "framer-motion";
import "./Customise.css";
import CustomOptions from "./CustomOptions";

const Customise = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Edit Button */}
      <div className="edit-button" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? (
          <EditOffIcon className="icon" />
        ) : (
          <EditIcon className="icon" />
        )}
      </div>

      {/* Customization Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="customise-content"
            initial={{ opacity: 0, y: 200, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 200, x: "-50%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <CustomOptions />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Customise;
