import React, { useEffect } from "react";
import { MoonActiveIcon, MoonIcon, SunActiveIcon, SunIcon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { darkMode, toggleDarkMode } from "../../store/slices";

export const ToggleModeButton = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(darkMode);
  useEffect(() => {
    const root = document.documentElement;

    const darkModeStyles = {
      "--primary": "#05051D", // baground
      "--secondary": "#0B1026", // navbar  same in light mode
      "--lightsecondary": "#181E38", // table heading  same in light mode
      "--btn": "#1C37B2", // blue button same in light mode
      "--lightprimary": "#10152A", // table outer
      "--subtext": "white",
      "--border": "#272E50", // same border dark mode
      "--admintitle": "#181E38", // small icon baground like admin delet edit coss icon
      "--outlinebtntext": "white",
      "--disablebtn": "#F3F3F3",
      "--submitted": "#28E050",
      "--disabletext": "#9F9F9F",
      "--rejected": "#FEB019",
      "--denied": "#FF4C4C",
    };

    const lightModeStyles = {
      "--primary": "#ffffff",
      "--secondary": "#0B1026",
      "--lightsecondary": "#181E38",
      "--btn": "#1C37B2",
      "--lightprimary": "#F5F5F5",
      "--subtext": "black",
      "--border": "#D1D1D1",
      "--admintitle": "#E6E6E6",
      "--outlinebtntext": "#1C37B2",
      "--disablebtn": "#F3F3F3",
      "--disabletext": "#9F9F9F",
      "--submitted": "#28E050",
      "--rejected": "#FEB019",
      "--denied": "#FF4C4C",
    };

    Object.entries(isDarkMode ? darkModeStyles : lightModeStyles).forEach(
      ([key, value]) => {
        root.style.setProperty(key, value);
      }
    );
  }, [isDarkMode]);

  const buttonClass = " h-[40px] w-[80px] text-red-500";

  const toggleMode = () => {
    dispatch(toggleDarkMode(!isDarkMode));
  };

  return (
    <div
      onClick={toggleMode}
      className={`h- rounded-full bg-[#1D2445] flex justify-center items-center gap-3 ${buttonClass}`}
    >
      <div>{isDarkMode ? <SunIcon /> : <SunActiveIcon />}</div>
      <div>{isDarkMode ? <MoonIcon /> : <MoonActiveIcon />}</div>
    </div>
  );
};
