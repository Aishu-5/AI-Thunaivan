import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className='w-full h-[700px] bg-gradient-to-r from-transparent to-black absolute'>

        <img className='h-screen w-full -z-1 sticky bg-opacity-70 mix-blend-overlay'
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" />
      </div>


      <div className="flex relative justify-end z-20 h-screen ">
        <div className="p-10 text-right mr-5">
          <div className="text-5xl text-white">
            <div className="text-gray-3000 font-[700] text-7xl">weGuide</div>
            <div className="pt-5">Onwards and Upwards</div>
          </div>
          <div className="text-md m-2 text-zinc-200 mt-6 pt-7">
            <p className="justify-items-end w-[40rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex cursor-pointer justify-end text-2xl space-x-4 mt-3 pt-10">
            <button className="hover:bg-gray-900 text-white text-2xl mt-7 py-2 px-4 rounded-full">
              Learn More
            </button>
            <a href='/login'><button className="bg-gray-600 text-white text-2xl mt-7 py-2 px-4 rounded-md">
              Get Started
            </button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner