import React, { useState, useEffect } from "react";
import axios from "axios";

import { categoriesWrapper } from "../styled_components/category";

export default function Category(props) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchCards = async () => {
    const res = await axios.get(
      `http://localhost:3000/categories`
    );
    setCategories(res.data);
    setLoading(false);
  };

  return <categoriesWrapper></categoriesWrapper>;
}
