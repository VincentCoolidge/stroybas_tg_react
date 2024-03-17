import React from "react";
import { projects, doneProjects } from "./MockData";
import { Container, List, Title } from "./styled";

import CardProject from "../components/CardProject";
import CardDoneWork from "../components/CardDoneWork";

const Main = () => {
  return (
    <Container>
      <Title>#Наши проекты</Title>
      <List>
        {projects.map((item) => (
          <CardProject key={item.id} item={item} />
        ))}
      </List>
      <Title>#Готовые работы</Title>
      <List>
        {doneProjects.map((item) => (
          <CardDoneWork key={item.id} item={item} />
        ))}
      </List>
    </Container>
  );
};

export default Main;
