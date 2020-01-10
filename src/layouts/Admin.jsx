import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

import routes from "../routes";

import styles from "../assets/jss/material-dashboard-react/layouts/adminStyle";

import bgImage from "../assets/img/sidebar-4.jpg";
import logo from "../assets/img/reactlogo.png";

let ps;

const SwitchRoutes = ({ setView }) => {
  return (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.path === "/") setView("/");

        return (
          <Route exact path={prop.path} component={prop.component} key={key} />
        );
      })}
    </Switch>
  );
};

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [viewLogin, setViewLogin] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  // Layout Login
  if (window.location.pathname === viewLogin) {
    const Component = routes.find(item => item.path === "/");
    return <Component.component />;
  }

  // Layout Default
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText="Form Simulate"
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color="blue"
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />

        <div className={classes.content}>
          <div className={classes.container}>
            {<SwitchRoutes setView={setViewLogin} />}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
