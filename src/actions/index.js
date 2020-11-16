
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

export const updateCards = (cards) => {
  return {
    type: "UPDATE_CARDS",
    payload: cards,
  };
};

export const updateLoading = (loadingState) => {
  return {
    type: "UPDATE_LOADING",
    payload: loadingState,
  };
};

export const updateCurrentPage = (currentPage) => {
  return {
    type: "UPDATE_CURRENT_PAGE",
    payload: currentPage,
  };
};

export const updateCardsPerPage = (cardsPerPage) => {
  return {
    type: "UPDATE_CARDS_PER_PAGE",
    payload: cardsPerPage,
  };
};