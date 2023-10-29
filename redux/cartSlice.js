import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const pizza = state.find((item) => item.id === action.payload.id);
            console.log(pizza)
            if (!pizza) {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        decrementPizza: (state, action) => {
            const pizza = state.find((item) => item.id === action.payload);
            if (pizza) {
                if (pizza.quantity > 1) {
                    pizza.quantity -= 1;
                } else {
                    const index = state.findIndex((item) => item.id === action.payload);
                    if (index !== -1) {
                        state.splice(index, 1);
                    }
                }
            }
        },
        incrementPizza: (state, action) => {
            const pizza = state.find((item) => item.id === action.payload);
            if (pizza) {
                pizza.quantity += 1;
            }
        },
        removeFromCart: (state, action) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }

        },
        removeAllPizzasFromCart:(state , action) => {
            return []
        },
    },
});

export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    incrementPizza,
    decrementPizza,
    removeFromCart,
    removeAllPizzasFromCart,
} = cartSlice.actions;
