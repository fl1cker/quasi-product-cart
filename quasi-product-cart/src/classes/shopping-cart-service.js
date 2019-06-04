const ShoppingCartService = () => {
    const shoppingCartList = [];
    const appliedDiscounts = [];

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