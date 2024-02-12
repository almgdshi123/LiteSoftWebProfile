import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/programing_1613243.png";
import Glasses from "../../img/programming-code-signs_59118.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "../../img/litesoft-02.png";

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
        <span style={{ color: darkMode ? "white" : "" }}>خدمات شركة </span>
        <span>LiteSoft</span>
        <spane>
        نحن نقدم الدعم الفني على مدار 24 ساعة في اليوم و 7 أيام في الأسبوع. لماذا نحن الخيار الأفضل لك؟          <br />
          هناك العديد من الخدمات التي تقدمها شركة لايت سوفت   .
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
            heading={" أنظمتنا المحاسبية"}
            detail={"ادارة محلات الخياطة, ادارة الكهرباء , ادارة المطاعم ,  الانتاج والتصنيع , المراكز الطبية , المحطات "}
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
            heading={" الخدمات البرمجية"}
            detail={"تصميم وتطوير المواقع الإلكترونية, تطوير التطبيقات    , صيانة وتحديث المواقع الإلكترونية والتطبيقات"}
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
            heading={"لماذا تختارنا ؟"}
            detail={
              "  فريق من الخبراء ذوي الخبرة في مختلف المجالات البرمجية , خدمات ما بعد البيع ممتازة"
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
