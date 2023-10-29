"use client"
import PizzaInCart from "@/components/PizzaInCart";
import React from "react";
import {useSelector} from "react-redux";
export default function Page (){

    const cartItem = useSelector((state) => state.cart);

    return(
        <div>
            {cartItem.map((pizza) => {
                return <PizzaInCart key={pizza.id} pizza={pizza} />;
            })}
        </div>
    )
}
