// import React from 'react'
// import { IoIosStar } from "react-icons/io";
// const ProductCard:React.FC = ({Image, title, subTitle, retailPrice, wholesalePrice, review,add, buy}) => {
//   return (
//     <div className='bg-blue-50'>
//       <div className='flex flex-col '>
//           <div className=''>
//             <img src={Image} className='h-[340px] w-[480px] object-cover ' alt=''/>
//           </div>
//           <div className=''> <h1 className='texts-slate-900 text-3xl text-nowrap leading' >{title}</h1></div>
//           <div className=''><h2 className=''  >{subTitle}</h2></div>
//           <div className=''>
//             <button>{wholesalePrice}</button>
//             <button>{retailPrice}</button>
//           </div>
//           <div className=''>
//           <IoIosStar>{review}</IoIosStar>
//           </div>
// <div className=''>
//     <div className=''><button>{add}</button></div>
//     <div className=''><button>{buy}</button></div>
// </div>

//       </div>
//     </div>
//   )
// }

// export default ProductCard;

import React from 'react';
import { IoIosStar } from 'react-icons/io';

interface ProductCardProps {
  image: string;
  title: string;
  subTitle: string;
  retailPrice: string;
  wholesalePrice: string;
  review: number;
  add: string;
  buy: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, subTitle, retailPrice, wholesalePrice, review, add, buy }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out'>
      <div className='flex flex-col items-start'>
        {/* Product Image */}
        <div className='w-full'>
          <img
            src={image}
            className='h-[300px] w-full object-cover rounded-t-lg'
            alt={title}
          />
        </div>

        {/* Product Title and Subtitle */}
        <div className='mt-4 text-start'>
          <h1 className='text-slate-900 text-xl font-bold'>{title}</h1>
          <h2 className='text-slate-600 text-sm'>{subTitle}</h2>
        </div>

        {/* Pricing Section */}
        <div className='flex justify-start gap-2 w-full mt-4 '>
          <button className='bg-gray-100  text-black px-4 py-2 rounded-md'>
            Wholesale: {wholesalePrice}
          </button>
          <button className='bg-slate-100 text-black px-4 py-2 rounded-md'>
            Retail: {retailPrice}
          </button>
        </div>

        {/* Reviews */}
        <div className='flex items-center mt-4'>
          {[...Array(review)].map((_, i) => (
            <IoIosStar key={i} className='text-yellow-400 text-xl' />
          ))}
          <span className='ml-2 text-sm text-gray-600'>({review})</span>
        </div>

        {/* Add to Cart and Buy Now Buttons */}
        <div className='flex justify-between w-full mt-4'>
          <button className='bg-emerald-950 text-white w-1/2 px-4 py-2 rounded-md mx-1'>
            {add}
          </button>
          <button className='border-2  text-emerald-900 border-emerald-900 w-1/2 px-4 py-2 rounded-md mx-1'>
            {buy}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
