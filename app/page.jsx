"use client"
import React from "react";
import PizzaCard from '@/components/PizzaCard';
import { getAllPizza } from "@/utils/getPizza";

export default function Page() {

    const pizzas = getAllPizza();
    // console.log(pizzas);

    return (
        <main className="flex flex-col items-center flex-1 p-4">
            <h1 className="text-2xl font-extrabold mb-8">PIZZA MENU</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                    {pizzas.map((pizza) => {
                        return <PizzaCard key={pizza.id} pizza={pizza} />;
                    })}
            </div>
        </main>
    );
}
