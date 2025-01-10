import React from 'react'

export const Card = () => {
  return (

    <div className="w-[1080px] border  flex m-auto mt-2 gap-7 overflow-hidden  ">
        {topRestaurant.map((restaurant) => {
          const {id,image,offer,title,rating,minTime,maxTime,name,place } = restaurant;
          return (
            <div key={restaurant.id} className="w-[300px] h-[300px] flex flex-col   rounded-xl cursor-pointer duration-700 ">
              <div className="w-[280px] h-[185px] bg-cover  bg-no-repeat items-center relative  ">
                <img
                  src={restaurant.image}
                  alt=""
                  className="w-[100%] h-[100%] rounded-xl block "
                />
                <div className="overlay">
                  <p className="text">{restaurant.offer}</p>
                </div>
              </div>
              <div className="text-[18px] font-extrabold ml-2 mt-2 font-swap">
                {restaurant.title}
              </div>
              <div className="flex flex-row gap-3 ">
                <div className="flex items-center gap-1 ml-2 ">
                  {" "}
                  <FcRating className="text-[20px]" />
                  {restaurant.rating} -{" "}
                </div>
                <div className="font-[600]">
                  {restaurant.minTime}-{restaurant.maxTime} mins
                </div>
              </div>
              <div className="ml-2  text-[gray] text-[15px] font-medium">
                {restaurant.name}
              </div>
              <div className="ml-2  text-[gray] text-[15px] font-medium">
                {restaurant.place}
              </div>
            </div>
          );
        })}
      </div>

  )
}
