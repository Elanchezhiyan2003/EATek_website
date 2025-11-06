import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

const Index = lazy(() => import("./pages/index"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Programs = lazy(() => import("./pages/Programs"));
const Services = lazy(() => import("./pages/Services"));
const Community = lazy(() => import("./pages/Community"));
const Insights = lazy(() => import("./pages/Insights"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Index />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "programs",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Programs />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "community",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Community />
          </Suspense>
        ),
      },
      {
        path: "insights",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Insights />
          </Suspense>
        ),
      },
      {
        path: "careers",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Careers />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);