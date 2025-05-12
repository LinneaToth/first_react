import NavLink from "./NavLink.jsx";
import Hamburger from "./Hamburger.jsx";
import { useState } from "react";

const links = [
  { text: "home", url: "" },
  { text: "about", url: "" },
  { text: "contact us", url: "" },
  { text: "our history", url: "" },
];

export default function Navbar({ isSmall = false }) {
  const [activeButton, setActiveButton] = useState("home");

  function activeHandler(text) {
    setActiveButton(text);
  }

  return (
    <nav className="bg-(--color-secondary-bg) h-[2.5rem] mt-[1rem] shadow-(<custom-property>) sm:col-start-2 sm:col-span-5 pl-[5rem] flex flex-row justify-between">
      <ul className="ml-[50px] h-full flex flex-row gap-(--gap) justify-start items-center text-(length:--font-size-h3) pt-1">
        {links.map((link) => {
          return (
            <NavLink
              url={link.url}
              text={link.text}
              key={link.text}
              active={activeButton === link.text}
              onClick={activeHandler}
            />
          );
        })}
      </ul>
      {isSmall && <Hamburger />}
    </nav>
  );
}
