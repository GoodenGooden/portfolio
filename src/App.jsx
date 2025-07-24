import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "../ui/Applayout";
import Portfolio from "../components/Portfolio";
import Contact from "../contact/Contact";
import About from "../about/About";
import Home from "../home/Home";
import Project from "../project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },

      { path: "about", element: <About /> },

      { path: "project", element: <Project /> },

      { path: "portfolio", element: <Portfolio /> },

      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
