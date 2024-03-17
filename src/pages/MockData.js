import ProjectImg1 from "../assets/project/attic/1_project/1.jpg";
import ProjectImg2 from "../assets/project/attic/2_project/2.jpg";
import ProjectImg3 from "../assets/project/attic/3_project/3.jpg";
import ProjectImg4 from "../assets/project/one-story/1_project/1.jpeg";
import ProjectImg5 from "../assets/project/one-story/2_project/2.jpg";
import ProjectImg6 from "../assets/project/one-story/3_project/3.jpg";
import ProjectImg7 from "../assets/project/two-story/1_project/1.jpg";
import ProjectImg8 from "../assets/project/two-story/2_project/2.jpg";
import ProjectImg9 from "../assets/project/two-story/3_project/3.jpg";

import ProjectDock1 from "../assets/project/attic/1_project/1.pdf";
import ProjectDock2 from "../assets/project/attic/2_project/2.pdf";
import ProjectDock3 from "../assets/project/one-story/1_project/1.pdf";
import ProjectDock4 from "../assets/project/attic/1_project/1.pdf";
import ProjectDock5 from "../assets/project/attic/1_project/1.pdf";
import ProjectDock6 from "../assets/project/attic/1_project/1.pdf";
import ProjectDock7 from "../assets/project/attic/1_project/1.pdf";
import ProjectDock8 from "../assets/project/attic/1_project/1.pdf";

import OurWorkImg1 from "../assets/our-works/our-work_1.webp";
import OurWorkImg2 from "../assets/our-works/our-work_2.webp";
import OurWorkImg3 from "../assets/our-works/our_work_3.webp";
import OurWorkImg4 from "../assets/our-works/our_work_4.webp";
import OurWorkImg5 from "../assets/our-works/our_work_5.webp";
import OurWorkImg6 from "../assets/our-works/our_work_6.webp";

export const projects = [
  {
    id: "project_1",
    title:
      "1 этаж, площадь застройки 96,3 кв.м., площадь здания 75,23 кв.м., 3спальни",
    img: <ProjectImg1 />,
    documentPDF: ProjectDock1,
  },
  {
    id: "project_2",
    title:
      "1 этаж, площадь застройки 124 кв.м., площадь здания 82,8кв.м., 3 спальни, 2 с/у, терраса",
    img: <ProjectImg2 />,
  },
  {
    id: "project_3",
    title:
      "1 этаж, площадь застройки 156,8 кв.м., площадь здания 110кв.м., 4 спальни, 2 с/у, терраса",
    img: <ProjectImg3 />,
  },
  {
    id: "project_4",
    title:
      "мансардный, площадь застройки 77 кв.м., площадь здания 49кв.м., 2 спальни, подходит для участков с фасадом от 13метров!",
    img: <ProjectImg4 />,
  },
  {
    id: "project_5",
    title:
      "мансардный, площадь застройки 107,2 кв.м., площадь здания 70кв.м., 2 спальни, гостевая комната, терраса",
    img: <ProjectImg5 />,
  },
  {
    id: "project_6",
    title:
      "мансардный, площадь застройки 107,2 кв.м., площадь здания 70кв.м., 2 спальни, гостевая комната, терраса",
    img: <ProjectImg6 />,
  },
  {
    id: "project_7",
    title:
      "2 этажа, площадь застройки 127 кв.м., площадь здания 163,6кв.м., 4 спальни, кабинет, 2 с/у, терраса",
    img: <ProjectImg7 />,
  },
  {
    id: "project_8",
    title:
      "2 этажа, площадь застройки 98,7 кв.м., площадь здания 129кв.м., 3 спальни, кабинет, 2 с/у, терраса",
    img: <ProjectImg8 />,
  },
  {
    id: "project_9",
    title:
      "2 этажа, площадь застройки 127 кв.м., площадь здания 180кв.м., 4 спальни, 3 с/у, и террасы",
    img: <ProjectImg9 />,
  },
];

export const doneProjects = [
  {
    id: "done_work_1",
    title: `Дом из кирпича 93кв.м. ПЧО, 3 спальни`,
    price: "4190000",
    date: "13.09.2023",
    img: <OurWorkImg1 />,
  },
  {
    id: "done_work_2",
    title: `Дом из керамзито-бетонного блока с чистовой отделкой 310кв.м.`,
    price: "9787000",
    date: "28.10.2022",
    img: <OurWorkImg2 />,
  },
  {
    id: "done_work_3",
    title: `Дом из кирпича Poromax 245кв.м. в ПЧО`,
    price: "12436000",
    date: "02.11.2022",
    img: <OurWorkImg3 />,
  },
  {
    id: "done_work_4",
    title: `Дом из керамзито-бетонного блока. 145кв.м. в ПЧО`,
    price: "6977000",
    date: "11.11.2022",
    img: <OurWorkImg4 />,
  },
  {
    id: "done_work_5",
    title: `Коммерческое здание с отделкой и мебелью. 182кв.м.`,
    price: "11434000",
    date: "03.03.2023",
    img: <OurWorkImg5 />,
  },
  {
    id: "done_work_6",
    title: `Дом из керамзито-бетонного блока. 88кв.м. в ПЧО`,
    price: "4690000",
    date: "17.03.2023",
    img: <OurWorkImg6 />,
  },
];
