import React from "react";
import { useState } from "react";
import topRestaurant from "../../api/topRest.json"
import { IoArrowUndo } from "react-icons/io5";
import { IoArrowRedoSharp } from "react-icons/io5";
import { FcRating } from "react-icons/fc";

export const TopRest = () => {
  const [slide, setSlide] = useState(0);

  return (
    <section className="flex justify-center  flex-col">
      <div className="flex justify-between w-[1100px] mt-6 m-auto ">
        <div className="font-extrabold text-[24px] text-[#02060ceb]">
          <h2>Top restaurant chains in Nashik</h2>
        </div>
        <div className="flex gap-2 ">
          <button>
            <div className="rounded-full h-[35px] w-[35px] bg-[#02060c26] flex justify-center items-center">
              <IoArrowUndo
                className="text-[22px]"
                onClick={() => {
                  if (slide == 0) return false;
                  setSlide(slide - 2);
                }}
              />
            </div>
          </button>
          <button>
            <div className="rounded-full h-[35px] w-[35px] bg-[#02060c26] flex justify-center items-center">
              <IoArrowRedoSharp
                className="text-[22px]"
                onClick={() => {
                  console.log(topRestaurant.length);
                  console.log(slide + 2);
                  if (topRestaurant.length - 2 == slide) return false;

                  setSlide(slide + 2);
                }}
              />
            </div>
          </button>
        </div>
      </div>

      <div className="w-[1080px] border  flex m-auto mt-2 gap-7 overflow-hidden  ">
        {topRestaurant.map((restaurant) => {
          const {id,image,offer,title,rating,minTime,maxTime,name,place } = restaurant;
          return (
            <div
              style={{
                transform: `translate(-${slide * 100}%)`,
              }}
              key={restaurant.id}
              className="w-[300px] h-[300px] flex flex-col   rounded-xl cursor-pointer duration-700 "
            >
              <div className="w-[280px] h-[185px] bg-cover  bg-no-repeat items-center relative hover:scale-95 duration-300  ">
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
      <hr className="bg-[black] border-[2px] my-6" />
    </section>
  );
};
