import React from 'react'
import AnimatedCounter from './Counter'

const Value = () => {
  return (
    <div>
      <h2 className='text-center text-white font-bold text-3xl'>
        We help you 
      </h2>
      <div  className='flex flex-row m-20 mt-20 justify-between items-center font-semibold text-4xl text-white '>
      <div className='flex flex-col items-center transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110 hover:text-black'>
        <h2>10X</h2>
        <h2>Value</h2>
      </div>
      <div className='flex flex-col items-center transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110 hover:text-black'>
        <h2 className='flex flex-row'>$<AnimatedCounter endValue={100} interval={20}/>K+</h2>
        <h2>Revenue</h2>
      </div>
        <div className='flex flex-col items-center transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110 hover:text-black'>
        <h2>1/3</h2>
         <h2>CA Cost</h2>
        </div>
        <div className='flex flex-col items-center transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110 hover:text-black'>
            <h2>5X</h2>
            <h2>Sales</h2>
        </div>
      </div>
    </div>
  )
}

export default Value