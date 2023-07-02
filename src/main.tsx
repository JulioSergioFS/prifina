import React from "react";
import ReactDOM from "react-dom/client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RouterProvider } from "react-router-dom";
import { ScrollingProvider } from "react-scroll-section";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MotionLazyContainer from "./components/MotionLazyContainer";
import { router } from "./routes";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MotionLazyContainer>
      <ScrollingProvider scrollBehavior="smooth" offset={-92}>
        <div className="app">
          <RouterProvider router={router} />
        </div>
      </ScrollingProvider>
    </MotionLazyContainer>
  </React.StrictMode>
);
