import Title from "./Title.jsx";
import Figure from "./Figure.jsx";
import SideNav from "./SideNav.jsx";

export default function Sidebar() {
  return (
    <aside className="col-start-0 col-span-1 row-start-1 grid grid-cols-1 grid-rows-3 bg-(--color-secondary-bg)">
      <Title />
      <Figure />
      <SideNav />
    </aside>
  );
}
