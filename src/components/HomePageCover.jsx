import React from "react";
import Colors from "./collections/Color";
import "../components/styles/extra.css";

function HomePageCover() {
  return (
    <div style={styles.projectpagecontent}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "340px",
          height: "250px",
          backgroundColor: Colors.six,
          justifyContent: "center",
          alignItems: "center",
          margin: "5px",
          borderTopRightRadius: "100px",
          flexWrap: "nowrap",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            color: "white",
            fontWeight: "bold",
            textAlign: "left",
            marginTop: "2px",
          }}
        >
          WHO ARE NEW LEADERS ?
        </div>
        <div
          style={{
            margin: "25px ",
            color: Colors.text1,
            textAlign: "left",
            marginBottom: "10px",
          }}
        >
          New leaders are the people who are engaged in building resources for
          making a vision into reality. Inspired by all global innovative work
          that have potential to solve current and future obstacles and make
          things that seems impossible
          <br />
        </div>
      </div>

      <div style={styles.minbox}>
        <div style={{ color: "white", fontWeight: "bolder", fontSize: "25px" }}>
          WE BELIEVE
        </div>
      </div>

      <div style={styles.minbox2}>
        <div style={{ paddingLeft: "15px" }}>
          We believe that the right understanding and technological edge can
          lead small to big business to conduct quality deliveries and obtain
          organic lead . Contact us for for IT support.
        </div>
      </div>
    </div>
  );
}

const styles = {
  projectpagecontent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "98%",
    justifyContent: "space-around",
    marginTop: "20px ",
    flexWrap: "wrap",
    borderRadius: "5px",
    backgroundColor: Colors.four,
    padding: "10px",
  },
  minbox: {
    display: "flex",
    height: "210px ",
    width: "270px",
    backgroundColor: Colors.four,
    borderRadius: "10px",
    margin: "6px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    padding: "10px",
    color: Colors.try3,
  },
  minbox2: {
    display: "flex",
    height: "250px ",
    width: "320px",

    backgroundColor: Colors.six,
    borderRadius: "10px",
    margin: "6px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    padding: "10px",
    color: Colors.text1,
    borderTopLeftRadius: "150px",
  },
};

export default HomePageCover;
