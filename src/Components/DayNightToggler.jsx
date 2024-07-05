import React from 'react';
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const DayNightToggler = ({ onToggle, isNight }) => {
  return (
    <button onClick={onToggle} variant={isNight ? "dark" : "light"}>
      {isNight ? <MdOutlineWbSunny /> : <FaRegMoon />}
    </button>
  );
};

export default DayNightToggler;