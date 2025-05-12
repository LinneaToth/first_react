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
        "cursor-pointer mt-2 ml-5 mr-5 rounded-3xl h-12 active:scale-105 transition-all ease-in-out duration-200 " +
        (active ? "bg-(--color-accent)" : "bg-(--color-main-bg)")
      }>
      {name}
    </button>
  );
}
