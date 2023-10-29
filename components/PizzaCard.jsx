'use client'
import Image from 'next/image'; // Import 'Image' from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, incrementPizza, decrementPizza} from '@/redux/cartSlice'
import {getPizzaQuantityInCart} from "@/utils/pizzaNumberOnCart";

export default function PizzaCard({ pizza }) {
    const { id, title, description, price, image } = pizza;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const isPizzaInCart = cart.some(item => item.id === id);
    const pizzaNumberOnCart = getPizzaQuantityInCart(cart,id);

    const addPizzaToCart =()=>{
        dispatch(addToCart(pizza));
    };
    const decreaseNumberOfPizza = () =>{
        dispatch(decrementPizza(id));
    };

    const increaseNumberOfPizza = () =>{
        dispatch(incrementPizza(id))
    };

    return (
        <>
            <div className="max-w-sm rounded-md overflow-hidden shadow-red-500 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-103 flex flex-col">
                <div style={{ position: 'relative' }}>
                    <img src={image} width={100} height={100} alt="Product Image" className="w-full" />
                    {isPizzaInCart ?(
                    <div className="px-4 py-4 bg-gray-400 text-white rounded bg-opacity-50" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }}>
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-semibold text-white">{price} UHA</span>
                            <div className="flex space-x-1">
                                <button className="p-2 font-bold w-[40px] h-[40px] text-white bg-[#CA0123] rounded-full" id="decrement" onClick={decreaseNumberOfPizza}>-</button>
                                <span id="quantity" className="p-2 w-[30px]">{pizzaNumberOnCart}</span>
                                <button className="p-2 font-bold w-[40px] h-[40px] text-white bg-[#CA0123] rounded-full" id="increment" onClick={increaseNumberOfPizza}>+</button>
                            </div>
                        </div>
                    </div>):''}
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
                {!isPizzaInCart?
                    (<div className="px-6 py-4 mt-auto">
                    <button className="bg-[#CA0123] hover:bg-[#990000] text-white font-bold py-4 px-6 rounded-full w-full "  onClick={addPizzaToCart}>Add to Cart</button>
                </div>):''}
            </div>

        </>
    );
}

