import React from 'react'

const Hearder = () => {
  return (
    <div className='bg-black p-4 flex items-center justify-between sticky'>
      <div className='flex items-center space-x-4'>
        <h1 className='uppercase text-red-700 font-bold text-[30px]'>Movie</h1>
        <nav className='flex items-center space-x-4 text-white text-[20px]'>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div className='flex space-x-4'>
        <input type="text" placeholder='Search' className='p-3 text-black rounded-md' />
        <button className='text-white bg-red-400 p-2 rounded-md'>Search</button>
      </div>
    </div>
  )
}

export default Hearder