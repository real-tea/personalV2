import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div className='mt-32 p-10 pt-12 h-auto flex flex-col justify-evenly items-start md:items-center'
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}>
        <article className='grid grid-cols-1 md:items-center md:w-2/5 md:p-2'>
            <h1 className='font-bold text-lg mb-8'>About me</h1>
            <p className='text-sm'>
                <span className='underline decoration-purple-600 decoration-4'>Engineer & Ethereal</span>
            </p>
            <br></br>
            <p className='text-sm'>
                Hi I am Akash, A 20-something-year-old someone who loves geeking out on Side Projects, 
                Design and Tech... or atleast I can pretend to
            </p>
            <br></br>
            <p className='text-sm'>

            </p>
            <br></br>
            <p className='text-sm'>
                I also love <a className ="underline decoration-green-600 decoration-4" target="_blank" href="https://unakash.substack.com/">Writing</a> (please click here) in my spare time <span className='underline decoration-purple-600 decoration-4'></span>

            </p>
            <br></br>
            <p>I Believe the desire to build something beautiful is the peice of God in us therefore <span  className='underline decoration-purple-600 decoration-4'>Build</span > <span className ="underline decoration-green-600 decoration-4">beautiful</span> <span className='text-sm underline decoration-pink-600 decoration-4'>Things</span> </p>
            <br></br>
            <p className= "text-sm">
                This website is my corner of the Internet, for the toys and trinkets
                I attempt to make. and Just like me, This Website is a...
            </p>
           
            
            
            <p className='text-sm underline decoration-pink-600 decoration-4'>Work In progress:)</p>
        </article>
        <br></br>
        <br></br>
        <p className="text-sm">Built with hope and fear</p>
    </motion.div>
  )
}

export default About
