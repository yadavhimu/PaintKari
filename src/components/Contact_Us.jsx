import React from 'react'

const Contact_Us = () => {
  return (
    <div className='bg-gray-200 w-full h-[100%]'>
      <div className=''>
        <h1 className=' text-center text-5xl font-medium mt-10 p-2'>Contact Us</h1>
      </div>
      <div className='flex flex-col sm:flex-row mt-20 '>
        <div className='w-full h-[100%] bg-white p-10 sm:ml-5 mb-10 shadow-2xl rounded-lg'>
            <div className=''>
            <p className='text-4xl font-medium'>Send us a Message</p>
            <div className=''>
                <form>
                    <div className='input-box mt-10'>
                        <input type="text" className='field w-full h-14 p-2 bg-gray-100' placeholder='Name' required/>
                    </div>
                    <div className='input-box sm:flex mt-5 gap-2'>
                        <input type="email" className='field w-full h-14 p-2  bg-gray-100' placeholder='Email' required/>
                        <input type="number" className='field w-full h-14 p-2 mt-5 sm:mt-0 bg-gray-100' placeholder='Number' required/>
                    </div>
                    <div className='input-box'>
                        <textarea name='' id="" className='w-full h-24 mt-5 p-2 bg-gray-100' placeholder='Enter your message' required></textarea>
                    </div>
                    <button type="submit" className='bg-yellow-300 w-48 h-10 rounded-lg text-xl mt-8'>Send Message</button>
                </form>
            </div>
            </div>
        </div>
        <div className='w-full h-[100%] p-10'>
            <div>
            <p className='text-4xl font-medium'>Contact</p>
            <p className='text-4xl font-medium'>Information</p>
            </div>
            <p className='text-2xl font-medium mt-10'>Hotline :</p>
            <p className='text-xl mt-2'>+91-6393418797</p>
            <p className='text-2xl font-medium mt-5'>Our Location :</p>
            <p className='text-xl mt-2'>Anand Gooba Garden Rajenclave 9th Floor Kalyanpur, U.P., </p>
            <p className='text-xl mt-2'>India-208017</p>
            <p className='text-2xl font-medium mt-5'>Official Email :</p>
            <p className='text-xl mt-2'>kaushalsuperna@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact_Us
