import React, { useEffect, useState } from 'react'

export const OnlineDelivery = () => {
 
    const [data,setData] = useState([]);
    async function fetchdata() {
        // const  data = await fetch("https://jsonformatter.org/31a054")
        const result = await data.json()
        console.log(result.data)
    }
    useEffect(() =>{
       fetchdata()
    },[])


  return (
    <section className="flex justify-center flex-col">
    <div className=" w-[1100px] mt-6 m-auto flex flex-col gap-2 ">
      <div className="font-extrabold text-[24px] text-[#02060ceb]">
        <h2>Restaurants with online food delivery in Nashik</h2>
      </div>
      <div className='w-[100%] h-[50px] border border-purple-600'>
      </div>
    </div>
    <div className='w-[100%] flex '></div>

  </section>
  )
}
