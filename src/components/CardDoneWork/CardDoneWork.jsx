import {
  Card,
  Column,
  Img,
  Title,
  Box,
  LabelPrice,
  Price,
  Abbr,
} from "./styled";

import Button from "../Button";

const CardDoneWork = ({ item }) => {
  const { date, price, title, img } = item;

  console.log("title", title);

  if (!img?.type) {
    return <></>;
  }

  return (
    <Card>
      <Column>
        <Img src={img?.type} />
        <Title>{title}</Title>
        <Box>
          <LabelPrice>
            Стоимость <br /> строительства от
          </LabelPrice>
          <div>
            <Price>{price}</Price> <Abbr>руб</Abbr>
          </div>
        </Box>
        <Box>
          <LabelPrice>Дата постройки</LabelPrice>
          <div>
            <Price>{date}</Price>
          </div>
        </Box>
        <Button
        //   onClick={() => onButtonClick(PdfOurWork1)}
        >
          Скачать документ
        </Button>
      </Column>
    </Card>
  );
};

export default CardDoneWork;
