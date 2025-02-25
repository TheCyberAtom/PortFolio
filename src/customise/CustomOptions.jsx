import React, { useState, useEffect, useMemo, useCallback } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import ShuffleIcon from "@mui/icons-material/Shuffle"; // Icon for random theme
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore"; // Icon for reset theme
import { motion } from "framer-motion";
import { hexToHSL } from "../utils/hexToHsl";
import { hslToRgb } from "../utils/hslToRgb";
import "./Customise.css";

// Default colors (dark theme)
const defaultColors = {
  primaryColor: "#ff9900",
  secondaryColor: "#454545",
  textColor: "#fdfdfd",
  backgroundColor: "#0a0a0a",
};

// Convert RGB to HEX
const rgbToHex = (r, g, b) =>
  "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

// Convert HSL directly to HEX
const hslToHex = (h, s, l) => {
  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
};

const CustomOptions = () => {
  const initialColors =
    JSON.parse(sessionStorage.getItem("customColors")) || defaultColors;
  const [colors, setColors] = useState(initialColors);

  // Helper: Compute the complementary color for a given hex color.
  const getComplementaryColor = (color = "") => {
    const colorPart = color.slice(1);
    const ind = parseInt(colorPart, 16);
    let iter = ((1 << (4 * colorPart.length)) - 1 - ind).toString(16);
    while (iter.length < colorPart.length) {
      iter = "0" + iter;
    }
    return "#" + iter;
  };

  // Save the current color choices to session storage when they change.
  useEffect(() => {
    sessionStorage.setItem("customColors", JSON.stringify(colors));
  }, [colors]);

  // Update CSS variables for color changes.
  const updateCSSVariable = (property, value) => {
    const { h, s, l } = hexToHSL(value);
    const hslValue = `hsl(${h}, ${s}%, ${l}%)`;

    setColors((prevColors) => {
      const colorKeyMap = {
        "--background-color": "backgroundColor",
        "--text-color": "textColor",
        "--primary-color": "primaryColor",
        "--secondary-color": "secondaryColor",
      };

      const colorKey = colorKeyMap[property];
      return { ...prevColors, [colorKey]: value };
    });

    // Apply the color changes to CSS variables.
    document.documentElement.style.setProperty(property, hslValue);

    if (property === "--background-color") {
      const tempHSL = `hsl(${h}, ${s}%, ${l + 6}%)`;
      document.documentElement.style.setProperty(
        "--background-color-2",
        tempHSL
      );
    }
    if (property === "--text-color") {
      const tempHSL = `hsl(${h}, ${s}%, ${l - 29}%)`;
      document.documentElement.style.setProperty("--grey-color", tempHSL);
    }
  };

  // Toggle between light and dark themes by inverting the current colors.
  const toggleTheme = useCallback(() => {
    updateCSSVariable("--primary-color", colors.primaryColor);
    updateCSSVariable(
      "--secondary-color",
      getComplementaryColor(colors.secondaryColor)
    );
    updateCSSVariable("--text-color", getComplementaryColor(colors.textColor));
    updateCSSVariable(
      "--background-color",
      getComplementaryColor(colors.backgroundColor)
    );
  }, [colors]);

  // Generate a modern accent color based on whether the theme is dark or light.
  const getRandomModernColor = useCallback((isDark) => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 31) + 60; // 60-90%
    const lightness = isDark ? 50 : 40;
    return hslToHex(hue, saturation, lightness);
  }, []);

  // Randomize theme: randomly decide if dark or light then generate colors.
  const randomTheme = useCallback(() => {
    const isDark = Math.random() < 0.5;
    const backgroundColor = isDark ? "#0a0a0a" : "#ffffff";
    const textColor = isDark ? "#fdfdfd" : "#000000";
    const primaryColor = getRandomModernColor(isDark);
    const secondaryColor = getRandomModernColor(isDark);
    const newColors = {
      primaryColor,
      secondaryColor,
      textColor,
      backgroundColor,
    };

    // Update state and CSS variables.
    setColors(newColors);
    Object.entries({
      "--primary-color": primaryColor,
      "--secondary-color": secondaryColor,
      "--text-color": textColor,
      "--background-color": backgroundColor,
    }).forEach(([property, value]) => {
      const { h, s, l } = hexToHSL(value);
      const hslValue = `hsl(${h}, ${s}%, ${l}%)`;
      document.documentElement.style.setProperty(property, hslValue);
      if (property === "--background-color") {
        const tempHSL = `hsl(${h}, ${s}%, ${l + 6}%)`;
        document.documentElement.style.setProperty(
          "--background-color-2",
          tempHSL
        );
      }
      if (property === "--text-color") {
        const tempHSL = `hsl(${h}, ${s}%, ${l - 29}%)`;
        document.documentElement.style.setProperty("--grey-color", tempHSL);
      }
    });
  }, [getRandomModernColor]);

  // Reset theme to the original website default.
  const resetTheme = useCallback(() => {
    setColors(defaultColors);
    Object.entries({
      "--primary-color": defaultColors.primaryColor,
      "--secondary-color": defaultColors.secondaryColor,
      "--text-color": defaultColors.textColor,
      "--background-color": defaultColors.backgroundColor,
    }).forEach(([property, value]) => {
      const { h, s, l } = hexToHSL(value);
      const hslValue = `hsl(${h}, ${s}%, ${l}%)`;
      document.documentElement.style.setProperty(property, hslValue);
      if (property === "--background-color") {
        const tempHSL = `hsl(${h}, ${s}%, ${l + 6}%)`;
        document.documentElement.style.setProperty(
          "--background-color-2",
          tempHSL
        );
      }
      if (property === "--text-color") {
        const tempHSL = `hsl(${h}, ${s}%, ${l - 29}%)`;
        document.documentElement.style.setProperty("--grey-color", tempHSL);
      }
    });
  }, []);

  const complementaryPrimaryColor = useMemo(
    () => getComplementaryColor(colors.primaryColor),
    [colors.primaryColor]
  );
  const complementarySecondaryColor = useMemo(
    () => getComplementaryColor(colors.secondaryColor),
    [colors.secondaryColor]
  );
  const complementaryTextColor = useMemo(
    () => getComplementaryColor(colors.textColor),
    [colors.textColor]
  );
  const complementaryBackgroundColor = useMemo(
    () => getComplementaryColor(colors.backgroundColor),
    [colors.backgroundColor]
  );

  // Determine which theme icon to show based on the background brightness.
  const themeIcon = useMemo(() => {
    const { l } = hexToHSL(colors.backgroundColor);
    return l < 50 ? (
      <WbSunnyIcon className="theme-icon" />
    ) : (
      <BedtimeIcon className="theme-icon" />
    );
  }, [colors.backgroundColor]);

  return (
    <motion.div className="customise-options" transition={{ delay: 0.5 }}>
      <div className="color-option">
        <label style={{ color: complementaryPrimaryColor }}>Primary</label>
        <input
          type="color"
          value={colors.primaryColor}
          style={{ border: `1px solid ${colors.primaryColor}` }}
          onChange={(e) => updateCSSVariable("--primary-color", e.target.value)}
        />
      </div>
      <div className="color-option">
        <label style={{ color: complementarySecondaryColor }}>Secondary</label>
        <input
          type="color"
          value={colors.secondaryColor}
          style={{ border: `1px solid ${colors.secondaryColor}` }}
          onChange={(e) =>
            updateCSSVariable("--secondary-color", e.target.value)
          }
        />
      </div>
      <div className="color-option">
        <label style={{ color: complementaryTextColor }}>Text</label>
        <input
          type="color"
          value={colors.textColor}
          style={{ border: `1px solid ${colors.textColor}` }}
          onChange={(e) => updateCSSVariable("--text-color", e.target.value)}
        />
      </div>
      <div className="color-option">
        <label style={{ color: complementaryBackgroundColor }}>
          Background
        </label>
        <input
          type="color"
          value={colors.backgroundColor}
          style={{ border: `1px solid ${colors.backgroundColor}` }}
          onChange={(e) =>
            updateCSSVariable("--background-color", e.target.value)
          }
        />
      </div>
      <button
        className="color-option dark-light"
        style={{ color: complementaryBackgroundColor }}
        onClick={toggleTheme}
      >
        {themeIcon}
      </button>
      <button
        className="color-option random-theme"
        style={{ color: complementaryBackgroundColor }}
        onClick={randomTheme}
      >
        <ShuffleIcon className="theme-icon" />
      </button>
      <button
        className="color-option reset-theme"
        style={{ color: complementaryBackgroundColor }}
        onClick={resetTheme}
      >
        <SettingsBackupRestoreIcon className="theme-icon" />
      </button>
    </motion.div>
  );
};

export default CustomOptions;
