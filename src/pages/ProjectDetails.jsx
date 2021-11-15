import React from "react";
import Colors from "../components/collections/Color";
import ResponsivePlayer from "../components/smallcomponents/Video/ResponsivePlayer";

export default function ProjectDetails(props) {
  const projectdata = props.history.location.state.pdata;
  console.log(projectdata);
  return (
    <div style={styles.productdetailmainCont}>
      <div style={{ height: "12vh" }}></div>
      <div style={styles.projecttitle}>
        PROJECT : {projectdata.projectname}{" "}
      </div>

      {/* start */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <div style={styles.videoplayerdiv}>
          <ResponsivePlayer videolink={projectdata.projectvideolink} />
        </div>

        <div style={styles.introdiv}>
          <div
            style={{
              width: "80%",
              fontSize: "13px",
              minWidth: "250px",
              maxWidth: "800px",
            }}
          >
            INTRO: {projectdata.projectintro}
          </div>
        </div>
      </div>
      {/* end */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1600px",
          backgroundColor: Colors.four,
          alignSelf: "center",
          borderRadius: "20px",
        }}
      >
        <div style={styles.descproject}>
          <div>FEATURE 1</div>
        </div>
        <div style={styles.descproject}>
          <div>FEATURE 2</div>
        </div>
        <div style={styles.descproject}>
          <div>FEATURE 3</div>
        </div>
        <div style={styles.descproject}>
          <div>FEATURE 4</div>
        </div>
        <div style={styles.descprojectlast}>
          description : {projectdata.projectdesc}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "25px",
        }}
      >
        <div>I LIVE INSIDE THOSE VIBRATION</div>
      </div>
    </div>
  );
}
const styles = {
  productdetailmainCont: {
    display: "flex",

    flexDirection: "column",
    justifyContent: "space-around",
    alignItem: "center",
    width: "100%",
    backgroundColor: Colors.four,
    color: Colors.text1,
  },
  projecttitle: {
    height: "45px",
    width: "85%",
    fontWeight: "bold",
    fontSize: "20px",
    color: Colors.text1,
    marginLeft: "10%",
    backgroundColor: Colors.five,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
    minWidth: "200px",
    maxWidth: "800px",
  },
  videoplayerdiv: {
    width: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
    maxWidth: "800px",
    border: "solid 10px",
    borderRadius: "20px",
  },
  introdiv: {
    margin: "10px",
    backgroundColor: Colors.six,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    width: "95%",
    maxWidth: "820px",
  },
  descproject: {
    width: "98%",
    height: "200px",
    margin: "12px",
    backgroundColor: Colors.seven,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "300px",
  },
  descprojectlast: {
    width: "80%",
    height: "300px",
    backgroundColor: Colors.six,
    borderRadius: "10px",
    margin: "10px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    maxWidth: "1800px",
    padding: "20px",
  },
};
