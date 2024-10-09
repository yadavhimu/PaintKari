import React from 'react'


const collection = () => {


  return (
    <div className='w-full h-[100%]'>
      <div className='mt-20'>
        <p className='text-4xl text-center font-medium'>Our Products</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-10 mt-20'>
        <div className='sm:w-[25%]'>
            <img className='rounded-lg' src="./images/asset 4.webp" alt="" />
            <p className='text-2xl  bg-yellow-100 w-1/2 flex justify-center h-10 items-center mt-5 ml-16'>Jute Bag</p>
        </div>
        <div className='sm:w-[25%]'>
            <img className='rounded-lg' src="./images/asset 3.webp" alt="" />
            <p className='text-2xl  bg-yellow-100 w-1/2 flex justify-center h-10 items-center mt-5 ml-16'>Shoes</p>
        </div>
        <div className='sm:w-[25%]'>
            <img className='rounded-lg transition duration-150 ease-out hover:ease-in' src="./images/asset 5.webp" alt="" />
            <p className='text-2xl  bg-yellow-100 w-1/2 flex justify-center h-10 items-center mt-5 ml-16'>T-Shirts</p>
        </div>
        <div className='sm:w-[25%]'>
            <img className='rounded-lg' src="./images/asset 2.webp" alt="" />
            <p className='text-2xl  bg-yellow-100 w-1/2 flex justify-center h-10 items-center mt-5 ml-16'>Saree</p>
        </div>
      </div>
    </div>
  )
}

export default collection
