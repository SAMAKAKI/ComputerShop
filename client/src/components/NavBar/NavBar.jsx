import { BiSolidDiscount } from "react-icons/bi";
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'
import CustomSelect from "../CustomSelect/CustomSelect";
import { IoNewspaperSharp, IoCamera, IoWatchSharp } from "react-icons/io5";
import { FaComputer, FaMobile, FaTabletScreenButton  } from "react-icons/fa6";
import { PiTelevisionSimple } from "react-icons/pi";
import { GrGamepad } from "react-icons/gr";
import { MdLight  } from "react-icons/md";
import { TbDrone } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";

const categories = [
  {
    name: 'New arrivals',
    icon: <IoNewspaperSharp />
  },{
    name: 'Computers',
    icon: <FaComputer />
  },{
    name: 'photography',
    icon: <IoCamera />
  },{
    name: 'mobile',
    icon: <FaMobile  />
  },{
    name: 'tablets',
    icon: <FaTabletScreenButton  />
  },{
    name: 'televisions',
    icon: <PiTelevisionSimple />
  },{
    name: 'Entertainment',
    icon: <GrGamepad />
  },{
    name: 'smart watches',
    icon: <IoWatchSharp />
  },{
    name: 'Lighting',
    icon: <MdLight  />
  },{
    name: 'Drones',
    icon: <TbDrone />
  },{
    name: 'Super Deals',
    icon: <BiSolidOffer />
  }
]

const NavBar = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between bg-rose-600 px-14">
      <div className="flex items-center gap-10 h-full w-[82%]">
        <CustomSelect height={'48px'} width={'20%'} title={'All Categories'} options={categories} isOpen={true}/>
        <div className={`text-white h-full flex items-center font-medium relative text-lg ${styles.linkRelativeAnimation}`}>
          <Link to='/home'>Home</Link>
          <div className={`${styles.linkAnimation}`}></div>
        </div>
        <div className={`text-white h-full flex items-center font-medium relative text-lg ${styles.linkRelativeAnimation}`}>
          <Link to='/home'>Blog</Link>
          <div className={`${styles.linkAnimation}`}></div>
        </div>
        <div className={`text-white h-full flex items-center font-medium relative text-lg ${styles.linkRelativeAnimation}`}>
          <Link to='/home'>About us</Link>
          <div className={`${styles.linkAnimation}`}></div>
        </div>
        <div className={`text-white h-full flex items-center font-medium relative text-lg ${styles.linkRelativeAnimation}`}>
          <Link to='/home'>Contact</Link>
          <div className={`${styles.linkAnimation}`}></div>
        </div>
        <div className={`text-white h-full flex items-center font-medium relative text-lg ${styles.linkRelativeAnimation}`}>
          <Link to='/home'>Delivery</Link>
          <div className={`${styles.linkAnimation}`}></div>
        </div>
      </div>
      <div className="bg-zinc-800 text-white text-lg w-[18%] h-full flex items-center justify-center gap-2">
        <BiSolidDiscount />
        <p>Get 30% Off On Selected Items</p>
      </div>
    </div>
  )
}

export default NavBar
