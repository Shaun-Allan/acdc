import Navelement from "../Navelement/Navelement";
import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  NextUIProvider,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";
import { FaChevronDown } from "react-icons/fa";
import Graphs from "./Graphs";
import Fine from "./Fine";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(true);
  return (
    <div className="w-screen flex flex-col items-center p-0 overflow-x-hidden bg-black h-screen">
      <Navelement menuOpen={menuOpen} setMenuOpen={setMenuOpen} navDark={navDark} setNavDark={setNavDark}/>
      <div className="w-screen flex flex-col sm:flex-row items-center px-4 py-4 sm:px-8 py-4 overflow-x-hidden bg-black h-full sm:h-screen gap-4 sm:gap-0">
        <Graphs />
        <Fine />
      </div>
    </div>
  );
}

export default Home;
