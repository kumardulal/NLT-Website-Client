import React, { useEffect, useState } from "react";
import ApiProjects from "../components/api/ApiProjects";
import Colors from "../components/collections/Color";

function ProjectListPage(props) {
  const { history } = props;
  const [pdata, setProjectData] = useState([]);

  // START FROM HERE NEXT Time
  useEffect(() => {
    ApiProjects(setProjectData);
  }, []);

  return (
    <>
      <div style={styles.mainboxproject}>
        {/* <div style={styles.pagetitleProject}>Projects</div> */}
        <div style={{ height: "12vh" }}></div>
        <input
          placeholder="Search Projects"
          type="text"
          style={styles.searchbox}
        />

        {/* mapping the project values */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "98%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {pdata.map((val, index) => {
            return (
              <div style={styles.blogsList} key={index}>
                <div
                  style={styles.flexitems}
                  onClick={() =>
                    //handle onclick for clicked project
                    history.push({
                      pathname: "/projectlist/projectdetails",
                      state: { pdata: val },
                    })
                  }
                >
                  <div style={styles.cardboxitem}>
                    <img
                      style={styles.contentimage}
                      src={val.projectimage}
                      alt="display image1"
                    />
                    <div style={styles.projecttitleanddate}>
                      <div style={styles.projectproperty_title}>
                        Project: {val.projectname}
                      </div>
                      <div style={styles.updateddate}>
                        Updated Date: 2021/02/05
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const styles = {
  mainboxproject: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100% ",
    right: "0px",
    left: "0px",
    marginRight: "0px",
    marginLeft: "0px",
  },
  pagetitleProject: {
    width: "80%",
    height: "55px",
    backgroundColor: Colors.four,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    fontSize: "25px",
    fontWeight: "bold",
    color: Colors.try3,
    maxWidth: "600px",
    marginTop: "5px",
  },
  blogsList: {
    // backgroundColor: Colors.one,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: "10px",
    marginTop: "10px",
    flexWrap: "wrap",
  },
  flexitems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    height: "auto",
    margin: "10px",
    borderRadius: "30px",

    backgroundColor: Colors.seven,
  },
  cardboxitem: {
    height: "300px",
    width: "100%",
    backgroundColor: Colors.four,
    borderRadius: "25px",
    margin: "10px",
  },
  contentimage: {
    width: "100%",
    height: "202px",
    borderRadius: "15px",
  },
  project_titleanddate: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  projectproperty_title: {
    display: "flex",
    width: "90%",
    height: "30px",
    backgroundColor: Colors.four,
    border: "solid 2px",
    borderRadius: "5px",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    margin: "3px ",
    color: "white",
  },
  updateddate: {
    display: "flex",
    fontSize: "15px",
    color: Colors.try3,
  },
  projecttitleanddate: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  searchbox: {
    width: "75%",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: Colors.one,
    borderColor: Colors.four,
    textAlign: "center",
    maxWidth: "500px",
    minWidth: "200px",
  },
};

export default ProjectListPage;
