// import { set } from 'date-fns'
import React, { useState } from 'react'

export const RoadmapForm = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [stream, setStream] = useState([])
    const [tags, setTags] = useState([])
    const [eligibility, setEligibility] = useState('')
    const [entranceExams, setEntranceExams] = useState('')
    const [courses, setCourses] = useState('')
    const [duration, setDuration] = useState('')
    const [recruiters, setRecruiters] = useState('')
    const [averageSalary, setAverageSalary] = useState('')
    const [colleges, setColleges] = useState('')
    const [higherStudies, setHigherStudies] = useState('')
    const [jobProfiles, setJobProfiles] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        const roadmap = {
            title, desc, stream, tags, eligibility,
            entranceExams, courses, duration, recruiters, averageSalary,
            colleges, higherStudies, jobProfiles
        }

        const response = await fetch('/roadmap/addRoadmap', {
            method: 'POST',
            body: JSON.stringify(roadmap),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        console.log(json)
        if (response.ok) {
            console.log("new roadmap added")
            alert("Roadmap added successfully")
        }

    }

    return (
        <div className='relative'>
            <img
                className='h-screen w-full'
                src='https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHJvYWRtYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
                alt='bg' />
            <div className=''>
                <form
                    onSubmit={handleSubmit}
                    className='absolute left-0 top-0 bottom-0 text-gray-300 font-serif'>
                    <h1 className='text-6xl mt-10 ml-10 font-semibold'>Add a new Roadmap</h1>

                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col'>
                            <label className='  form-label'>Name of Roadmap</label>
                            <input
                                className='form-input'
                                placeholder="Name of the roadmap"
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            <label className=' form-label'>Description</label>
                            <textarea
                                rows={4}
                                className='form-input'
                                placeholder='Description of roadmap'
                                type="text"
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                            />
                            <label className=' form-label'>Skills required</label>
                            <input
                                className='form-input'
                                placeholder='Add skillset required '
                                type="text"
                                onChange={(e) => setTags(e.target.value)}
                                value={tags}
                            />
                            <label className=' form-label'>Entrance Exams</label>
                            <input
                                className='form-input'
                                placeholder='Entrance exams'
                                type="text"
                                onChange={(e) => setEntranceExams(e.target.value)}
                                value={entranceExams}
                            />
                            <label className=' form-label'>Eligibility</label>
                            <input
                                className='form-input'
                                placeholder='Eligibility '
                                type="text"
                                onChange={(e) => setEligibility(e.target.value)}
                                value={eligibility}
                            />
                            <label className=' form-label'>Courses</label>
                            <input
                                className='form-input'
                                placeholder='Courses '
                                type="text"
                                onChange={(e) => setCourses(e.target.value)}
                                value={courses}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='  form-label'>Streams</label>
                            <input
                                className='form-input bg-gray-100'
                                placeholder="Stream required "
                                type="text"
                                onChange={(e) => setStream(e.target.value)}
                                value={stream}
                            />

                            <label className=' form-label'>Higher Education</label>
                            <input
                                rows={4}
                                className='form-input bg-gray-100'
                                placeholder='Higher Eductaion '
                                type="text"
                                onChange={(e) => setHigherStudies(e.target.value)}
                                value={higherStudies}
                            />

                            <label className='form-label'>Top recruiters</label>
                            <input
                                className='form-input bg-gray-100'
                                placeholder='Top recruiters '
                                type="text"
                                onChange={(e) => setRecruiters(e.target.value)}
                                value={recruiters}
                            />
                            <label className='form-label'>Duration</label>
                            <input
                                className='form-input'
                                placeholder='Duration'
                                type="text"
                                onChange={(e) => setDuration(e.target.value)}
                                value={duration}
                            />
                            <label className=' form-label'>Job Profiles</label>
                            <input
                                className='form-input'
                                placeholder='Job Profile'
                                type="text"
                                onChange={(e) => setJobProfiles(e.target.value)}
                                value={jobProfiles}
                            />
                            <label className=' form-label'>Average Salary</label>
                            <input
                                className='form-input'
                                placeholder='Average Salary'
                                type="text"
                                onChange={(e) => setAverageSalary(e.target.value)}
                                value={averageSalary}
                            />
                            <label className=' form-label'>Colleges</label>
                            <input
                                className='form-input'
                                placeholder='Colleges'
                                type="text"
                                onChange={(e) => setColleges(e.target.value)}
                                value={colleges}
                            />
                        </div>
                    </div>
                    <button className='w-full bg-gray-400 text-black m-2 ml-10 rounded-md py-2 px-3 mt-3'>Add this Roadmap</button>

                </form>
            </div >


        </div >


    )
}

