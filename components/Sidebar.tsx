import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { MdGroups2, MdOutlineScreenshotMonitor } from 'react-icons/md'
import { IoBagSharp } from 'react-icons/io5'
import { BsFillCalendar2EventFill } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'

function Sidebar() {
  return (
    <div className=' p-5 text-sm lg:text-xm border-r border-gray-900 overflow-y-scroll scrollbar-hide  h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex'>
        <div className="space-y-4">
            {/* flex items-center
                bg-transparent space-x-3 opacity-90 hover:opacity-80 cursor-pointer 
                rounded-full p-1 pr-2 */}
            <div className='flex items-center bg-transparent'>
                <img 
                className='rounded-full w-10' 
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" 
                alt="profile pic" 
                />
                <h2 className=''>meeeeee</h2>
            </div>
            <button className="flex items-center p-4 space-x-2 hover:bg-gray-200 ">
                <FaUserFriends className="h-5 w-5 text-blue-700" />
                <p>Friends</p>
            </button>
            <button className="flex items-center p-4 space-x-2 hover:bg-gray-200 ">
                <MdGroups2 className="h-5 w-5 text-blue-700" />
                <p>Groups</p>
            </button>
            <button className="flex items-center p-4 space-x-2 hover:bg-gray-200 ">
                <IoBagSharp className="h-5 w-5 text-blue-700" />
                <p>Marketplace</p>
            </button> 
            <button className="flex items-center p-4 space-x-2 hover:bg-gray-200 ">
                <MdOutlineScreenshotMonitor className="h-5 w-5 text-blue-700" />
                <p>Watch</p>
            </button>
            <button className="flex items-center p-4 space-x-2 hover:bg-gray-200 ">
                <BsFillCalendar2EventFill className="h-5 w-5 text-blue-700" />
                <p>Events</p>
            </button>
            <button className="flex items-center p-4 space-x-2 hover:bg-gray-200 ">
                <AiFillClockCircle className="h-5 w-5 text-blue-700" />
                <p>Memories</p>
            </button>   
        </div>
    </div>
  )
}

export default Sidebar