import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

import MainLayout from "./routes/MainLayout";
import UserLayout from "./routes/UserLayout";
import Index from "./routes/Index";
import Faq from "./routes/Faq";
import Contact from "./routes/Contact";
import UserEdit from "./routes/UserEdit";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "faq", element: <Faq /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <div>welcome user</div>,
      },
      { path: ":id/edit", element: <UserEdit /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
