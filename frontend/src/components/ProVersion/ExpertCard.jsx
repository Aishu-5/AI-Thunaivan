import React from 'react'

const ExpertCard = ({ exp }) => {
    return (
        <div>
            <div class="w-full pl-8 pt-10 rounded-md" >
                <div class="bg-gray-700 pl-10 rounded-md shadow-2xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                    </div>
                    <div class="flex items-center">
                        <img class="w-auto h-32 rounded-full transform transition duration-500 hover:scale-110" src={exp.image} alt="Avatar of Jonathan Reinink" />
                        <div class="text-sm text-left text-white pl-10">
                            <p class="leading-none text-xl">{exp.name}</p>
                            <p class="pt-5"><span className='text-lg'>Contact:</span> {exp.contact}</p>
                            <p class=" pt-5"><span className='text-lg'>Address:</span> {exp.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertCard