import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor  from "../hooks/AnimatedCursor";
import "./App.css";
import { Analytics } from "@vercel/analytics/react"
import { Helmet } from "react-helmet";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
          <Helmet>
        <title>Rehan's Portfolio | React Developer</title>
        <meta name="description" content="Portfolio of Rehan, a skilled React Developer with experience in building e-commerce and business websites." />
        <meta name="keywords" content="React Developer, Web Developer, Full-stack Developer, MERN Stack, Portfolio" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <Analytics />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
