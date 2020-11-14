import React from "react";
import {
  HeaderLink,
  HeaderList,
  HeaderListItem,
  HeaderSection,
  DropDown,
  StyledHeader,
  HeaderImg,
} from "../styled_components/header";

export default function Header(props) {
  return (
    <StyledHeader>
      <HeaderSection>
        <HeaderList>
          <HeaderListItem>
            <HeaderLink>360 Planner</HeaderLink>
            <DropDown>
              <HeaderLink>Check list</HeaderLink>
              <HeaderLink>Budgeter</HeaderLink>
              <HeaderLink>Registry list</HeaderLink>
              <HeaderLink>Wedding Website</HeaderLink>
              <HeaderLink>Couple Website</HeaderLink>
              <HeaderLink>More</HeaderLink>
            </DropDown>
          </HeaderListItem>
          <HeaderListItem>
            <HeaderLink>Her</HeaderLink>
          </HeaderListItem>
          <HeaderListItem>
            <HeaderLink>Him</HeaderLink>
          </HeaderListItem>
          <HeaderListItem>
            <HeaderLink>The Wedding</HeaderLink>
          </HeaderListItem>
        </HeaderList>
      </HeaderSection>

      <HeaderImg
        src="https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png"
        alt="Logo"
      ></HeaderImg>

      <HeaderSection>
        <HeaderList>
          <HeaderListItem>
            <HeaderLink>Vendors</HeaderLink>
          </HeaderListItem>
          <HeaderListItem>
            <HeaderLink>Gallery</HeaderLink>
          </HeaderListItem>
          <HeaderListItem>
            <HeaderLink>Ideas & More</HeaderLink>
          </HeaderListItem>
        </HeaderList>
      </HeaderSection>
    </StyledHeader>
  );
}
