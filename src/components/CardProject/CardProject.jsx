import React from "react";
import { Card, Img, Box, Title } from "./styled";
import Button from "../Button";
import { saveDocument } from "../../utils/saveDocument";

const CardProject = ({ item }) => {
  const { title, img, documentPDF } = item;

  if (!img?.type) {
    return <></>;
  }

  return (
    <Card>
      <Img src={img?.type} />
      <Box>
        <Title>{title}</Title>
        <Button
          onClick={() => {
            saveDocument(documentPDF);
          }}
        >
          Скачать проект
        </Button>
      </Box>
    </Card>
  );
};

export default CardProject;
