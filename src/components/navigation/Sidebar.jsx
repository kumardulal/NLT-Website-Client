import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Colors from "../collections/Color";
import "../styles/extra.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Sidebar({ menuToggle, setMenuToggle }) {
  const [windowsize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [sidebarDisplay, setSideBarDisplay] = useState("side-bar");

  useEffect(() => {
    const handlewindowResize = () => {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    };
    window.addEventListener("resize", handlewindowResize);

    return () => {
      window.removeEventListener("resize", handlewindowResize);
    };
  });

  useEffect(() => {
    if (menuToggle === true) {
      setSideBarDisplay("side-bar");
    } else {
      setSideBarDisplay("sidebar-hide-mood");
    }
    return sidebarDisplay;
  }, [menuToggle, windowsize, sidebarDisplay]);

  const handleCloseIcon = () => {
    //this is triggring the state of another component
    setMenuToggle("false");
  };

  return (
    <BrowserRouter>
      <div className={sidebarDisplay}>
        <div style={styles.windowsizeTitle}>
          <AiFillCloseCircle
            style={{
              fontSize: "60px",
              textAlign: "right",
              fontWeight: "bold",
              color: Colors.black,
              marginTop: "10px",
            }}
            onClick={() => handleCloseIcon()}
          />
        </div>

        <div style={styles.navlinkcontainer}>
          <a href="/projectlistpage" style={styles.navitems}>
            <div>Projects</div>
          </a>

          <a href="/blogs" style={styles.navitems}>
            <div>Blogs</div>
          </a>

          <a href="/contactus" style={styles.navitems}>
            <div>Contact us</div>
          </a>
          <a href="/" style={styles.navitems}>
            <div>Home</div>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

const styles = {
  cardheadings: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "bolder",
    color: Colors.fontcolor,
    fontSize: "12px",
    width: "100%",
    padding: "10px",
    justifyContent: "space-between",
  },

  pixelTitle: {
    fontWeight: "bold",
    fontSize: "16px",
    color: Colors.black,
    margin: "7px ",
  },
  windowsizeTitle: {
    width: "93%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  showcarditems: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "normal",
    alignItems: "center",
    color: Colors.fontcolor,
    justifyContent: "space-between",
  },

  navlinkcontainer: {
    display: "flex",
    fontSize: "18px",
    fontWeight: "bold",
    color: Colors.secondary,
    // backgroundColor: "rgba(90, 158, 235, 0.555)",
    borderRadius: "55px",
    marginTop: "70px",
    height: "70vh",
    width: "240px",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "no-wrap",
  },

  navitems: {
    display: "flex",
    margin: "12px",
    backgroundColor: Colors.try3,
    borderRadius: "10px",
    width: "150px",
    height: "65px",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: "200px",
    textDecoration: "none",
    fontSize: "18px",
    color: Colors.third,
  },
};

export default Sidebar;
