import SideButton from "./SideButton.jsx";

export default function SideNav() {
  return (
    <ul className="flex flex-col">
      <SideButton name="Uppgift 1" />
      <SideButton name="Uppgift 2" />
      <SideButton name="Uppgift 3" />
    </ul>
  );
}
