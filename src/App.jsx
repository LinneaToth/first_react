import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
// import Content from "./components/Content/Content.jsx";

function App() {
  const [isSmall, setIsSmall] = useState(
    window.innerWidth < 640 ? true : false
  );

  window.addEventListener("resize", () => {
    setIsSmall(window.innerWidth < 640 ? true : false);
  });

  return (
    <div
      className="bg-(--color-main-bg) text-(--color-text-main)
    w-screen h-screen absolute 
    grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-10 md:grid-cols-5 lg:grid-cols-6">
      <Navbar isSmall={isSmall} />
      <Sidebar isSmall={isSmall} />
      {/* <Content /> */}
    </div>
  );
}

export default App;
