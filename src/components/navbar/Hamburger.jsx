export default function Hamburger({
  isSmall,
  sidebarShow,
  setSidebarShow,
  setNavbarShow,
  navbarShow,
}) {
  function clickHandlerSide() {
    setSidebarShow(!sidebarShow);
    navbarShow && setNavbarShow(false);
  }

  function clickHandlerNavbar() {
    setNavbarShow(!navbarShow);
    sidebarShow && setSidebarShow(false);
  }

  return (
    <div className="flex flex-row ml-[75vw]">
      <img
        className="self-center pr-(--gap) h-[40px] w-[40px]"
        src="../../src/assets/icons/hamburger.svg"
        onMouseDown={clickHandlerNavbar}></img>
      <img
        className="self-center pr-(--gap) h-[40px] w-[40px]"
        src="../../src/assets/icons/extramenu.svg"
        onMouseDown={clickHandlerSide}></img>
    </div>
  );
}
