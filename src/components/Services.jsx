import React from "react";
import Colors from "./collections/Color";
import {
  FcClapperboard,
  FcGlobe, //website development
  FcApprove, //tick mark
  FcIphone, //mobile app dev
  FcSalesPerformance, //marketing
} from "react-icons/fc";

export default function Services() {
  return (
    <div style={styles.servicemain}>
      <div style={styles.wrapper}>
        <div style={styles.wrappedcontentRight}>
          <div style={styles.wrappedcontentRight1}>
            <div
              style={{
                fontWeight: "bolder",
                fontSize: "30px",
                color: Colors.black,
              }}
            >
              Our Services
            </div>
          </div>
        </div>
        <div style={styles.wrappedcontentLeft}>
          {/* right of left services */}

          <div style={styles.wrappedcontentleftitem}>
            <FcGlobe fontSize="35px" />
            <div style={styles.serviceitem}>Website Development</div>
            <FcApprove fontSize="30px" />
          </div>
          <div style={styles.wrappedcontentleftitem}>
            <FcIphone fontSize="35px" />
            <div style={styles.serviceitem}>Mobile App Development</div>
            <FcApprove fontSize="30px" />
          </div>
          <div style={styles.wrappedcontentleftitem}>
            <FcSalesPerformance fontSize="35px" />
            <div style={styles.serviceitem}>Digital Marketing</div>
            <FcApprove fontSize="30px" />
          </div>
        </div>
        {/* //leftsetvices */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            width: "300px",
            flexWrap: "wrap",
          }}
        >
          <div style={styles.wrappedcontentleftitem}>
            <FcClapperboard fontSize="35px" />
            <div style={styles.serviceitem}>Video Production</div>
            <FcApprove fontSize="35px" />
          </div>
          <div style={styles.wrappedcontentleftitem}>
            <FcSalesPerformance fontSize="35px" />
            <div style={styles.serviceitem}>IT Trainings</div>
            <FcApprove fontSize="35px" />
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  servicemain: {
    height: "auto",
    width: "99%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    marginBottom: "20px",
    // backgroundColor: Colors.seven,
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-around",

    backgroundColor: Colors.seven,
    width: "100%",
    height: "95%",
    margin: "10px",

    flexWrap: "wrap",
  },
  // here right is left and left is right in this style content right and left-mistakely doine
  wrappedcontentRight: {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "270px",
  },
  wrappedcontentRight1: {
    height: "50px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "270px",
  },

  wrappedcontentLeft: {
    height: "90%",
    width: "400px",
    // backgroundColor: "rgba(32, 154, 197, 0.18)",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wrappedcontentleftitem: {
    height: "60px",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "green",
    maxWidth: "1000px",
    justifyContent: "center",
  },
  serviceitem: {
    fontSize: "20px",
    margin: "5px",
    width: "240px",
  },
};
