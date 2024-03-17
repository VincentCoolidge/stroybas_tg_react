import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
  gap: 15px;
`;

export const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 15px;
`;

export const Img = styled.img`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  object-fit: cover;
  height: 240px;
  width: 100%;
`;
