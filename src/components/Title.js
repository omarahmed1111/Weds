import React from "react";
import {
  StyledTitle,
  TitleHeading,
  TitleIcon,
} from "../styled_components/title";

export default function Title(props) {
  return (
    <StyledTitle>
      <TitleHeading>Gallery</TitleHeading>
      <TitleIcon className="fa fa-angle-right"></TitleIcon>
      <TitleHeading>{props.title}</TitleHeading>
    </StyledTitle>
  );
}
