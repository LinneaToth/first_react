export default function Hamburger({
  isSmall,
  sidebarShow,
  setSidebarShow,
  setNavbarShow,
  navbarShow,
}) {
  function clickHandlerSide() {
    setSidebarShow(!sidebarShow);
  }

  function clickHandlerNavbar() {
    setNavbarShow(!navbarShow);
  }

  return (
    <>
      <img
        className="self-center pr-(--gap) h-[40px] w-[40px]"
        src="../../src/assets/icons/hamburger.svg"
        onClick={clickHandlerNavbar}></img>
      <img
        className="self-center pr-(--gap) h-[40px] w-[40px]"
        src="../../src/assets/icons/extramenu.svg"
        onClick={clickHandlerSide}></img>
    </>
  );
}
