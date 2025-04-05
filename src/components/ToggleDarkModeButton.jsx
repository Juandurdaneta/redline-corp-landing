import React from 'react'
import MoonIcon from '../assets/moon.svg?react';

const ToggleDarkModeButton = () => {
  return (
    <div className='border border-white dark:border-red-dark flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-700 ease-in-out hover:scale-105'>
        <MoonIcon className="size-6" />
    </div>
  )
}

export default ToggleDarkModeButton