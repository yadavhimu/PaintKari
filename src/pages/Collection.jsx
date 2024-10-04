import React,{useContext ,useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const collection = () => {

  const { products } = useContext(ShopContext);
  const [ showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex-flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      <div className='w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt=""/>
        </p>
         
        {/* { Category Filter} */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `}>
         <p className='mb-3 text-sm font-medium'>Categories</p>
         <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex-gap-2'>
            <input className='w-3' type="checkbox" value={'Saree'}/>Saree
          </p>
          <p className='flex-gap-2'>
            <input className='w-3' type="checkbox" value={'Shoes'}/>Shoes
          </p>
          <p className='flex-gap-2'>
            <input className='w-3' type="checkbox" value={'T-shirt'}/>T-Shirt
          </p>
          <p className='flex-gap-2'>
            <input className='w-3' type="checkbox" value={'jute-bag'}/>Jute Bag
          </p>
         </div>
        </div>
      </div>

    </div>
  )
}

export default collection
