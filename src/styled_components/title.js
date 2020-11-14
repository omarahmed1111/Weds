import styled from "styled-components";

const StyledTitle = styled.div`
  width: 92%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-left: 3rem;
`;

const TitleHeading = styled.h3`
  font-family: "Lato", sans-serif;
  line-height: 30px;
  height: 30px;
  text-transform: uppercase;
  display: inline-block;
  font-size: 18px;
  font-weight: 900;
  color: ${(props) => (props.white ? "white" : "black")};
  margin-right: 1rem;
`;

const TitleIcon = styled.i`
  margin-right: 1rem;
`;

export { StyledTitle, TitleHeading, TitleIcon };
