import styled from "styled-components";

export const Main = styled.div`
  border-bottom: 1px solid #f7f7f7;
`;

export const Content = styled.div`
  min-width: 1050px;
  padding-bottom: 60px;
`;

export const PageArticle = styled.div`
  width: 1050px;
  margin: 0 auto;
`;

export const GoodsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 17px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
