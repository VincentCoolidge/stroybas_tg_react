import React from "react";
import { Button } from "./styled";

const ButtonComponent = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);
export default ButtonComponent;
