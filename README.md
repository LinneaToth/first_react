# First assignment with React - navbar and sidebar
![Preview](https://github.com/LinneaToth/first_react/blob/main/preview.png)

This project is built with two main components deriving from app.jsx, each with several child components: 

- Navbar
  - NavLink (for each link)
  - Hamburger (for collapsed menu icons))
- Sidebar
  - SideButton (a button for each link)
  - SideNav (the navigation part of the sidebar, basically a collection of SideButtons ^ )
  - Figure (just an image to fill out the emptiness of a page full of nothing)
 
  Several of the components utilize state and effect, to deal with screen size, collapsing menus and active buttons. I had to lift the state in several cases, and pass it on as props. Styling is implemented with Tailwind.
