import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {decrementPizza, incrementPizza, removeFromCart} from '@/redux/cartSlice';
import {totalPriceInCart} from "@/utils/totalPriceInCart";
export default function PizzaInCart({pizza}){

    const { id, title, price, image, quantity, description } = pizza;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const totalPrice = totalPriceInCart(cart, id);

    const decreaseNumberOfPizza = () =>{
        dispatch(decrementPizza(id));
    };

    const increaseNumberOfPizza = () =>{
        dispatch(incrementPizza(id));
    };
    const removePizzaFromCart = () =>{
        dispatch(removeFromCart(id));
    };

    return(
        <div className="container text-center">
            <div className="body flex justify-between items-center text-center mb-4">
                <div className="image w-24 flex-1 text-xs flex justify-center rounded-md overflow-hidden ">
                    <Image className='flex justify-center' src={image} height={90} width={65} alt='pizza' />
                </div>
                <p className='flex-1 text-xs'>{title}</p>
                <p className='flex-1 text-xs hidden md:flex justify-center'>UHA {price}</p>
                <p className='flex-1 text-xs hidden md:flex'>{description}</p>
                <div className="buttons text-xs flex justify-center flex-1 hidden md:flex justify-center">
                    <div className="flex space-x-1">
                        <button className="p-2 font-bold w-[40px] h-[40px] text-white bg-[#CA0123] rounded-full" id="decrement" onClick={decreaseNumberOfPizza}>-</button>
                        <span id="quantity" className="p-2 w-[30px]">{quantity}</span>
                        <button className="p-2 font-bold w-[40px] h-[40px] text-white bg-[#CA0123] rounded-full" id="increment" onClick={increaseNumberOfPizza}>+</button>
                    </div>

                </div>
                <div className='flex-1 text-xs flex-col'> {totalPrice}<button className='text-white w-[20px] m-1 bg-black' onClick={removePizzaFromCart}>X</button></div>
            </div>
        </div>

    )

}
