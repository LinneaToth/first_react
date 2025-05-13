import { useState } from "react";
import SideButton from "./SideButton.jsx";

export default function SideNav() {
  const [activeButton, setActiveButton] = useState("");

  function activeHandler(name) {
    setActiveButton(name);
  }

  return (
    <ul className="mt-45 flex flex-col gap-2 h-50">
      <SideButton
        name="part 1"
        isActive={activeButton === "part 1" ? true : false}
        onClick={activeHandler}
      />
      <SideButton
        name="part 2"
        isActive={activeButton === "part 2" ? true : false}
        onClick={activeHandler}
      />
      <SideButton
        name="part 3"
        isActive={activeButton === "part 3" ? true : false}
        onClick={activeHandler}
      />
    </ul>
  );
}
