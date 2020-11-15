import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  CategoriesWrapper,
  CategoriesItem,
} from "../styled_components/category";

export default function Category(props) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  });

  return (
    <CategoriesWrapper>
      <CategoriesItem>aaaaaaaa</CategoriesItem>
      <CategoriesItem>aaaaaaaa</CategoriesItem>
      <CategoriesItem>aaaaaaaa</CategoriesItem>
    </CategoriesWrapper>
  );
}
