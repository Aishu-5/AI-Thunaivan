import React from "react";

export const Preferences = ({ data, myPreferences, setPreferences }) => {
  const preferences = data.preferences

  const handleClick = (preference) => {
    setPreferences(myPreferences.concat(preference.target.innerHTML))

  };
  // console.log(myPreferences)
  return (
    <div className="flex h-screen bg-blue-100 ">
      <div>
        <h1 className="text-5xl font-semibold p-8 text-blue-900 ">Add your Preferences</h1>
        <div className="grid grid-cols-3 gap-2">
          {preferences.map((preference) => (
            <div key={preference.index}>
              <p key={preference} onClick={handleClick} className="bg-blue-100 text-blue-800 text-sm font-medium mr-20 ml-5 px-3 py-2 rounded-full dark:bg-blue-300 dark:text-blue-900">{preference}</p>
            </div>
          ))}
        </div>
        <p className="text-3xl font-bold m-5 text-blue-900 ">Select at the most 2 preferences</p>
        <p className="text-3xl font-semibold m-5 text-blue-900 ">Your selected Preferences</p>
        <div className="grid grid-cols-3 gap-3">
          {myPreferences && myPreferences.map((myPreference) => (

            <div key={myPreference.index} className="" >
              <div className="p-2 ml-5 mt-5">
                <span id="badge-dismiss-blue" className=" py-2 px-3 mr-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-200 dark:text-blue-800">
                  {myPreference}
                  <button type="button" class=" items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900" data-dismiss-target="#badge-dismiss-blue" aria-label="Remove">
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
