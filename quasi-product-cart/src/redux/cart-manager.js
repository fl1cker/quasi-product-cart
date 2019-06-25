const initialState = {
    shoppingCartList: [],
    iconHover: false,
    shoppingCartHover: false,
}

const cartManager = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_ITEM':
            const newShoppingCartList = addOrUpdateCart(state.shoppingCartList, action.data);
            return {
                ...state,
                shoppingCartList: newShoppingCartList
            };
        case 'REMOVE_ITEM':
            const newList = [...state.shoppingCartList];
            newList.splice(action.index, 1);
            return {
                ...state,
                shoppingCartList: newList
            }
        case 'SET_ICON_HOVER':
            return {
                ...state,
                iconHover: action.data,
            }
        case 'SET_SHOPPING_CART_HOVER':
            return {
                ...state,
                shoppingCartHover: action.data,
            }

        default: return state;
    }
}

function addOrUpdateCart(shoppingList, product) {
    const newShoppingList = Object.assign([], shoppingList);
    const index = newShoppingList.map(x => x.id).indexOf(product.id);
    if(index >= 0) {
        newShoppingList[index].quantity += 1;
    } else {
        newShoppingList.push({...product, quantity: 1});
    }
    return newShoppingList;
}

export default cartManager;