import React from "react";

export const Interests = ({ data, myInterests, setInterests }) => {
  const interests = data.interests

  const handleClick = (interest) => {
    setInterests(myInterests.concat(interest.target.innerHTML))

  };
  // console.log(myInterests)
  return (
    <div className="flex h-screen bg-orange-100 ">
      <div>
        <h1 className="text-5xl font-semibold m-5 text-orange-900 ">Add your interests</h1>

        <div className="grid grid-cols-3 gap-2">
          {interests.map((interest) => (
            <div>
              <p key={interest} onClick={handleClick} className="bg-orange-100 text-orange-800 text-sm font-medium mr-20 ml-5 px-3 py-2 rounded-full dark:bg-orange-300 dark:text-orange-900">{interest}</p>
            </div>
          ))}
        </div>
        <p className="text-3xl font-bold m-5 text-orange-900 ">Select at the most 3 interests</p>
        <h1 className="text-3xl font-semibold m-5 text-orange-900 ">Add your Interests</h1>
        <div className="grid grid-cols-3 gap-3">
          {myInterests && myInterests.map((myInterest) => (
            <div className="">
              <div className="p-2 ml-5 mt-5">
                <span id="badge-dismiss-orange" className=" py-2 px-3 mr-3 text-sm font-medium text-orange-800 bg-orange-100 rounded-full dark:bg-orange-200 dark:text-orange-800">
                  {myInterest}
                  <button type="button" class=" items-center p-0.5 ml-2 text-sm text-orange-400 bg-transparent rounded-sm hover:bg-orange-200 hover:text-orange-900 dark:hover:bg-orange-300 dark:hover:text-orange-900" data-dismiss-target="#badge-dismiss-orange" aria-label="Remove">
                    <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div>
        <img className="object-contain" src="https://media.istockphoto.com/vectors/girl-working-on-laptop-and-businessman-standing-vector-id1201847822?k=20&m=1201847822&s=612x612&w=0&h=zO0_ks3lBAINc6AofKHTTvXDm7bnit1w6R6y1s5xqnI=" />
      </div>
    </div>
  );
};
