export const cartAction = (data) => {
    console.log(data);
    return {
        type: "ADD_PRODUCT",
        cart: {
            id: data.id,
            name: data.name,
        },
    };
};

const cartReducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_PRODUCT": {
            return state.concat(action.cart);
        }
        default: {
            return state;
        }
    }
};

export default cartReducer;
