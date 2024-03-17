import React from "react";
import { Card } from "./styled";

const CardProject = ({ title }) => {
  return (
    <Card>
      {/* <img className="list_item_img_projects" src={Img11} /> */}
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
