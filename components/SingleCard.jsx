'use client'
import React from 'react'
import Image from 'next/image';

const SingleCard = ({id,title,price,description,category,image}) => {
  return (
    <div className='h-105 border w-90 bg-blue-50 p-5 cursor-pointer rounded'>
        <div className="cat h-[5%] w-full">
          <p className='text-sm text-gray-500 ml-1'>{category}</p>
        </div>
        <div className="img relative h-[70%] w-full mt-2">
           <Image src={image} alt={title} className='object-cover' fill
          priority/>
        </div>
        <div className="title h-[15%] w-full">
          <p className='text-lg font-semibold'>{title}</p>
        </div>
        <div className="price h-[105] w-full">
            <p className='text-xl font-bold'>${price}</p>
        </div>
    </div>
  )
}

export default SingleCard
