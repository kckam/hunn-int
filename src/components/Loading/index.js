import React from "react";
import { Styled } from "./style";
import { useTransition } from "react-spring";

export default function Index() {
  const transitions = useTransition(null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 500,
  });
  return transitions((styles) => {
    return <Styled style={styles}>Loading</Styled>;
  });
}
