import React from 'react'
import { IoIosStar } from "react-icons/io";
const ProductCard = ({Image, title, subTitle, retailPrice, wholesalePrice, review,add, buy}) => {
  return (
    <div className='bg-blue-100'>
      <div className='flex flex-col '>
          <div className=''>
            <img src={Image} className='h-[340px] w-[480px] object-cover ' alt=''/>
          </div>


          <div className=''> <h1 className='texts-slate-900 text-3xl text-nowrap leading' >{title}</h1></div>
          <div className=''><h2 className=''  >{subTitle}</h2></div>
          <div className=''>
            <button>{wholesalePrice}</button>
            <button>{retailPrice}</button>
          </div>
          <div className=''>
          <IoIosStar>{review}</IoIosStar>
          </div>
<div className=''>
    <div className=''><button>{add}</button></div>
    <div className=''><button>{buy}</button></div>
</div>

      </div>
    </div>
  )
}

export default ProductCard;
