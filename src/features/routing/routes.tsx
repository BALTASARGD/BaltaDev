import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/skills", element: <Skills /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
];

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
