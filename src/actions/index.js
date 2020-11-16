export const updateTitle = (title) => {
  return {
    type: "UPDATE_TITLE",
    payload: title,
  };
};

export const updateCategories = (categories) => {
  return {
    type: "UPDATE_CATEGORIES",
    payload: categories,
  };
};
