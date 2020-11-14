import styled from "styled-components";

const HeaderLink = styled.a`
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-size: 13.4px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  text-decoration: none;
  color: #000;
`;

const HeaderList = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderListItem = styled.li`
  list-style-type: none;
  position: relative;
  padding: 12px 7px;
  text-align: center;
`;

const StyledHeader = styled.header`
  margin-left: 5.5rem;
  margin-top: 4.5rem;
`;

const HeaderSection = styled.div`
  width: 43%;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 15px;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
`;

const DropDown = styled.div`
  list-style-type: none;
  text-align: center;
  box-sizing: border-box;
  display: none;
  min-width: 100% !important;
  top: 44px;
  left: 0;
  z-index: 9999;
  position: absolute;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export {
  StyledHeader,
  HeaderLink,
  HeaderList,
  HeaderListItem,
  HeaderSection,
  DropDown,
};
