import React from 'react';
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon, CheckIcon } from "@heroicons/react/solid";
import Navbar from '../LandingPage/Navbar';
import ExpertCard from './ExpertCard';
const Community = () => {

    const expert = [
        {
            name: "Rachel Scott",
            contact: "2145362488",
            image: "https://www.jeannievanasco.com/uploads/6/1/7/5/61753881/published/jeannie-vanasco-dennis-drenner-2020.jpg?1646500170",
            specialization: "gbrbe",
            address: "US"
        },
        {
            name: "Dwight Shrute",
            contact: "2145362488",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAk0v9_-RsNIHFDCpdMBI9z3LkjyOo8B5GlRExmb8xK8UL5tVscxeES8tTGDtFiS5nRoc&usqp=CAU",
            specialization: "gbrbe",
            address: "US"
        },
        {
            name: "Johnny Adams",
            contact: "2145362488",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAk0v9_-RsNIHFDCpdMBI9z3LkjyOo8B5GlRExmb8xK8UL5tVscxeES8tTGDtFiS5nRoc&usqp=CAU",
            specialization: "gbrbe",
            address: "US"
        },

    ]

    return (
        <div>
            <Navbar />
            <div name="support" className="w-full ">
                <div className="w-full h-[700px] bg-gray-900/90 absolute">
                    <img
                        className="w-full h-full object-cover mix-blend-overlay"
                        src="https://s35691.pcdn.co/wp-content/uploads/2018/11/community.jpg"
                        alt=""
                    />
                </div>
                <div className="max-w-[1240px] mx-auto text-white relative">
                    <div className="px-4 py-12">
                        <h2 className="text-5xl pt-8 font-semibold text-slate-300 uppercase text-center">
                            Let's Connect
                        </h2>
                        <h3 className="text-4xl font-bold py-6 text-center">
                            To find the right career
                        </h3>
                        <p className="py-4 px-14 text-2xl text-slate-300 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, modi
                            totam? Ex quidem pariatur sint dolorum obcaecati alias, temporibus
                            molestias dicta placeat laborum aliquam recusandae commodi, sunt
                            architecto amet! Voluptatibus?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-20 gap-y-16 px-14 pt-12 sm:pt-20 text-black">
                        <div className="bg-white rounded-xl shadow-2xl">
                            <div className="p-8">
                                <SupportIcon className="w-14 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                                <h3 className="font-bold text-2xl my-6">Technical Support</h3>
                                <p className="text-gray-600 text-xl">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Tempore tenetur eaque natus? Culpa doloribus quis commodi enim
                                    fugit? Ea, eum.
                                </p>
                            </div>
                            <div className="bg-slate-200 pl-8 py-4">
                                <p className="flex items-center text-indigo-700">
                                    Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-2xl ">
                            <div className="p-8">
                                <ChipIcon className="w-14 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                                <h3 className="font-bold text-2xl my-6">Media Inquiries</h3>
                                <p className="text-gray-600 text-xl">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Tempore tenetur eaque natus? Culpa doloribus quis commodi enim
                                    fugit? Ea, eum.
                                </p>
                            </div>
                            <div className="bg-slate-200 pl-8 py-4 ">
                                <p className="flex items-center text-indigo-700">
                                    Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div name="pricing" className="w-full text-white my-24">
                <div className="w-full h-[1000px] bg-slate-900 absolute mix-blend-overlay">
                    {/* just for background color */}
                </div>

                <div className="max-w-[1240px] mx-auto py-12">
                    <div className="text-center py-8 text-slate-300">
                        <h3 className="text-4xl font-bold text-white py-8">Expert contacts</h3>
                        <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laudantium culpa voluptatem
                            rem fugiat tempore, neque quod voluptate illum, minima blanditiis molestiae consectetur eos
                            iusto vero dicta reprehenderit recusandae temporibus.</p>
                        <div >
                            <p>
                                {expert.map((exp) => (
                                    <ExpertCard key={expert} exp={exp} />
                                ))}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Community