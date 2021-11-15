import React from "react";
import "../components/styles/extra.css";

function HomeItemBox() {
  return (
    //check the main style in extra.css
    <div className="homecontent">
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/215"
          alt="display image1"
        />
      </div>

      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/205"
          alt="display image2"
        />
      </div>
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/204"
          alt="display image3"
        />
      </div>
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/201"
          alt="display image4"
        />
      </div>
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/206"
          alt="display image5"
        />
      </div>
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/208"
          alt="display image6"
        />
      </div>
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/275"
          alt="display image7"
        />
      </div>
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/275"
          alt="display image7"
        />
      </div>
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/265"
          alt="display image7"
        />
      </div>
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/255"
          alt="display image7"
        />
      </div>
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://picsum.photos/295"
          alt="display image7"
        />
      </div>
      <div style={styles.cardbox}>
        <img
          style={styles.contentimage}
          src="https://www.creativefaze.com/sites/default/files/android-app-developer-Specialist111.jpg"
          alt="display image8"
        />
      </div>
    </div>
  );
}

const styles = {
  cardbox: {
    height: "150px",
    width: "150px",

    borderRadius: "25px",
    margin: "10px",
  },
  contentimage: {
    width: "150px",
    height: "150px",
    borderRadius: "15px",
  },
};

export default HomeItemBox;
