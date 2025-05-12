import SideButton from "./SideButton.jsx";

export default function SideNav() {
  return (
    <ul className="mt-10 flex flex-col gap-2 h-50">
      <SideButton name="Part 1" />
      <SideButton name="Part 2" />
      <SideButton name="Part 3" />
    </ul>
  );
}
