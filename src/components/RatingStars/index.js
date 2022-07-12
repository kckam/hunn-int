import { useState } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { isTouchDevice } from "../../utils";

const SIZE = {
  sm: "20px",
  md: "35px",
  lg: "50px",
};

const allow_half = true;

const NO_OF_ICONS = allow_half ? 10 : 5;

const onPointerMove = (event) => {
  const { clientX, currentTarget } = event;
  const { left, width } = currentTarget.children[0].getBoundingClientRect();

  const positionX = clientX - left;

  const currentValue = calculateCurrentPosition(NO_OF_ICONS, positionX, width);

  return currentValue;
};

function calculateCurrentPosition(totalIcons, positionX, width) {
  const iconWidth = width / totalIcons;
  let currentValue = totalIcons;

  for (let i = 0; i < totalIcons; i += 1) {
    if (positionX <= iconWidth * i + iconWidth / 4) {
      if (i === 0 && positionX < iconWidth / 2) currentValue = 0;
      else currentValue = i;
      break;
    }
  }

  return currentValue;
}

function Index({ value, size = "sm", cb = () => {}, readOnly = true }) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(value * (allow_half ? 2 : 1));

  let handler = !readOnly
    ? {
        onClick: (e) => {
          cb(onPointerMove(e) / (allow_half ? 2 : 1));
        },
        onPointerMove: (e) => {
          setSelected(onPointerMove(e));
        },
        onPointerLeave: () => {
          setSelected(value * (allow_half ? 2 : 1));
        },
      }
    : {};

  function generateStar(type = "") {
    return [...Array(5)].map((_, i) => (
      <svg
        fill="currentColor"
        width={SIZE[size]}
        height={SIZE[size]}
        viewBox="0 0 24 24"
        className="star-svg"
      >
        <path
          fill="currentColor"
          stroke="none"
          strokeMiterlimit="10"
          strokeWidth="0"
          d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
        ></path>
      </svg>
    ));
  }

  return (
    <Styled>
      <div className="icon-wrapper" {...handler}>
        <span className="empty-icons">{generateStar("empty")}</span>
        <span
          className="filled-icons"
          style={{ width: `${(selected * 100) / NO_OF_ICONS}%` }}
        >
          {generateStar()}
        </span>
      </div>
    </Styled>
  );
}

export default Index;
