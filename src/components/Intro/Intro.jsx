import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>مرحبا! نحن   </span>
          <span>سيبرا برو </span>
          <span>
          تتمتع فرق مطوري الواجهات الأمامية بخبرة واسعة في تصميم الويب والتطوير وإنتاج أعمال الجودة، مما يجعلها الخيار المثالي لمشاريعك.


          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">اتصل بنا </button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ right: "-36%" }}
          whileInView={{ right: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div 
          initial={{ top: "-4%", right: "74%" }}
          whileInView={{ right: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1=" ويب " text2=" Developer " />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ right: "9rem", top: "18rem" }}
          whileInView={{ right: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv text1=" مطورين محترفين" text2="سيبرا برو"  img={thumbup} />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            right: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
