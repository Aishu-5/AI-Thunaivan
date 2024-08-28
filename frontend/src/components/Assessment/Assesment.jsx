import React, { useState } from 'react';
import { useEffect } from 'react';
import ShowRoadmap from '../Roadmaps/RoadmapTemplate';
import { Interests } from './steps/Interests';
import { Preferences } from './steps/Preferences';
import { Skills } from './steps/Skills';
export default function Assesment() {

    const [step, setStep] = useState(1);
    const [mySkills, setSkills] = useState([])
    const [myInterests, setInterests] = useState([])
    const [myPreferences, setPreferences] = useState([])
    const [roadmaps, setRoadmaps] = useState([])
    const userData = []

    useEffect(() => {
        const fetchRoadmaps = async () => {
            const response = await fetch('/roadmap')
            const data = await response.json();

            if (response.ok) {
                setRoadmaps(data)
            }
        }
        fetchRoadmaps()
    }, [])
    const data = {
        skills:
            [
                "Problem-solving", "Technical", "Knowledge of Construction", "Dedication", "Innovativeness", "Software Knowledge", "Communication", "Interpersonal", "Medicinal", "Clarity of Speech", "Knowledge of fashion trends", "Ethics"
            ],

        interests:
            [
                "Programming", "Maths", "Research", "Business", "Confidence", "Fashion", "Drawing", "Singing",
                "Digital Knowledge", "Public Speaking", "Social Media", "Graphics", "Enthusiasm"
            ],

        preferences:
            [
                "Working with people", "Teamwork", "Outdoors", "Small team size", "Mobility", "Indoors", "Travel", "Hybrid", "Mobility", "Working with Data"
            ]
    }

    userData.push(mySkills)
    userData.push(myInterests)
    userData.push(myPreferences)

    const userDataAll = []
    let finalskills = []
    let finalRoadmap = {}
    const presentInRoadmap = (roadmaps, userDataAll) => {

        roadmaps.forEach(roadmap => {
            const tags = roadmap.tags
            finalskills = userDataAll.filter(function (item) {
                if (tags.includes(item)) {
                    return roadmap
                }
            });
            console.log(finalskills)
            if (finalskills.length >= 6) {
                finalRoadmap = roadmap
                // console.log(roadmap)
                return finalRoadmap
            }
        }
        )
        return finalRoadmap
    }
    // let ans = presentInRoadmap()
    // setMyRoadmap(ans)

    const collectingAll = (userData) => {
        for (let i = 0; i < userData.length; i++) {
            for (let j = 0; j < userData[i].length; j++) {
                userDataAll.push(userData[i][j])
                // console.log(userDataAll)
            }
        }
    }

    const isMyRoadmap = (userDataAll) => {
        for (let i = 0; i < userDataAll.length; i++) {
            presentInRoadmap(roadmaps, userDataAll)
            // console.log(ans)
        }
    }
    collectingAll(userData)
    isMyRoadmap(userDataAll, roadmaps)

    const handleNext = () => {
        setStep(step => step + 1);
    };
    const handleBack = () => {
        setStep(step => step - 1);
    };
    const handleSubmit = () => {
        setStep(step => step + 1);
    }
    return (
        <div>
            {step === 1 && <Skills mySkills={mySkills} data={data} setSkills={setSkills} />}
            {step === 2 && <Interests myInterests={myInterests} data={data} setInterests={setInterests} />}
            {step === 3 && <Preferences myPreferences={myPreferences} data={data} setPreferences={setPreferences} />}
            <div className='relative flex justify-center bottom-20'>
                <button className='relative text-2xl p-2 bg-purple-500 rounded-lg px-5 text-white m-3 ' onClick={handleBack}>Back</button>
                {(step !== 3) && <button className=' relative text-2xl p-2 bg-purple-500 rounded-lg px-5 text-white m-3 ' onClick={handleNext}>Next</button>}
                {step === 3 && <button className='invisible relative text-2xl p-2 bg-purple-500 rounded-lg px-5 text-white m-3 ' onClick={handleNext}>Next</button>}
                {step === 3 && <button onClick={handleSubmit} className='relative text-2xl p-2 bg-purple-500 rounded-lg px-5 text-white m-3 '>Submit</button>}
            </div>
            {step === 4 && <ShowRoadmap finalRoadmap={finalRoadmap} />}
        </div>
    );
};

 // const presentInRoadmap = (roadmaps, userDataAll) => {
    //     roadmaps.forEach(roadmap => {
    //         const tags = roadmap.tags
    //          finalskills = userDataAll.filter(function (item) {
    //             if (tags.includes(item)) {
    //                 return roadmap
    //             }
    //         });
    //         console.log(finalskills)
    //         if (finalskills.length >= 6) {
    //             console.log(roadmap)

    //         }
    //         // setFinalSkills(finalskills)
    //     }
    //     )
    //     return finalskills
    // }