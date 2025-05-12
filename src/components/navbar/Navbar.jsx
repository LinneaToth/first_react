import NavLink from "./NavLink.jsx";
import { useState } from "react";

const links = [
  { text: "home", url: "" },
  { text: "about", url: "" },
  { text: "contact us", url: "" },
];

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("home");

  function activeHandler(text) {
    setActiveButton(text);
  }

  return (
    <nav className="bg-(--color-secondary-bg) h-[2.5rem] mt-[1rem] shadow-(<custom-property>) col-start-2 col-span-5 pl-[5rem]">
      <ul className="h-full flex flex-col sm:flex-row gap-(--gap) justify-start items-center text-(length:--font-size-h3)">
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
    </nav>
  );
}
