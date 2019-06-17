const initialState = {
    shoppingCartList: [],
}

const cartManager = (state = initialState, action) => {
    console.log('received action: ', action);
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                shoppingCartList: state.shoppingCartList.push(action.data)
            };
        case 'REMOVE_ITEM':
            const newList = [...state.shoppingCartList];
            newList.splice(action.index, 1);
            return {
                ...state,
                shoppingCartList: newList
            }

        default: return state;
    }
}

export default cartManager;