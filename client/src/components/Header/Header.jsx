/* eslint-disable no-unused-vars */
import styles from './Header.module.css'
import { IoSearch } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";

const Header = () => {
  return (
    <div className="w-full h-20 sticky top-0 bg-white opacity-90">
      <div className="flex h-full w-full items-center justify-around">
        <div>
          <h1 className='text-3xl font-bold font-rubik text-gray-700'>samakaki<span className='text-rose-500'>.</span></h1> 
        </div>
        <div className='w-[30%]'>
          <form className='relative w-full flex items-center'>
            <div className='absolute left-2.5'>
              <IoSearch className='text-2xl text-gray-500'/>
            </div>
            <input type='text' placeholder='Search entire store here...' className='focus:ring-0 text-search border-y border-l text-gray-700 text-lg w-full ps-10 placeholder-gray-500 border-rose-600 rounded-l-xl focus:border-rose-600'/>
            <button className='border-y border-rose-600 bg-rose-600 text-lg py-[8px] px-4 text-white font-medium rounded-r-xl transition-colors duration-200 ease-in-out hover:bg-rose-700 hover:border-rose-700'>Search</button>
          </form>
        </div>
        <div>
          <button className='text-lg  shadow-lg text-white font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100 w-14 flex items-center justify-center h-14 rounded-xl'>
            <MdOutlineLightMode className='text-3xl text-gray-700'/>
          </button>
        </div>
        <div className='flex items-center gap-x-14'>
          <button className='flex items-center gap-2'>
            <div className='text-lg shadow-lg text-white font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100 w-14 flex items-center justify-center h-14 rounded-xl'>
              <FaRegHeart className='text-3xl text-gray-700'/>
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='font-medium text-lg text-gray-700'>My Wishlist</h3>
              <p className='text-base'>0 items</p>
            </div>
          </button>
          <button className='flex items-center gap-2'>
            <div className='text-lg shadow-lg text-white font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100 w-14 flex items-center justify-center h-14 rounded-xl'>
              <IoCartOutline className='text-3xl text-gray-700'/>
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='font-medium text-lg text-gray-700'>My Cart</h3>
              <p className='text-base'>$0.00</p>
            </div>
          </button>
          <button className='flex items-center gap-2'>
            <div className='text-lg shadow-lg text-white font-medium transition-colors duration-200 ease-in-out hover:bg-gray-100 w-14 flex items-center justify-center h-14 rounded-xl'>
              <LuUser2 className='text-3xl text-gray-700'/>
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='font-medium text-lg text-gray-700'>My Account</h3>
              <p className='text-base'>Sign in</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
