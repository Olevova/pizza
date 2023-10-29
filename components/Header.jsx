'use client'
import { ShoppingCartIcon} from '@heroicons/react/24/solid';
import Link from "next/link";
import {usePathname } from 'next/navigation';
import {useSelector} from "react-redux";
import AnimatePizza from  '@/components/AnimatePizza'

export default function Header(){

    const pathname = usePathname();
    const cart = useSelector(state => state.cart);
    const cartItem = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    return(
        <header className='shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px]'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
                <Link href="/" className='flex'>
                    <AnimatePizza />
                </Link>
                <div className='flex items-center max-sm:ml-auto lg:order-1'>
                    <span className="relative">
                        <Link href='/cart'>
                 <ShoppingCartIcon width="25px" height="25px" className="cursor-pointer hover:fill-[#CA0123] inline"/>
            </Link>
                            <span className="absolute left-auto -ml-1 top-0 rounded-full bg-[#CA0123] px-1 py-0 text-xs text-white">{cartItem}</span>
          </span>
                </div>
                <ul className='flex lg:space-x-4 max-lg:space-y-2 max-lg:block max-lg:w-full'>
                    <li className='max-lg:border-b max-lg:py-2 px-3'>
                        <Link href='/' className={`${pathname === '/'?'text-[#CA0123]':'text-gray-600'} hover:text-[#CA0123] font-bold block text-[15px]`}>Pizza Page</Link>
                    </li>
                    <li className='max-lg:border-b max-lg:py-2 px-3'>
                        <Link href='/cart' className={` ${pathname==='/cart' ? 'text-[#CA0123]' : 'text-gray-600'} hover:text-[#CA0123] font-bold block text-[15px]`}>Cart</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
