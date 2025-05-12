import { useState } from "react";

export default function SideButton({ name = "undefined" }) {
  const [active, setActive] = useState(false);

  const clickHandler = function (e) {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <button
      onClick={clickHandler}
      className={
        "w-full " + (active ? "bg-(--color-accent)" : "bg-(--color-main-bg)")
      }>
      {name}
    </button>
  );
}
