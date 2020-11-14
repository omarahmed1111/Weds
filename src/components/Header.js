import React from "react";
import {
  HeaderLink,
  HeaderList,
  HeaderListItem,
  HeaderSection,
  DropDown,
  StyledHeader,
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
    </StyledHeader>
  );
}
