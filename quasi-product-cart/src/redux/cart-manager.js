function mockShoppingCartList() {
    return [{
        id: 0,
        imageUrl: 'images/products/just-shapes-and-beats.jfif',
        cost: 8.00,
        name: 'Just Shapes and Beats',
        description: 'Beserk Studios',
        details: ["digital"],
        quantity: 1,
      },
      {
        id: 1,
        imageUrl: 'images/products/breath-of-the-wild.jpg',
        cost: 60.00,
        name: 'Breath Of The Wild',
        description: 'Nintendo',
        details: ["physical", "Spec. Ed."],
        quantity: 2,
      },
      {
        id: 2,
        imageUrl: 'images/products/halo-reach.png',
        cost: 8.00,
        name: 'Halo Reach',
        description: 'Bungie Studios',
        details: ["physical"],
        quantity: 1,
      },];
}

function calculateCartTotal (shoppingCartList) {
        return shoppingCartList.reduce((a, b) => a + (b.cost * b.quantity), 0).toFixed(2);
}

const initialState = {
    shoppingCartList: [].concat(mockShoppingCartList()),
    calculateCartTotal: calculateCartTotal
}

const cartManager = (state = initialState, action) => {
    console.log('received action: ', action);
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state
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