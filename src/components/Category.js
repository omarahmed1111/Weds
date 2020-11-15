import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      {categories.map((category) => {
        return (
          <CategoriesItem key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.title}</Link>
          </CategoriesItem>
        );
      })}
    </CategoriesWrapper>
  );
}
