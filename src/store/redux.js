export const cartAction = (data) => {
    console.log(data);
    return {
        type: "ADD_PRODUCT",
        cart: {
            id: data.id,
            name: data.name,
            img: data.img,
            price: data.price,
            desc: data.desc,
        },
    };
};

export const deleteAction = (id) => {
    console.log(id);
    return {
        type: "DELETE_PRODUCT",
        cart: {
            id: id.id,
        },
    };
};

const cartReducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_PRODUCT": {
            return state.concat(action.cart);
        }
        case "DELETE_PRODUCT": {
            return state.filter((element) => element.id !== action.cart.id);
        }
        default: {
            return state;
        }
    }
};

export default cartReducer;
