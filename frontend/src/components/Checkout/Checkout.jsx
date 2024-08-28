// import { set } from 'date-fns'
import React, { useState } from 'react'

export const Checkout = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [cardNum, setCardNum] = useState([])
    const [cvv, setcvv] = useState('')
    const [expiry, setExpiry] = useState([])
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='relative'>
            <img
                className='h-screen w-full'
                src='https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGF5bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
                alt='bg' />
            <div className=''>
                <form
                    onSubmit={handleSubmit}
                    className='absolute left-0 top-0 bottom-0  font-serif'>
                    <h1 className='text-6xl text-gray-300 mt-10 ml-10 font-semibold'>Upgrade to Pro Version</h1>
                    <div className='flex flex-col w-1/2'>
                        <label className='form-label'>Enter your email</label>
                        <input
                            className='form-input'
                            placeholder="Email address"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <label className=' form-label'>Enter Full Name</label>
                        <input
                            rows={4}
                            className='form-input'
                            placeholder='John Doe'
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <label className=' form-label'>Card Number</label>
                        <input
                            className='form-input'
                            placeholder='Enter valid Card Number '
                            type="text"
                            onChange={(e) => setCardNum(e.target.value)}
                            value={cardNum}
                        />
                        <label className=' form-label'>CVV</label>
                        <input
                            className='form-input'
                            placeholder='CVV'
                            type="text"
                            onChange={(e) => setcvv(e.target.value)}
                            value={cvv}
                        />
                    </div>
                    <label className='form-label p-2'>Expiry Date</label>
                    <input
                        className='form-input m-2 bg-gray-100'
                        placeholder="Expiry Date "
                        type="text"
                        onChange={(e) => setExpiry(e.target.value)}
                        value={expiry}
                    />

                    <label className=' form-label'>City</label>
                    <input
                        rows={4}
                        className='form-input bg-gray-100'
                        placeholder='Enter city name '
                        type="text"
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                    <a href='/user/weGuidePro'
                        className='hover:bg-gray-800 hover:text-white bg-gray-400 text-black m-2 ml-10 rounded-md py-2 px-3 mt-3'>Upgrade my plan
                    </a>

                </form>
            </div >


        </div >


    )
}

