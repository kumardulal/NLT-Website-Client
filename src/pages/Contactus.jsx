import React from "react";
import Colors from "../components/collections/Color";
import ContactForm from "../components/ContactForm";

import SocialMediaView from "../components/SocialMediaView";

// import one from "../assets/lottiefiles/one.json";

function Contactus() {
  return (
    <div style={styles.firstmain}>
      <div style={styles.contactSocialWrapper}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "auto",
            width: "80%",
          }}
        >
          <div
            style={{
              height: "8px",
              backgroundColor: Colors.four,
              width: "70%",
              borderTopRightRadius: "50px",
              borderTopLeftRadius: "50px",
            }}
          ></div>
          <div
            style={{
              height: "8px",
              backgroundColor: Colors.six,
              width: "80%",
              margin: "10px ",
              borderTopRightRadius: "50px",
              borderTopLeftRadius: "50px",
            }}
          ></div>
        </div>

        <ContactForm />
        <SocialMediaView />
      </div>

      {/* //end of social media container */}
    </div>
  );
}

const styles = {
  contactSocialWrapper: {
    display: "flex",
    position: "static",
    flexDirection: "row",
    width: "100% ",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",

    // backgroundColor: Colors.try2,
  },
  firstmain: {
    marginTop: "5px",
    display: "flex",
    position: "static",
    width: "100% ",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    Padding: "10px",

    // backgroundColor: Colors.try2,
  },
};

export default Contactus;
