import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import image1 from '../assets/home5_1_68ba45dd-a8d9-44c7-b875-d92445b1a16d.webp'
import image2 from '../assets/home5_2_9e0d4572-ae3e-4b72-bcea-e6aa191d2fbd.webp'


const listData:any =[
    {
        id:1,
        title:"Lilly ",
        image:"https://images.pexels.com/photos/1974508/pexels-photo-1974508.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:2,
        title:"Tropical",
        image:"https://images.pexels.com/photos/1542937/pexels-photo-1542937.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id:3,
        title:"Outsides",
        image:"https://images.pexels.com/photos/1777813/pexels-photo-1777813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:4,
        title:"Orchid",
        image:"https://images.pexels.com/photos/4671039/pexels-photo-4671039.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        id:5,
        title:"Chrishmash",
        image:"https://images.pexels.com/photos/19268016/pexels-photo-19268016/free-photo-of-potted-plants-next-to-diffuser-bottle-with-balsa-sticks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }
]
const FeatureCard:React.FC = () => {
  return (
    <div className='p-2'>
        <div className='flex justify-around gap-80 mt-20 items-center'>
            <span className='text-3xl sm:text-blue-600' >Find Plant Category</span>
            <span className='flex gap-4'>
                <button className='outline-none' ><FaArrowLeft  className='text-2xl text-slate-600  ' /></button>
                <button className='outline-none' ><FaArrowRight className='text-2xl text-slate-600 ' /></button>
            </span>
        </div>

        <div className='lg:flex sm:grid sm:grid-cols-2  justify-center mt-10 list-none mb-4 gap-10 '>
           {
             listData.map((index)=>(
                <li key={index.id}>
                    <CardReader 
                       title={index.title} 
                        image={index.image} 
                        />
                </li>
             ))
           }
        </div>

        <div className='mt-20'>
            <span className='text-green-900  text-2xl font-bold'>Today's Deal</span>
            <div className='flex  w-full h-full mt-10'>
                <img className='w-1/2' src={image1} alt=' '/>
                <img className='w-1/2' src={image2} alt=' '/>
            </div>
        </div>

    </div>
  )
}

export default FeatureCard;

export function CardReader({title,image}){
    return(
        <div className='flex  rounded-lg flex-col items-center p-4 bg-white'>
             <div className='flex flex-col gap-4'>
                 <h1 className='text-2xl text-center '>{title}</h1>
                 <img src={image} className='h-[10rem] w-[10rem]' />
             </div>
        </div>
    )
}

