import React from 'react'
export default function Login({ setAuthState }) {
    return (
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                <form>
                    <h1 className="mb-8 text-4xl font-semibold text-center">Log in</h1>

                    <div className='flex flex-col space-y-4 my-16'>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <a
                            href="weguide"
                            type="submit"
                            className=" relative top-6 w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-6">Login
                        </a>
                    </div>


                </form>

                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the Terms of Service and Privacy Policy
                </div>
            </div>

            <div className="text-gray-300 mt-6">
                Don't have an account?
                <button
                    className="no-underline border-b border-blue text-blue font-semibold cursor-pointer"
                    onClick={() => setAuthState('signup')}>Sign up</button>.
            </div>
        </div>
    )
}
