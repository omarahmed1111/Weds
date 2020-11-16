import React from "react";
import {
  HeaderLink,
  HeaderList,
  HeaderListItem,
  HeaderSection,
  DropDown,
  StyledHeader,
  HeaderImg,
  HeaderNavLink,
} from "../styled_components/header";

export default function Header(props) {
  const displayNav = (show, nav) => {
    if (show) {
      nav.style.display = "flex";
    } else {
      nav.style.display = "none";
    }
  };

  return (
    <StyledHeader>
      <HeaderSection>
        <HeaderList>
          <HeaderListItem>
            <HeaderLink
              onMouseEnter={(e) => {
                const nav = e.target.parentNode.lastChild;
                displayNav(true, nav);
              }}
            >
              360 Planner
            </HeaderLink>
            <DropDown
              onMouseLeave={(e) => {
                const nav = e.target.parentNode;

                if (nav.childElementCount === 6) displayNav(false, nav);

                const navAlternative = e.target;
                if (navAlternative.childElementCount === 6)
                  displayNav(false, navAlternative);
              }}
            >
              <HeaderNavLink>Check list</HeaderNavLink>
              <HeaderNavLink>Budgeter</HeaderNavLink>
              <HeaderNavLink>Registry list</HeaderNavLink>
              <HeaderNavLink>Wedding Website</HeaderNavLink>
              <HeaderNavLink>Couple Website</HeaderNavLink>
              <HeaderNavLink>More</HeaderNavLink>
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
