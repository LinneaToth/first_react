import NavLink from "./NavLink.jsx";
import Hamburger from "./Hamburger.jsx";
import { useState, useEffect } from "react";

const links = [
  { text: "home", url: "" },
  { text: "about", url: "" },
  { text: "contact us", url: "" },
  { text: "our history", url: "" },
];

export default function Navbar({
  isSmall = false,
  sidebarShow,
  setSidebarShow,
}) {
  const [activeButton, setActiveButton] = useState("home");
  const [navbarShow, setNavbarShow] = useState(false);

  const [isVisible, setVisible] = useState(
    isSmall && !navbarShow ? false : true
  );

  useEffect(() => {
    if (isSmall && navbarShow) {
      setVisible(true);
      return;
    }
    if (!isSmall) {
      setVisible(true);
      return;
    }
    setVisible(false);
  }, [navbarShow, isSmall]);

  function activeHandler(text) {
    setActiveButton(text);
  }

  return (
    <nav
      className={`bg-(--color-secondary-bg) h-[2.5rem] mt-[1rem] shadow-(<custom-property>) sm:col-start-2 sm:col-span-5 pl-[5rem]`}>
      <ul
        className={`md:ml-[50px] h-full flex flex-row gap-8 justify-start items-center text-(length:--font-size-h3)  ${
          !isVisible ? "hidden" : "flex flex-row justify-between"
        }`}>
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
      {isSmall && (
        <Hamburger
          sidebarShow={sidebarShow}
          setSidebarShow={setSidebarShow}
          navbarShow={navbarShow}
          setNavbarShow={setNavbarShow}
          isSmall={isSmall}
        />
      )}
    </nav>
  );
}
