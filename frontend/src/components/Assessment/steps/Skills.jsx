import React from "react";

export const Skills = ({ data, mySkills, setSkills }) => {

  const skills = data.skills

  const handleClick = (skill) => {
    setSkills(mySkills.concat(skill.target.innerHTML))
  };

  return (
    <div className="flex h-screen bg-purple-100 ">
      <div>
        <h1 className="text-5xl font-semibold p-8 text-purple-900 ">Add your skills</h1>
        <div className="grid grid-cols-3 gap-2">
          {skills.map((skill) => (
            <div key={skill}>
              <p key={skill} onClick={handleClick} className="bg-purple-100 text-purple-800 text-sm font-medium mr-20 ml-5 px-3 py-2 rounded-full dark:bg-purple-300 dark:text-purple-900">{skill}</p>
            </div>
          ))}
        </div>
        <p className="text-3xl font-bold m-5 text-purple-800">Select at the most 5 skills</p>
        <p className="text-3xl font-semibold m-5 text-purple-800">Your selected skills</p>
        <div className="grid grid-cols-3 gaps-3">
          {mySkills && mySkills.map((mySkill) => (
            <div key={mySkill} className="">
              <div className="p-2 ml-5 mt-5 ">
                <span
                  id="badge-dismiss-purple"
                  className=" py-2 px-3 mr-3 text-sm font-medium text-purple-800 bg-purple-100 rounded-full dark:bg-purple-200 dark:text-purple-800"
                >
                  {mySkill}
                  <button
                    class=" items-center p-0.5 ml-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-300 dark:hover:text-purple-900"
                    data-dismiss-target="#badge-dismiss-purple"
                    aria-label="Remove"
                  >
                    <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div>
        <img
          className="object-contain"
          alt="cross"
          src="https://media.istockphoto.com/vectors/girl-working-on-laptop-and-businessman-standing-vector-id1201847822?k=20&m=1201847822&s=612x612&w=0&h=zO0_ks3lBAINc6AofKHTTvXDm7bnit1w6R6y1s5xqnI="
        />
      </div>
    </div>
  );
};
