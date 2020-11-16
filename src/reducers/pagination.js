const currentPageReducer = (state = 1, action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      return action.payload;
    default:
      return state;
  }
};

const cardsPerPageReducer = (state = 6, action) => {
  switch (action.type) {
    case "UPDATE_CARDS_PER_PAGE":
      return action.payload;
    default:
      return state;
  }
};

export { currentPageReducer, cardsPerPageReducer };
