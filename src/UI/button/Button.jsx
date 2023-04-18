import React from "react";
import styled from "styled-components";
const Button = (props) => {
  console.log(props);
  return <MuiButton onClick={props.onClick}>{props.children}</MuiButton>;
};

export default Button;

const MuiButton = styled("button")`
  margin-right: ${(props) => props.marginRight};
  padding: 18px;
  font-weight: 600;
  color: aliceblue;
  background-color: #4a026b;
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: #72159e;
  }
`;
