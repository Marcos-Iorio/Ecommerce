import React from 'react'
import { useCartContext } from '../../utils/hooks'

export const CartBadge = () => {
    const { cart } = useCartContext();

    return(
        <div className='absolute top-[-10px] right-0 text-black bg-white rounded-full p-1 w-6 h-6'>
            <p className='text-center leading-4'>{cart.length === 0 ? 0 : cart.length}</p>
        </div>

    );
}