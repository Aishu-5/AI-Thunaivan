import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'
export default function Banner() {
    return (
        <div>
            <div className='w-full h-[700px] bg-gradient-to-r from-gray-900 to-gray-400 absolute'>
                <img
                    className=' h-full w-full -z-1 sticky bg-opacity-70 mix-blend-overlay mb-10'
                    src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' />
            </div>
            <div className='relative text-gray-200'>
                <div className=''>
                    <p className='text-5xl font-semibold p-7'>Know your development skills <br></br> before learning new</p>
                    <div>
                        <div className='flex p-7 align-bottom mt-20 bottom-4'>
                            <p className='mr-12 flex'>
                                <div className='w-7 h-7'><HeartIcon /></div>
                                20 likes</p>
                            <p className='mr-12 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                </svg>15 comments</p>
                        </div>
                        <div className='flex p-7'>
                            <div>
                                <h1 className='font-bold'>Winona Ryder</h1>
                                <p className='font-semibold'>12 Dec,2021 10:20pm</p>
                            </div>
                            <div className='ml-2'>
                                <img
                                    className='w-12 h-12 rounded-full'
                                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
