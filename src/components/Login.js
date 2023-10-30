import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='Background' 
            className='brightness-50'
            />
        </div>
        <div className='pt-24'></div>
        <div className='relative w-4/12 mx-auto bg-black/75 backdrop-opacity-10 rounded-md py-6'>
            <form className='py-8 w-3/4 mx-auto'>
                <p className='text-3xl mb-4 font-sans font-semibold text-white leading-relaxed tracking-wide'>{isSignInForm ? "Sign In" : "Sign Up"}</p>
                {!isSignInForm && (
                    <div className='relative my-4'>
                        <input 
                            name="name"
                            type='text' 
                            placeholder='Email or phone number'
                            className='peer m-0 block h-[52px] w-full rounded bg-[#333333] bg-clip-padding px-3 py-4 text-base  leading-relaxed text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none peer-focus:text-primary dark:text-white dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                        />
                        <label htmlFor="name" 
                            className=' text-sm pointer-events-none absolute left-0 top-0 origin-[0_0] px-3 py-4 text-neutral-600 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'>
                                Full Name
                        </label> 
                    </div>
                )
                }
                <div className='relative my-4 mb-4'>
                    <input 
                        name="email"
                        type='text' 
                        placeholder='Email or phone number'
                        className='peer m-0 block h-[52px] w-full rounded bg-[#333333] bg-clip-padding px-3 py-4 text-base  leading-relaxed text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none peer-focus:text-primary dark:text-white dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    />
                    <label htmlFor="email" 
                        className=' text-sm pointer-events-none absolute left-0 top-0 origin-[0_0] px-3 py-4 text-neutral-600 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'>
                            Email or phone number
                    </label> 
                </div>
                <div className='relative my-4'>
                    <input name="password" type='password' placeholder='Password' 
                        className='peer m-0 block h-[52px] w-full rounded bg-[#333333] bg-clip-padding px-3 py-4 text-base  leading-relaxed text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none peer-focus:text-primary dark:text-white dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'
                    />
                    <label htmlFor="password" 
                        className=' text-sm pointer-events-none absolute left-0 top-0 origin-[0_0] px-3 py-4 text-neutral-600 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary'>
                            Password
                    </label> 
                </div>
                <button className=' mt-8 w-full py-3 bg-[#e50914] rounded text-base font-medium text-white tracking-wide'>
                    {isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className=' text-neutral-500 text-sm mt-3 '>Need help?</p>
                {isSignInForm 
                    ? <p className=' text-white text-sm mt-6 '>New to Netflix? 
                        <span onClick={toggleSignInForm} className='text-[#e50914] font-medium cursor-pointer'> Sign up now</span>.</p> 
                    : <p className=' text-white text-sm mt-6 '>Already a member? 
                        <span onClick={toggleSignInForm} className='text-[#e50914] font-medium cursor-pointer'> Sign in</span>.</p>
                }
                
                <p className=' text-neutral-500 text-sm mt-3 '>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className=' text-blue-400'>Learn more</span>.</p>
                
            </form>
        </div>
        
        
    </div>
  )
}

export default Login;



// rafce -> react arrow function component export