import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/index";
import About from "./pages/About";
import Products from "./pages/Products";
import Programs from "./pages/Programs";
import Services from "./pages/Services";
import Community from "./pages/Community";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "insights",
        element: <Insights />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);