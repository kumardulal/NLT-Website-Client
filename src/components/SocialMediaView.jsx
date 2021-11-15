import React from "react";
import socialMedia from "../components/collections/SocialMedia";
import { SiTiktok } from "react-icons/si";
import {
  AiOutlineFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineWechat,
} from "react-icons/ai";
import Colors from "./collections/Color";
export default function SocialMediaView() {
  return (
    <div style={styles.socialmediacontainer}>
      <div style={styles.socialMediamaintitle}>
        <AiOutlineWechat />
        SOCIAL MEDIA
      </div>
      <a href={socialMedia.facebook} style={styles.rightcontaineritems}>
        <div style={styles.iconstyle}>
          <AiOutlineFacebook />
        </div>
        <div style={styles.smtext}>facebook</div>
      </a>

      <a style={styles.rightcontaineritems} href={socialMedia.youtube}>
        <div style={styles.iconstyle}>
          <AiFillYoutube />
        </div>
        <div style={styles.smtext}>YouTube</div>
      </a>

      <a style={styles.rightcontaineritems} href={socialMedia.twitter}>
        <div style={styles.iconstyle}>
          <AiFillTwitterCircle />
        </div>
        <div style={styles.smtext}>Twitter</div>
      </a>

      <a style={styles.rightcontaineritems} href={socialMedia.linkedin}>
        <div style={styles.iconstyle}>
          <AiFillLinkedin />
        </div>
        <div style={styles.smtext}>LinkedIn</div>
      </a>

      <a style={styles.rightcontaineritems} href={socialMedia.instragram}>
        <div style={styles.iconstyle}>
          <AiOutlineInstagram />
        </div>
        <div style={styles.smtext}>Instragram</div>
      </a>

      <a style={styles.rightcontaineritems} href={socialMedia.tiktok}>
        <div style={styles.iconstyle}>
          <SiTiktok />
        </div>
        <div style={styles.smtext}>Tiktok</div>
      </a>
    </div>
  );
}
const styles = {
  socialmediacontainer: {
    margin: "10px",
    width: "96%",
    height: 480,
    backgroundColor: Colors.seven,
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    maxWidth: "500px",
    transition: "  ease-in-out",
    alignItems: "center",
  },
  socialMediamaintitle: {
    width: "75%",
    padding: "15px",
    fontSize: "25px",
    backgroundColor: Colors.four,
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
    color: Colors.one,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "10px",
  },
  rightcontaineritems: {
    width: "45%",
    height: "60px",
    backgroundColor: Colors.five,
    margin: "10px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    textDecoration: "none",
  },
  smtext: {
    fontWeight: "bold",
    color: Colors.one,
    fontSize: "22px",
  },
  iconstyle: {
    marginRight: "12px",
    marginTop: "5px",
    fontWeight: "bold",
    fontSize: "30px",
    color: Colors.text1,
  },
};
