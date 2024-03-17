import React from "react";
import { projects } from "./MockData";
import { Container, List } from "./styled";

import CardProject from "../components/CardProject";

const Main = () => {
  return (
    <Container>
      <List>
        {projects.map((item) => (
          <CardProject key={item.id} item={item} />
        ))}
      </List>
    </Container>
  );
};

export default Main;
