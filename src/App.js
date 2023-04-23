import "./App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import {
  createBrowserRouter,
  RouterProvider, NavLink, Outlet,
} from "react-router-dom";
import Home from './components/Home';
import Services from './components/Services';
import Events from './components/Events';
import Contact from './components/Contact';
import Search from './components/Search';
import SongList from "./components/song-list";
import ThankYou from "./components/ThankYou";

// I created the router with paths to each of my pages
const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "services",
        element: <Services/>,
      },
      {
        path: "events",
        element: <Events/>,
      },
      {
        path: "search",
        element: <Search/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "admin",
        element: <SongList/>,
      },
      {
        path: "thank-you",
        element: <ThankYou/>,
      },
    ],
  },
]);

// I created the App function to serve as the root element to provide the router information
function App() {
  return (
      <RouterProvider router={router} />
  );
}

// I created the Layout function which holds the NavBar and Outlet
function Layout() {
  return (
    <Container className="mt-4 mb-5">
      <Navbar fixed="bottom" bg="primary" variant="dark" collapseOnSelect expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/services">Services</NavLink>
            <NavLink className="nav-link" to="/events">Karaoke Events</NavLink>
            <NavLink className="nav-link" to="/search">Song Search</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      </Container>
  )
}

export default App;
