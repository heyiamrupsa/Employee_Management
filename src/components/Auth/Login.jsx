import React, { useState } from 'react'

export const Login = () => {

    const[email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const submitHandler = (e)=> {
        e.preventDefault()
        console.log("email is",email)
        console.log("password is",password)
        setemail=("")
        setpassword=("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>

        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form  
                onSubmit={(e)=>{
                    submitHandle(e)
                }
                    
                }
            
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>
                    setemail(e.target.value)
                }
        
                required className=' text-black outline-none  bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                
                required className=' text-black outline-none  bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full  placeholder:text-gray-400e mt-3.5' type="password" placeholder='Enter your password' />
                <button className='mt-10 text-white border-none outline-none  border-2 bg-emerald-600 text-xl py-5 px-6 rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}
