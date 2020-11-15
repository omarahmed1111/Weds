import styled from "styled-components";

const CategoriesWrapper = styled.ul`
  background-color: #000;
  display: flex;
  height: 10rem;
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 10rem;
  list-style: none;
  align-items: center;
`;
const CategoriesItem = styled.li`
  color: #fff;
  margin-right: 1rem;
  margin-left: 1rem;
  border-style: solid;
  border-color: blue;
  flex-wrap: wrap;
  height: 10%;
  padding: 0.3rem;
`;

export { CategoriesWrapper, CategoriesItem };
