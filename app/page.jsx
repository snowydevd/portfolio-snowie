"use client"
import Image from 'next/image'
import Blurr from '../public/blurr.svg'
import Avatar from '../public/avatar.webp'

import oxiShot from '../public/oxiShot.png'
import oxiShotPhone from '../public/oxiShotPhone.png'

import aslShot from '../public/aslShot.png'
import aslShotPhone from '../public/aslShotPhone.png'

import simpleShot from '../public/simpleShot.png'
import simpleShotPhone from '../public/simpleShotPhone.png'

import ContactForm from './components/ContactForm'

import {BsGithub, BsInstagram} from 'react-icons/bs'



export default function Home() {
  
  return (
    
    <main className="w-full flex flex-col  items-center mt-40">

    
      <section id='home' className='w-full lg:w-4/6 h-[80vh]'>

        <article className='flex lg:flex-row flex-col justify-center lg:justify-between w-full items-center '>

          <div className='flex flex-col lg:relative gap-0 justify-center items-center text-center '>

            <Image alt='avatar' src={Avatar} width={150} height={150}  className='w-48 h-48 lg:w-56 lg:h-56 rounded-full  animate__animated animate__fadeIn animate__delay-1s 2s block lg:hidden shadow-xl shadow-blue-900'/>  

            <div className='mt-32 lg:z-10 lg:text-left text-center'>
              <h1 className='text-5xl lg:text-8xl text-white animate__animated animate__fadeInDown animate__delay-500ms amatic'><strong>Lautaro Chini</strong><span className='text-4xl text-blue-600'>.</span></h1>
              <h2 className='text-3xl lg:text-5xl font-extrabold text-white animate__animated animate__fadeInDown animate__delay-800ms'>Web Developer</h2>
              <div className='flex flex-row gap-3 text-white text-3xl lg:justify-start justify-center'>
                <a href="https://github.com/snowydevd" target='_blank' className='duration-150 hover:text-slate-800'><BsGithub/></a>
                <a href="https://www.instagram.com/chini17__/?hl=es" target='_blank' className='duration-150 hover:text-orange-900'><BsInstagram/></a>
              </div>

            </div>
            
            <Image alt='blurr' width={500} height={500} src={Blurr} className='absolute lg:z-0 hidden lg:block'/>
          </div>

          <Image alt='avatar' src={Avatar}  className='w-48 h-48 lg:w-72 lg:h-72 rounded-full animate__animated animate__fadeInDown animate__delay-1.5ms hidden lg:block shadow-xl shadow-blue-900'/>
          
          
        </article>

        
      </section>

      <section id='about' className='w-5/6 lg:w-4/6 h-[70vh] flex justify-center items-center flex-col mt-24 mb-32 about-bg'>
        <div className='w-full text-center'>
          <h1 className='text-7xl lg:text-9xl font-extrabold  text-white animate__animated animate__fadeInDown animate__delay-200ms'>About me</h1>
        </div>

        <article className='flex flex-col w-full lg:w-5/6 p-3 mt-7 lg:mt-16'>

          <div className='w-full flex justify-center lg:justify-end lg:m-3 '>
              <div className='w-3/4   text-center lg:text-right text-white p-3 rounded-lg text-sm lg:text-xl animate__animated animate__fadeIn '>
                My name is Lautaro Chini from Uruguay.
                I started my way into programming when i was 13 with JavaScript and Java, Im really curious and always trying to improve my skills.
              </div>
              
          </div>

          <div className='w-full flex justify-center lg:justify-start lg:m-3 mt-3'>
              <div className='w-3/4  text-center lg:text-left text-white p-3 rounded-lg text-sm lg:text-xl animate__animated animate__fadeIn '>
              In my country it isn't common to study this kind of subjects like coding or computer science, so i had to study and investigate it on my own.
              </div>
              
          </div>

          <div className='w-full flex justify-center lg:justify-end lg:m-3 mt-3'>
              <div className='w-3/4  text-center lg:text-right text-white p-3 rounded-lg text-sm lg:text-xl animate__animated animate__fadeIn '>
              I always have been curious about computers and software on the way they work and understand that.
              So when I was 13 I started investigating and started developing discord bots with <a target='_blank' href="https://discord.js.org" className=' underline'>discord.js</a>,
              </div>
              
          </div>

          <div className='w-full flex justify-center lg:justify-start lg:m-3 mt-3'>
              <div className='w-3/4  text-center lg:text-left text-white p-3 rounded-lg text-sm lg:text-xl animate__animated animate__fadeIn '>
              Then I decided to start learning something new like another language, so I started with python. It was there that i realised that i was more interested in the backend. Anyways I like the front-end 😄.
              </div>
              
          </div>

        </article>
          
      </section>


      <section id='projects' className='w-5/6 lg:w-full h-[150vh] flex justify-center items-center flex-col mt-32'>
        <div className='w-full text-center'>
          <h1 className='text-7xl lg:text-9xl font-extrabold  text-white animate__animated animate__fadeInDown animate__delay-500ms'>Projects</h1>
        </div>

        <article className='w-full flex flex-col justify-center items-center mt-16'>
          {/* OXILIFE */}
          <div className='w-3/4 flex flex-col lg:flex-row justify-center items-center text-white'>
            <div className='text-center w-3/4'>
              <h2 className='lg:text-6xl text-4xl font-extrabold'>Oxilife</h2>
              <h3 className='lg:text-6xl'>(in progress)</h3>
              <p>With this sofisticated calculator, you can clean your lake in a short period of time!</p>

            </div>
            
            <div>
              <Image alt='oxiShot' src={oxiShot} width={700} className='hidden lg:block'/>
              <Image alt='oxiShot' src={oxiShotPhone} width={700} className='block lg:hidden'/>
            </div>
          </div>

          {/* ASL */}
          <div className='w-3/4 flex flex-col lg:flex-row justify-center items-center text-white'>
          <div>
              <Image alt='oxiShot' src={aslShot} width={700} className='hidden lg:block'/>
              
          </div>

            <div className='text-center w-3/4 flex flex-col justify-center items-center'>
              <h2 className='lg:text-6xl text-4xl font-extrabold'>ASL Marketing</h2>
              <p>Grow up your business with ASL Marketing by letting more people know about it</p>
              <div className='flex flex-row text-white'>
                <a href="https://github.com/snowydevd/asl-marketing" target='_blank' className='p-2 rounded-lg bg-slate-800 m-2 hover:bg-slate-900 duration-150 hover:-translate-y-1'>Github</a>
                <a href="https://asl-marketing.vercel.app" target='_blank' className='p-2 rounded-lg bg-slate-800 m-2 hover:bg-slate-900 duration-150 hover:-translate-y-1'>WebPage</a>
              </div>
            </div>

            <div>
              <Image alt='oxiShot' src={aslShotPhone} width={700} className='block lg:hidden'/>
            </div>
            
            
          </div>
          {/* Simple Studios */}
          <div className='w-3/4 flex flex-col lg:flex-row justify-center items-center text-white'>
         

            <div className='text-center w-3/4 flex flex-col justify-center items-center'>
              <h2 className='lg:text-6xl text-4xl font-extrabold'>Simple Studios</h2>
              <p>Level up your business by uploading it into the web</p>
              <div className='flex flex-row text-white'>
                <a href="https://github.com/snowydevd/simpleStudiosJS" target='_blank' className='p-2 rounded-lg bg-slate-800 m-2 hover:bg-slate-900 duration-150 hover:-translate-y-1'>Github</a>
                <a href="https://simple-studiosjs.vercel.app" target='_blank' className='p-2 rounded-lg bg-slate-800 m-2 hover:bg-slate-900 duration-150 hover:-translate-y-1'>WebPage</a>
              </div>
            </div>

            <div>
              <Image alt='oxiShot' src={simpleShot} width={700} className='hidden lg:block'/>
              <Image alt='oxiShot' src={simpleShotPhone} width={700} className='block lg:hidden'/>
            </div>
            
            
          </div>

        </article>

          
      </section>


      <section id='contact' className='w-full lg:w-4/6 flex justify-center items-center flex-col mt-32'>
      <div className='w-full text-center'>
          <h1 className='text-5xl lg:text-9xl font-extrabold  text-white animate__animated animate__fadeInDown animate__delay-500ms'>Contact me</h1>
        </div>
        <ContactForm/>
      </section>
       
    </main>
  )
}
