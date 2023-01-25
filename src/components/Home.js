import React from 'react'
import { FaGithubSquare as Github, FaTwitterSquare as Twitter, FaLinkedin as Linkedin, FaYoutubeSquare as Youtube } from 'react-icons/fa'
import { SiSubstack as Substack } from "react-icons/si"
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div 
    className="overflow-hidden App flex flex-col justify-center items-start md:items-center mt-32 md:mt-48 p-10 pt-12"
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}>
        <section 
        className='grid grid-cols-1 items-start md:grid-cols-2 md:items-center md:w-[60%]'>

            <picture>
                <img src="/images/dp.jpg" alt='my profile' className='mb-4 w-32 h-32 rounded-full object-cover md:h-48 md:w-48 md:mb-0'></img>
            </picture>

            <article>

                <h1 className='text-xl font-bold font-sans md:text-4xl'>आकाश🔨</h1>
                <h3 className='font-normal  md:text-xl'>
                  Frontend Developer
                  <p className=" pt-5 underline decoration-purple-600 decoration-4">Build.</p>
                  <br />
                   <p className="-mt-4 underline decoration-pink-600 decoration-4"  >Beautiful.</p>
                   <br/>
                   <p className = "-mt-4 underline decoration-sky-700 decoration-4">Things.</p></h3>
                <br></br>
                <p className='text-sm md:text-base'>
                  Creating and Breaking things with ReactJS, NextJS, 
                  TypeScript and other frontend technologies.</p>
            
            </article>
        </section>
        <section className='w-3/5 md:w-2/5 flex flex-row items-start justify-between md:justify-evenly mt-12 md:mt-24'>
            <a href='https://github.com/real-tea' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <Github/>
            </a>
            <a href='https://twitter.com/a_kasshh' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-green-600 rounded'>
                <Twitter/>
            </a>
            <a href='https://www.linkedin.com/in/akash-singh-2729a2135/' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-pink-600 rounded'>
                <Linkedin className='object-cover'/>
            </a>
            <a href='https://unakash.substack.com/' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-sky-600 rounded'>
                <Substack className='object-cover'/>
            </a>
        </section>
    </motion.div>
  )
}

export default Home
