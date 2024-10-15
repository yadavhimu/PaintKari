import React from 'react'

const Paintings = () => {
  return (
    <div className='  '>
        <h1 className='text-5xl flex justify-center mt-10 font-semibold'>Canvas Painting</h1>
      <div className=' flex flex-col sm:grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 mt-16'>
        <img className='rounded-xl hover:scale-110 transition ease-in-out' src="./images/canva 1.jpg" alt="" />
        <img className='w-full h-[100%] rounded-xl hover:scale-110 transition ease-in-out' src="./images/canva 2.jpg" alt="" />
        <img className='w-full h-[100%] rounded-xl hover:scale-110 transition ease-in-out' src="./images/canva 3.jpg" alt="" />
        <img className='rounded-xl hover:scale-110 transition ease-in-out' src="./images/canva 4.jpg" alt="" />
        <img className='w-full h-[100%] rounded-xl hover:scale-110 transition ease-in-out' src="./images/canva 5.jpg" alt="" />
      </div>
      <div className=' flex flex-col sm:grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 mt-10'>
        <img className='w-full h-80 rounded-xl hover:scale-110 transition ease-in-out ' src="./images/canva 6.jpg" alt="" />
        <img className='w-full h-80 rounded-xl hover:scale-110 transition ease-in-out ' src="./images/canva 7.jpg" alt="" />
        <img className='w-full h-80 rounded-xl hover:scale-110 transition ease-in-out' src="./images/canva 8.jpg" alt="" />
        <img className='w-full h-80 rounded-xl hover:scale-110 transition ease-in-out ' src="./images/canva 9.jpg" alt="" />
        <img className='w-full rounded-xl hover:scale-110 transition ease-in-out ' src="./images/canva 10.jpg" alt="" />
      </div>
    </div>
  )
}

export default Paintings
