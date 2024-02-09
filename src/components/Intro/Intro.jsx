import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/10259340_4401278.svg";
import glassesimoji from "../../img/9319773_4136916.svg";
import thumbup from "../../img/man_14186390.png";
import crown from "../../img/coding_981895.png";
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
          <span>   LiteSoft </span>

          <span style={{ color: darkMode ? "white" : "" }}> للانظمة والحلول التقنية </span>
          <span>
          نحن شركة برمجيات رائدة في مجال حلول التكنولوجيا. نحن ملتزمون بتقديم حلول تلبي احتياجات السوق وتساعد عملائنا على تحقيق أهدافهم. لدينا فريق من المهندسين والخبراء ذوي الخبرة الذين لديهم فهم عميق للاحتياجات التكنولوجية للشركات.

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
        <img  alt="" />
        <img alt="" />
        <img height={400} src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ right: "-36%" }}
          whileInView={{ right: "-24%" }}
          transition={transition}
          
          height={200}
          alt=""
        />

        <motion.div 
          initial={{ top: "-5%", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="  نقدم الدعم الفني على مدار 24  " text2="  " />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ right: "9rem", top: "18rem" }}
          whileInView={{ right: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv  text1="  فريق من المهندسين والخبراء" text2=" "  img={thumbup} />
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
