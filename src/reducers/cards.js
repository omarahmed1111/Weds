const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_CARDS":
      return action.payload;
    default:
      return state;
  }
};

export default cardsReducer;
