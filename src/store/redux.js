const initialState = {};

export const shoppingBasketAction = (data) => {
  return {
    type: "PRODUCT",
    data: data,
  };
};

const shoppingBasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT": {
      return {
        ...state,
        id: action.data.id,
        name: action.data.name,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default shoppingBasketReducer;
