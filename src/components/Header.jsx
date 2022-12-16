import React from "react";
import "../styles/Header.css";
import { CircularProgressbar } from "react-circular-progressbar";

function Header() {
  let percentage = 9;
  let page = "از 1/11";
  return (
    <div className="Header">
      <img
        src="https://tikkaa.ir/images/tikkaLogo.png"
        alt="یادگیری آنلاین زبان در خانه با پلتفرم برگزاری کلاس آنلاین با هزینه کلاس زبان مناسب با تیکا"
        width="123"
        height="52"
      />
      <div style={{ width: 70, height: 70 }}>
        <CircularProgressbar
          className="Header-progressbar"
          value={percentage}
          text={page}
          styles={{
            root: {},
            path: {
              stroke: `rgba(61, 28, 109,1)`,
              strokeLinecap: "round",
              transition: "stroke-dashoffset 0.5s ease 0s",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center",
            },
            trail: {
              stroke: "#d6d6d6",
              strokeLinecap: "round",
            },
            text: {
              fill: "#3D1C6D",
              fontSize: "16px",
            },
            background: {
              fill: "#3e98c7",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Header;
