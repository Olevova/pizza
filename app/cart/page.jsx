"use client"
import PizzaInCart from "@/components/PizzaInCart";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import Link from "next/link";

export default function Page (){
    const cartItem = useSelector((state) => state.cart);
    const getTotalPrice = () => {
        return cartItem.reduce(
            (accumulator, item) => accumulator + item.quantity * item.price,
            0
        );
    };
    const dispatch = useDispatch();
    const cleanCart = () => dispatch(removeAllPizzasFromCart());
    console.log(cartItem, "cart")

    return(
        <main className="flex flex-col flex-1 p-4">
            <h1 className="text-2xl flex justify-center font-extrabold mb-8">Cart Page</h1>
            {cartItem.length === 0 ? (
                <div className="text-center">
                    <h1>Your Cart is Empty!</h1>
                    <Link href='/' className= 'text-[#CA0123] hover:text-[#660000]'>Please, choose pizza here</Link>
                </div>
            ) : (
                <>
                    <div className='flex space-x-1 mb-2'>
                        <div className='flex-1 text-center text-xs font-semibold border-b-2 border-black pb-2 uppercase'>Pizza Image</div>
                        <div className='flex-1 text-center text-xs font-semibold border-b-2 border-black pb-2 uppercase'>Title</div>
                        <div className='flex-1 text-center text-xs font-semibold border-b-2 border-black pb-2 uppercase hidden md:flex justify-center'>Price</div>
                        <div className='flex-1 text-center text-xs font-semibold border-b-2 border-black pb-2 uppercase hidden md:flex justify-center'>Description</div>
                        <div className='flex-1 text-center text-xs font-semibold border-b-2 border-black pb-2 uppercase hidden md:flex justify-center'>Actions</div><div className='flex-1 text-center text-xs font-semibold border-b-2 border-black pb-2 uppercase'>Total Price</div>
                    </div>
                    <div>
                        {cartItem.map((pizza) => {
                            return <PizzaInCart key={pizza.id} pizza={pizza} />;
                        })}
                    </div>
                    <h2 className="text-2xl mb-4 text-center">Total: UAH {getTotalPrice()}</h2>
                    <button className='w-[300px] m-auto bg-[#CA0123] hover:text-[#660000] text-white text-2xl p-4 rounded-3xl' onClick={cleanCart}>Make an order</button>
                </>
            )}
        </main>

    )
}
