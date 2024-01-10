import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>خدمات فريق </span>
        <span>Cyber​​Pro</span>
        <spane>
          نحن فريق من المهندسين والمطورين ذوي الخبرة في مجال تصميم الأنظمة،
          ولدينا الخبرة
          <br />
          هناك العديد من الخدمات التي بقدمها فريق سيبر .
        </spane>
        <a href={Resume} download>
          <button className="button s-button">تحميل الخدمات </button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ right: "25rem" }}
          whileInView={{ right: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"التصميم"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ right: "-11rem", top: "12rem" }}
          whileInView={{ right: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"التطوير"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", right: "25rem" }}
          whileInView={{ right: "12rem" }}
          transition={transition}
        >
          
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "تبحث عن فريق محترف لتلبية احتياجاتك في مجال التصميم؟ إذاً، فأنت في المكان المناسب! فريق التصمي"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
