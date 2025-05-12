import { useState } from "react";

export default function NavLink({
  text = "undefined",
  url = "undefined",
  active = false,
  onClick,
}) {
  return (
    <li key={text} className={active ? "bg-(--color-accent)" : ""}>
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
