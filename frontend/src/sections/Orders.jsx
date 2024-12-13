import { BookCopy } from 'lucide-react'
import { BringToFront } from 'lucide-react'
import React from 'react'
import Button from '../components/Button'

const Orders = () => {
    return (
        <div className='flex-1 px-10 py-4 font-outfit'>
            <h1 className='text-2xl font-semibold mb-10'>Orders</h1>
            <div className='border-2 border-slate-200 p-6 h-[60vh] bg-white shadow-lg rounded-xl flex justify-center items-center flex-col gap-4'>

                <BringToFront  className='w-24 h-24' />
                <h2 className='text-xl'>Your orders will show here</h2>
                <p className='text-center text-sm max-w-sm text-slate-400'>To get orders and accept payments from customers, you need to select a plan.</p>
                <Button mode='dark' name='View Orders' />

            </div>
        </div>
    )
}

export default Orders
