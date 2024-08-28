import React from 'react'

const ShowRoadmap = ({ finalRoadmap }) => {
    console.log(finalRoadmap)

    return (
        <div className='h-screen '>
            <section>
                <div className="bg-black  text-white py-8">
                    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Your relevant Roadmap</p>
                            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">{finalRoadmap.title}</p>
                            <p className="text-sm md:text-base text-gray-50 mb-4">
                                {finalRoadmap.desc}
                            </p>
                            <a href="#"
                                className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                                Explore Now</a>
                            <a href="/weguide"
                                className="bg-transparent mt-5 mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                                Go back</a>
                        </div>
                        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                            <div className="container mx-auto w-full h-full">
                                <div className="relative wrap overflow-hidden p-10 h-full">
                                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                                        style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
                                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                                        style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%' }}></div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <h4 className="mb-3 font-semibold text-4xl ">Courses and Entrance Exams</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                {finalRoadmap.courses}
                                            </p>
                                            <p className="text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100">
                                                {finalRoadmap.entranceExams}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <h4 className="mb-3 font-semibold text-4xl">Streams and Eligibility</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                {finalRoadmap.streams}
                                            </p>
                                            <p className="text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100">
                                                {finalRoadmap.eligibility}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <h4 className="mb-3 font-semibold text-4xl">Job profiles and Recruiters</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                {finalRoadmap.jobProfiles}
                                            </p>
                                            <p className="text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100">
                                                {finalRoadmap.recruiters}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>

                                        <div className="order-1  w-5/12 px-1 py-4">
                                            <h4 className="mb-3 font-semibold text-4xl text-left">Colleges and Higher Studies</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                {finalRoadmap.colleges}
                                            </p>
                                            <p className="text-sm md:text-base font-bold leading-snug text-gray-50 text-opacity-100">
                                                {finalRoadmap.higherStudies}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <img className="mx-auto -mt-36 md:-mt-36" alt="github" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default ShowRoadmap