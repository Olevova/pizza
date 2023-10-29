export function totalPriceInCart(cart, pizzaId) {
    const pizza = cart.find(item => item.id === pizzaId);

    if (pizza) {
        return pizza.quantity*pizza.price;
    } else {
        return 0;
    }
}
