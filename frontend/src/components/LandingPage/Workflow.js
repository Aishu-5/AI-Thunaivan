import React from 'react';
import workflowImg from '../../assets/WF.png'

const Workflow = () => {
  return (
    <div className=' m-auto w-[100%] px-6 pt-10 md:px-12 lg:px-20 h-[700px] bg-zinc-200'>
        <img className="bg-center object-center align-middle pl-40 mt-[-40px]" src={workflowImg} alt="workflow" />
    </div>
  )
}

export default Workflow