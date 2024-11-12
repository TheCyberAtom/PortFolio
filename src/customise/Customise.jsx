import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import { motion } from "framer-motion";
import "./Customise.css";
import CustomOptions from "./CustomOptions";

const Customise = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="customise" id="customise">
      <motion.div
        className="customise-content"
        initial={{ width: "60px", minWidth: "60px" }}
        animate={{
          width: isOpen ? "auto" : "60px",
          minWidth: "60px",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="edit-button" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <EditOffIcon className="icon" />
          ) : (
            <EditIcon className="icon" />
          )}
        </div>

        {isOpen && <CustomOptions />}
      </motion.div>
    </div>
  );
};

export default Customise;
