import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
`;

export const Img = styled.img`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  object-fit: cover;
  height: 250px;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 20px;
  color: #282828;
  font-weight: 700;
  text-decoration: underline;
  padding: 10px 15px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`;

export const LabelPrice = styled.span`
  line-height: 1.2;
  font-size: 14px;
  align-self: center;
  font-weight: 600;
`;

export const Price = styled.b`
  line-height: 1.3;
  font-size: 25px;
  color: #74bb16;
  font-weight: 700;
`;

export const Abbr = styled.span`
  line-height: 1.2;
  font-size: 14px;
  font-weight: 600;
`;
