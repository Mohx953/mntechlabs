import React, {useState} from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setnav] = useState(false)
    const handleNav = () => {
        setnav(!nav)
    }



    
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='text-3xl w-full font-bold '>SITENAME</h1>
            <ul className='flex hidden md:flex '>
                <li className='p-4 hover:text-green-700'><a href="">Home</a></li>
                <li className='p-4 hover:text-green-700'><a href="">About</a></li>
                <li className='p-4 hover:text-green-700'><a href="">Services</a></li>
                <li className='p-4 hover:text-green-700'><a href="">Products</a></li>
                <li className='p-4 hover:text-green-700'><a href="">Contact</a></li>
            </ul>
            <div className='block flex justify-between items-center gap-4'>
                <Show when="signed-out">
                    <button className='w-[150px] rounded-md font-medium my-3 mx-auto px-6 py-3 bg-green-700 text-white'>
                        <SignInButton />
                    </button>
                </Show>
                <Show when="signed-in">
                    <button>
                        <UserButton />
                    </button>
                </Show>
            </div>
            <div onClick={handleNav} className='md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[50%] bg-black lg:w-[-40%] h-full border-r ease-in-out duration-300' : 'fixed left-[-100%] top-0 w-[50%] bg-black  h-full border-r ease-out duration-300 '}>
                <ul className='p-4'>
                    <li className='p-4 border-b border-b-gray-900'><a href="">Home</a></li>
                    <li className='p-4 border-b border-b-gray-900'><a href="">About</a></li>
                    <li className='p-4 border-b border-b-gray-900'><a href="">Services</a></li>
                    <li className='p-4 border-b border-b-gray-900'><a href="">Products</a></li>
                    <li className='p-4'><a href="">Contact</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar
