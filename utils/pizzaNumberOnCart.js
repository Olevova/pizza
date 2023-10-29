export function getPizzaQuantityInCart(cart, pizzaId) {
        const pizza = cart.find(item => item.id === pizzaId);

        if (pizza) {
            return pizza.quantity;
        } else {
            return 0;
        }
    }

