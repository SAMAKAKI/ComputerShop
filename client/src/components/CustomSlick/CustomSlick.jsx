/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import styles from './CustomSlick.module.css'

const CustomSlick = ({infinity = false, images, dots = false, slideToShow, slideToScroll, speed}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval;
    if(infinity)
      interval = setInterval(() => {
        setCount((prev) => (prev === images.length - 1 ? 0 : ++prev))
      }, 5000)
    return () => clearInterval(interval)
  }, [infinity, images.length])

  const handleMove = (direction) => {
    if(direction === 'right' || direction === 'next'){
      count === images.length - 1 ? setCount(prev => prev = 0) : setCount(prev => ++prev)
    } 
    if(direction === 'left' || direction === 'prev'){
      count === 0 ? setCount(prev => prev = images.length - 1) : setCount(prev => --prev)
    }
    if(direction <= images.length - 1 || direction >= 0)
      setCount(prev => prev = direction)
  }

  return (
    <div className="w-full h-full relative">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full flex justify-between px-5 items-center">
        <button type='button' className={`flex flex-col relative w-5 h-5 ${styles.arrowBtn}`} onClick={() => handleMove('prev')}>
          <span className={`absolute w-full bg-zinc-200 h-1 mb-3 rounded-r-xl -rotate-45 ${styles.arrowStick} transition-all duration-100 ease`}></span>
          <span className={`absolute w-full bg-zinc-200 h-1 rounded-r-xl rotate-45 top-3 ${styles.arrowStick} transition-all duration-100 ease`}></span>
        </button>
        <button type='button' className={`flex flex-col relative w-5 h-5 ${styles.arrowBtn}`} onClick={() => handleMove('next')}>
          <span className={`absolute w-full bg-zinc-200 h-1 mb-3 rounded-l-xl rotate-45 ${styles.arrowStick} transition-all duration-100 ease`}></span>
          <span className={`absolute w-full bg-zinc-200 h-1 rounded-l-xl -rotate-45 top-3 ${styles.arrowStick} transition-all duration-100 ease`}></span>
        </button>
      </div>
      <div className={`${dots ? 'absolute -translate-x-1/2 bottom-1 left-1/2 w-full flex justify-center gap-3 items-center' : 'hidden'}`}>
        { images.map((image, index) => (
          <button type='button' onClick={() => handleMove(index)} key={index} className={`${count === index ? 'h-3 w-3 rounded-full bg-zinc-200' : 'h-3 w-3 bg-transparent rounded-full border-2 border-zinc-200 hover:bg-zinc-400'}`}></button>
        )) }
        {/* <button className='h-3 w-3 rounded-full bg-zinc-200'></button>
        <button className='h-4 w-4 bg-transparent rounded-full border-2 border-zinc-200 hover:bg-zinc-400'></button>
        <button className='h-4 w-4 bg-transparent rounded-full border-2 border-zinc-200 hover:bg-zinc-400'></button> */}
      </div>
      <div className='h-full bg-cover' style={{
          backgroundImage: `url('${images[count]?.url}')`
        }}></div>
    </div>
  )
}

export default CustomSlick
