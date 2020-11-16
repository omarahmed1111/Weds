import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateCategories } from "../actions";
import {
  CategoriesWrapper,
  CategoriesItem,
} from "../styled_components/category";

export default function Category(props) {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    dispatch(updateCategories(res.data));
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
