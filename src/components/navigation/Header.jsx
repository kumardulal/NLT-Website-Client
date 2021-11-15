import React, { useState } from "react";
import { AiOutlineUnorderedList, AiOutlineRadarChart } from "react-icons/ai";

import Sidebar from "./Sidebar";
import Colors from "../collections/Color";
import { BrowserRouter } from "react-router-dom";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [menubarstate, setMenuBarState] = useState(<AiOutlineUnorderedList />);

  function handlemenuCLick() {
    if (menuToggle === false) {
      setMenuToggle(true);
      setMenuBarState(<AiOutlineUnorderedList />);
      // setMenuBarState(<AiFillCloseCircle />);
    } else {
      setMenuBarState(<AiOutlineUnorderedList />);
      setMenuToggle(true);
    }
  }

  return (
    <BrowserRouter>
      <div style={styles.headersidebarflex}>
        <div className="header" style={styles.header}>
          <a
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "green",
              textDecoration: "none",
              marginLeft: "30px",
            }}
            href="/"
          >
            <div style={{ fontSize: "45px", color: Colors.one }}>
              <AiOutlineRadarChart />
            </div>
            <div style={styles.headerfont}> New Leaders Tech</div>
          </a>

          <div style={styles.iconMenu} onClick={() => handlemenuCLick()}>
            {menubarstate}
          </div>
        </div>

        <div>
          <Sidebar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        </div>
      </div>
    </BrowserRouter>
  );
}
const styles = {
  headersidebarflex: {
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    alignItems: "initial",
  },
  header: {
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.four,
    padding: "10px",
    fontFamily: "Arial",
    height: "9%",
    width: "100%",
    top: "0px",
    borderTopRightRadius: "25px",
  },
  iconMenu: {
    marginRight: "30px",
    fontSize: "45px",
    color: Colors.try4,
    padding: "10px",
  },
  headerfont: {
    color: Colors.text1,
    fontSize: "18px",
    fontWeight: "bolder",
  },
};

export default Header;

//  <Media queries={{
//     small: "(max-width: 599px)",
//     medium: "(min-width: 600px) and (max-width: 1199px)",
//     large: "(min-width: 1200px)"
// }}>
//     {matches => (
//         <div style={styles.header}>
//             {matches.small && <p>I am small!</p>}
//             {matches.medium && <p>I am medium!</p>}
//             {matches.large && <p>I am large!</p>}
//         </div>
//     )}
// </Media>
