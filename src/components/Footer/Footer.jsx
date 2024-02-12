import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>© جميع الحقوق محفوظة 2024. لايت سوفت</span>
        <div className="f-icons">
          <a href="https://www.facebook.com/profile.php?id=100063958034097">
            <Facebook color="white" size={"3rem"} />
          </a>

          <a href="tel:+967 777 926 572">
            <Whatsapp color="white" size={"3rem"} />
          </a>
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
