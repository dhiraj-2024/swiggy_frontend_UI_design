import React, { useEffect, useState } from "react";
import { IoArrowUndo } from "react-icons/io5";
import { IoArrowRedoSharp } from "react-icons/io5";


function Category(){
 
    const [categories,setCategories] = useState([]);

    const fetchCategory = () =>{
        const response =  fetch('file:///Users/rajputdhiraj/Downloads/swiggy-api%202/data/category.json');
        const data =  response.json();
        setCategories(data);
    }
  useEffect(()=>{
    fetchCategory(); 
  })

    // useEffect(fetchcategory=()=>{
    //     fetch('file:///Users/rajputdhiraj/Downloads/swiggy-api%202/data/category.json')
    //     .then(response => response.json())
    //     .then(data => setCategories(data))  

        
    // },[])

    return(
        
        <section className="flex justify-center ">
            <div className="flex justify-between w-[1080px] mt-6 ">
                <div className="font-extrabold text-[24px] text-[#02060ceb]"><h2>What's on your mind?</h2></div>
                <div className="flex gap-2 ">
                    <button>
                        <div className="rounded-full h-[35px] w-[35px] bg-[#02060c26] flex justify-center items-center">
                            <IoArrowUndo/>
                        </div>
                    </button>
                    <button className="">
                        <div className="rounded-full h-[35px] w-[35px] bg-[#02060c26] flex justify-center items-center">
                            <IoArrowRedoSharp/>
                        </div>
                    </button>
                    
                </div>
            </div>


        </section>
    )
}
export default Category;