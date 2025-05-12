import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";

const stylesMainContainer = [
  "bg-(--color-main-bg)",
  "text-(--color-text-main)",
  "w-screen",
  "h-screen",
  "absolute",
  "grid",
  "grid-cols-5",
];

function App() {
  return (
    <div className={stylesMainContainer.join(" ")}>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
