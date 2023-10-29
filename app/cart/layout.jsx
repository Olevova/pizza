'use client'

import { useSelector, useDispatch } from "react-redux";
// import {Provider} from 'react-redux';
// import store from '@/redux/store';
import React from "react";
import Link from "next/link";
import {removeAllPizzasFromCart} from '@/redux/cartSlice';
export default function CartLayout({ children }) {
    // const cartItem = useSelector((state) => state.cart);
    // const getTotalPrice = () => {
    //     return cartItem.reduce(
    //         (accumulator, item) => accumulator + item.quantity * item.price,
    //         0
    //     );
    // };
    // const dispatch = useDispatch();
    const cleanCart = () => dispatch(removeAllPizzasFromCart());

    return (
        // <Provider store={store} >

            <main className="flex flex-col flex-1 p-4">
                <h1 className="text-2xl flex justify-center font-extrabold mb-8">Cart Page</h1>
                {/*cartItem.length*/}
                {1 === 0 ? (
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
                    {children}
                    {/*<h2 className="text-2xl mb-4 text-center">Total: UAH {getTotalPrice()}</h2>*/}
                    <button className='w-[300px] m-auto bg-[#CA0123] hover:text-[#660000] text-white text-2xl p-4 rounded-3xl' onClick={cleanCart}>Make an order</button>
                </>
            )}
            </main>
        // </Provider>
    );
}

