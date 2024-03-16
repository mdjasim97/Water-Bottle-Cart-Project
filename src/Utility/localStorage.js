const getStoreCart = () => {
    const cartStoreString = localStorage.getItem('cart');
    if (cartStoreString) {
        return JSON.parse(cartStoreString)
    }
    return [];
}


const saveCartToLS = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


const addToLS = id => {
    const cart = getStoreCart()
    cart.push(id)
    saveCartToLS(cart)
}

const removeFromLS = id => {
    const cart = getStoreCart()
    const remainning = cart.filter(idx => idx !== id);
    saveCartToLS(remainning)

}


export { getStoreCart, addToLS, removeFromLS }