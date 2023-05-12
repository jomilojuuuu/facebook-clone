import React from 'react'
import { HiSearch } from 'react-icons/Hi'
import {AiFillHome, AiFillPlayCircle, AiOutlineShoppingCart, AiFillMessage} from 'react-icons/ai'
import {BsFlagFill} from 'react-icons/bs'
import {IoIosPeople, IoMdNotifications} from 'react-icons/io'
import {MdKeyboardArrowDown} from 'react-icons/md'



export const Header = () => {
  return (
    <header className=' p-3 shadow-lg bg-white'>
        <div className='container flex items-center justify-between'>
            <div className='flex'>
                {/* facebook logo */}
                <img 
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" 
                alt="facebook logos" 
                className='w-16'
                />
                {/* search bar */}
                <span>
                    <HiSearch  className="text-2xl text-gray-600 cursor-pointer mt-2" />
                </span>
                <input 
                    type="search" 
                    name="" 
                    id="search"
                    placeholder='Search Facebook'
                    className='hidden md:inline-flex flex-shrink items-center bg-gray-100 outline-none placeholder-gray-500 h-[30px] rounded-full pl-5 mt-1'
                />
            </div>

        <div className='flex items-center space-x-[60px]'>
            <button className="flex items-center space-x-2 hover:text-blue-700">
                <AiFillHome className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-700">
                <BsFlagFill className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-700">
                <AiFillPlayCircle className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-700">
                <AiOutlineShoppingCart className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-700">
                <IoIosPeople className="h-5 w-5" />
            </button>
        </div>

        <div className='flex items-center space-x-7'>
            <div className='flex items-center
             bg-transparent space-x-3 opacity-90 hover:opacity-80 cursor-pointer 
             rounded-full p-1 pr-2'>
                <img 
                className='rounded-full w-16' 
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" 
                alt="profile pic" 
                />
                <h2 className='-pl-10'>meeeeee</h2>
            </div>
              <button className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full hover:text-blue-700">
                <HiSearch className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full hover:text-blue-700">
                <AiFillMessage className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full hover:text-blue-700">
                <IoMdNotifications className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full hover:text-blue-700">
                <MdKeyboardArrowDown className="h-5 w-5" />
            </button>
        </div>
        </div>
    </header>
  )
}
