import { useState } from "react";

export default function NavLink({
  text = "undefined",
  url = "undefined",
  active = false,
  onClick,
}) {
  return (
    <li
      key={text}
      className={
        "h-full justify-self-center active:scale-105 transition-all ease-in-out duration-50 " +
        (active ? "bg-(--color-accent)" : "")
      }>
      <a
        href={url}
        onClick={(e) => {
          e.preventDefault();
          onClick(text);
        }}>
        {text}
      </a>
    </li>
  );
}
