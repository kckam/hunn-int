import { useEffect } from "react";
import { Styled } from "./style";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";

function Index({ children, show, setShow }) {
  const transition = useTransition(show, {
    from: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -20 },
  });

  useEffect(() => {
    if (show) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "initial";
    }

    return () => {
      document.querySelector("body").style.overflow = "initial";
    };
  }, [show]);

  return transition(
    (style, show) =>
      show && (
        <Styled
          style={style}
          onClick={() => {
            setShow(false);
          }}
        >
          {children}
        </Styled>
      )
  );
}

export default Index;
