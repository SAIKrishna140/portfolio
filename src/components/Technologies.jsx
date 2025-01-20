import React from 'react'
import { FaReact } from "react-icons/fa";
const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Known Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
        <div>
        <img 
            src="https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000" 
            alt="Custom Python Icon" 
            className='p-4 text-9xl'
          />
        </div>

        <div>
        <img 
            src="https://img.icons8.com/?size=100&id=Wy3XKG1CjyKf&format=png&color=000000" 
            alt="Database Icon" 
            className='p-4 text-9xl'
          />
        </div>
        <div>
        <img 
            src="https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000" 
            alt="Tensor Flow Icon" 
            className='p-4 text-9xl'
          />
        </div>
        <div>
        <img 
            src="https://img.icons8.com/?size=100&id=97624&format=png&color=000000" 
            alt="Machine Learning Icon" 
            className='p-4 text-9xl'
          />
        </div>
        <div 
            className='flex items-center justify-center p-4 w-[100px] h-[100px] bg-transparent text-blue-500'
          >
            <FaReact className='text-9xl' />
          </div>
        <div>
        <img 
            src="https://img.icons8.com/?size=100&id=17842&format=png&color=000000" 
            alt="Linux Icon" 
            className='p-4 text-9xl'
          />
        </div>
        </div>
      
    </div>
  )
}

export default Technologies
