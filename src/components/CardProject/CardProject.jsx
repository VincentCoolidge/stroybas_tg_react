import React from "react";
import { Card, Img, Box } from "./styled";
import Button from "../Button";

const CardProject = ({ item }) => {
  const { title, img } = item;

  if (!img?.type) {
    return <></>;
  }

  return (
    <Card>
      <Img src={img?.type} />
      <Box>
        <span>{title}</span>
        <Button>Скачать проект</Button>
      </Box>
    </Card>
  );
};

export default CardProject;
