import React, { ReactElement, useState } from "react";


interface PersonProps {
  children?: React.ReactNode;
  val: string;
  fontSize?: string;
  icon?: string;
  width?: string;
  height?: string;
  padding?: string;
  onClick: (val: string) => void;
}

const Nevlist: React.FC<PersonProps> = ({
  children,
  val,
  fontSize,
  icon,
  width,
  height,
  padding,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ padding: padding||"4px", color: isHovered ? "ButtonFace" : "GrayText", backgroundColor: isHovered ? "Highlight" : "ButtonShadow" }}
    >
      <div
        onClick={() => onClick(val)}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        
        {
          icon &&<svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "35"}
            height={height || "35"}
            viewBox="0 0 35 35"
            fill="none"
          >
            <path d={icon} fill= {isHovered ? "ButtonFace" : "GrayText"} />
          </svg>
        }
        <span
          style={{
            marginLeft: icon ? "0.5rem" : "0",
            fontSize: fontSize || "16px",
          }}
        >
          {children}
        </span>{" "}
        {/* แสดงข้อความ */}
      </div>
    </li>
  );
};
export default Nevlist;
