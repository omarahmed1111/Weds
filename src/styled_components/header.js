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
const HeaderNavLink = styled.a`
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
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.1rem;
  border-bottom-style: solid;
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
  padding: 12px 3px;
  text-align: center;
`;

const StyledHeader = styled.header`
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 2rem;
  display: flex;
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
  flex-direction: column;
  min-width: 100% !important;
  top: 44px;
  left: 0;
  z-index: 9999;
  position: absolute;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const HeaderImgDiv = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderImg = styled.img`
  width: 70%;
  height: 70%;
  margin-left: 1rem;
`;

export {
  StyledHeader,
  HeaderLink,
  HeaderList,
  HeaderListItem,
  HeaderSection,
  DropDown,
  HeaderImgDiv,
  HeaderImg,
  HeaderNavLink,
};
