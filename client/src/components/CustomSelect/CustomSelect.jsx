/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";
import { titleCase } from 'title-case';
import styles from './CustomSelect.module.css'

const CustomSelect = ({width, height, options, title, isOpen = false}) => {
  return (
    <div className={`flex flex-auto items-center justify-center gap-3 text-white bg-zinc-800 h-[${height}] w-[${width}] relative cursor-pointer ${styles.menuRelative}`}>
      <CgMenu className="text-3xl"/>
      <p className="font-medium text-xl">{title}</p>
      <div className={`${isOpen ? 'absolute' : styles.menuAbsolute} top-[48px] left-0 flex flex-col justify-start items-center w-full`}>
        { options && options.map((option, i, arr) => (
          <Link key={option.name} className={`hover:bg-gray-100 hover:text-rose-600 border-b border-gray-500 bg-zinc-50 h-[${height}] text-lg font-medium w-full flex items-center justify-center gap-3 text-zinc-500 ${ arr.length - 1 === i && 'rounded-b-xl'}`}><span className="text-2xl">{option.icon}</span> {titleCase(option.name)}</Link>
        ))}
      </div>
    </div> 
  )
}

export default CustomSelect
