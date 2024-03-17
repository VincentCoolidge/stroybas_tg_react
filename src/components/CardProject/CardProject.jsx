import React from "react";
import { Card, Img } from "./styled";

const CardProject = ({ item }) => {
  const { title, img } = item;

  if (!img?.type) {
    return <></>;
  }

  return (
    <Card>
      <Img src={img?.type} />
      <div className="list_item_title_projects">{title}</div>
      {/* <button
        onClick={() => onButtonClick(Project11)}
        className="list_item_download-documents_projects"
      >
        Скачать проект
      </button> */}
    </Card>
  );
};

export default CardProject;
