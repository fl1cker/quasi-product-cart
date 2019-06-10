const ShoppingCartService = () => {
    const shoppingCartList = initializeCart();
    const appliedDiscounts = [];

    function initializeCart() {
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
    
    const addItemToCart = (item) => {
        shoppingCartList.push(item);
    }

    const removeItemFromCart = (itemIndex) => {
        shoppingCartList.splice(itemIndex, 1);
    }

    const calculateCartPreviewTotal = () => {
        let sum = 0;
        shoppingCartList.forEach(item => {
            sum += (item.cost * item.quantity);
        })

        return sum;
    } 

    const calculateCartFinalTotal = () => {
        const previewTotal = calculateCartPreviewTotal();
        const shippingCosts = calculateShipping();
        const discounts = calculateDiscounts();
        return previewTotal + shippingCosts - discounts;
    } 

    const calculateShipping = () => {
        // Determine Shipping 
        return 0;
    }

    const calculateDiscounts = () => {
        // Apply all related discounts
        return 0;
    }

    return {
        shoppingCartList,
        appliedDiscounts,
        addItemToCart,
        removeItemFromCart,
        calculateCartPreviewTotal,
        calculateCartFinalTotal,
        calculateShipping,
        calculateDiscounts,
    }
} 
    
export default ShoppingCartService;