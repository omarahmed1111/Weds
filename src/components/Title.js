import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  StyledTitle,
  TitleHeading,
  TitleIcon,
} from "../styled_components/title";

export default function Title(props) {
  const [title, setTitle] = useState("");

  const fetchTitle = async () => {
    const res = await axios.get(
      `http://localhost:3000/categories/${
        props.category_id ? props.category_id : 1
      }`
    );
    setTitle(res.data.title);
  };

  useEffect(() => {
    fetchTitle();
  }, []);

  return (
    <StyledTitle>
      <TitleHeading>
        <Link to="/categories">Gallery</Link>
      </TitleHeading>
      <TitleIcon className="fa fa-angle-right"></TitleIcon>
      <TitleHeading>{title}</TitleHeading>
    </StyledTitle>
  );
}
