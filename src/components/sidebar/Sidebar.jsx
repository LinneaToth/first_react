import Title from "./Title.jsx";
import Figure from "./Figure.jsx";
import SideNav from "./SideNav.jsx";
import { useState } from "react";

export default function Sidebar({ isSmall = false }) {
  const [isVisible, setVisible] = useState(isSmall ? false : true);

  return (
    <aside
      className={`col-start-0 col-span-2 row-start-2 sm:col-start-0 sm:col-span-1 sm:row-start-1 sm:row-span-10 ${
        !isVisible ? "hidden" : "grid"
      } sm:grid-cols-1 sm:grid-rows-10 bg-(--color-secondary-bg)`}>
      {!isSmall && <Title />}
      {!isSmall && <Figure className="hidden" />}
      <SideNav />
    </aside>
  );
}
