import React from 'react'
import 'animate.css';


import { BsFillBriefcaseFill, BsHouseDoorFill, BsFillInfoSquareFill, BsStack, BsFillTelephoneFill } from "react-icons/bs";

export default function SideNavBar() {
  return (
    <nav className='bg-slate-900 text-white shadow-md lg:shadow-2xl shadow-blue-600 w-full h-fit lg:h-[100vh] lg:w-fit lg:sticky lg:top-0 p-8 flex flex-col justify-between items-center animate__animated animate__fadeInLeft'>
        <h1 className='text-4xl font-extrabold flex '>
          <BsFillBriefcaseFill className='m-1'/>
            Chini<span className='text-3xl text-blue-600'>.</span>
        </h1>   
        <ul className='flex flex-row lg:flex-col text-xl font-semibold gap-7 lg:gap-3 w-full items-center lg:items-start justify-center m-5'>
            <li className='hover:text-slate-300 duration-150 flex flex-row lg:hover:bg-slate-950 lg:rounded-lg lg:p-3 lg:transition lg:ease-out lg:hover:-translate-y-1'> <BsHouseDoorFill className='m-1 hidden lg:block'/> <a href="#home" ><BsHouseDoorFill className='m-1 block lg:hidden text-2xl'/><span className='hidden lg:block tracking-wider'>Home</span></a></li>

            <li className='hover:text-slate-300 duration-150 flex flex-row lg:hover:bg-slate-950 lg:rounded-lg lg:p-3 lg:transition lg:ease-out lg:hover:-translate-y-1'> <BsFillInfoSquareFill className='m-1 hidden lg:block'/> <a href="#about" ><BsFillInfoSquareFill className='m-1 block lg:hidden text-2xl'/> <span className='hidden lg:block tracking-wider'>About me</span></a></li>

            <li className='hover:text-slate-300 duration-150 flex flex-row lg:hover:bg-slate-950 lg:rounded-lg lg:p-3 lg:transition lg:ease-out lg:hover:-translate-y-1'> <BsStack className='m-1 hidden lg:block'/> <a href="#projects" ><BsStack className='m-1 block lg:hidden text-2xl'/> <span className='hidden lg:block tracking-wider'>Projects</span></a></li>

            <li className='hover:text-slate-300 duration-150 flex flex-row lg:hover:bg-slate-950 lg:rounded-lg lg:p-3 lg:transition lg:ease-out lg:hover:-translate-y-1'> <BsFillTelephoneFill className='m-1 hidden lg:block'/> <a href="#contact" ><BsFillTelephoneFill className='m-1 block lg:hidden text-2xl'/> <span className='hidden lg:block tracking-wider'>Contact</span></a></li>

            {/* <p className='text-xs text-center font-extralight'>made with love ❤️</p> */}
        </ul>

      
    </nav>
  )
}
