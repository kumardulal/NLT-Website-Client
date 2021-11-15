import React from "react";
import Colors from "../components//collections/Color";

function BlogDetailsPage(props) {
  const blogdata = props.history.location.state.blogdata;
  console.log(blogdata.blogtitle);
  return (
    <div style={styles.starting}>
      <div style={{ height: "12vh" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1400px",
          flexDirection: "column",
          backgroundColor: Colors.seven,

          border: `solid 2px ${Colors.five}`,
        }}
      >
        <div style={styles.blogtitle}>
          <div style={styles.blogtitletext}>
            Blog Title: {blogdata.blogtitle}
          </div>
        </div>

        <img
          src={blogdata.blogimage}
          style={styles.blogimage}
          alt="blog post cover"
        />
        <div style={styles.blogdivs}>
          <div style={styles.blogintrotext}>Intro: {blogdata.blogintro}</div>
        </div>
        {/* blogdescription here */}
        <div style={styles.blogdivs}>
          <div style={styles.blogdesc}>{blogdata.blogdesc}</div>
        </div>

        <div style={styles.blogdivs}>
          <div style={styles.blogConclusion}>{blogdata.blogconclu}</div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  starting: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  blogtitle: {
    height: "70px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: Colors.seven,
  },
  blogtitletext: {
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "21px",
    color: Colors.try3,
  },
  blogimage: {
    height: "auto",
    width: "92%",
    // backgroundImage: `URL(${Picture.homewall})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    maxHeight: "556px",
    minHeight: "230px",
    borderRadius: "5px",
    margin: "5px",
  },
  blogdivs: {
    width: "90%",
    height: "auto",
    margin: "20px auto",
    backgroundColor: Colors.seven,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "12px",
  },
  blogintrotext: {
    textAlign: "left",
    color: Colors.text1,
    fontSize: "16px",
    margin: "6px",
  },
  blogdesc: {
    padding: "10px",
    textAlign: "left",
    fontSize: "16px",
    color: Colors.text1,
  },
  blogConclusion: {
    color: Colors.text1,
    fontSize: "16px",
  },
};

export default BlogDetailsPage;
