import { useState } from "react";
import fooddataList from "../../api/foodCategory.json"
import { IoArrowUndo } from "react-icons/io5";
import { IoArrowRedoSharp } from "react-icons/io5";

function Category() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="flex justify-center  flex-col">
      <div className="flex justify-between w-[1100px]  m-auto ">
        <div className="font-extrabold text-[24px] text-[#02060ceb]">
          <h2>What's on your mind?</h2>
        </div>
        <div className="flex gap-2 ">
          <button onClick={() => {
                  if (slide == 0) return false;
                  setSlide(slide - 3);
                }}>
            <div className="rounded-full h-[35px] w-[35px] bg-[#02060c26] flex justify-center items-center">
              <IoArrowUndo className="text-[22px]"/>
              
            </div>
          </button>
          <button  onClick={() => {
                  //   console.log(fooddataList.length)
                  //   console.log(slide+3)
                  if (fooddataList.length - 5 == slide) return false;

                  setSlide(slide + 3);
                }}>
            <div className="rounded-full h-[35px] w-[35px] bg-[#02060c26] flex justify-center items-center">
              <IoArrowRedoSharp className="text-[22px]"/>
            </div>
          </button>
        </div>
      </div>

      <div className="w-[1080px] border  flex m-auto mt-2 overflow-hidden  ">
        {fooddataList.map((category) => {
          const { image, id } = category;
          return (
            <div
              className="w-[180px] duration-500 shrink-0 "
              key={id}
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
            >
              <div className="flex justify-center flex-col items-center w-[175px] h-[200px]">
                <img src={image} alt="" className="w-[144px] h-[180]" />
              </div>
            </div>
          );
        })}
      </div>
      <hr className="bg-[black] border-[2px] my-6" />
    </section>
  );
}
export default Category;
