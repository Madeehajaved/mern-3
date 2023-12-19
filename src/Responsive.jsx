import React from "react";
export default function Responsive(){
    return(
        <>
         <div className="flex gap-2 ">
         <div className="flex flex-col space-y-4 ..."></div>
         <div className= "justify-items-streach"></div> 
          <div className="h-20 w-11/12 bg-slate-500"></div>
          <div className="h-20 w-11/12 bg-slate-500"></div>
          </div>

        
          <div className="flex gap">
          <div className="h-20 w-full bg-orange-400"></div>
          </div>

          
          <div className="lg:flex  md:flex-wrap sm:flex-wrap">
          <div className="h-20 w-11/12  bg-lime-600 my"></div>
          <div className="h-20 w-11/12  bg-lime-600"></div>
          <div className="h-20 w-11/12  bg-lime-600"></div>
          </div>

          <div className="flex  flex gap-2">
          <div className="h-20 w-11/12 bg-red-600"></div>
          <div className="h-20 w-11/12    bg-red-600"></div>
          <div className="h-20 w-11/12   bg-red-600"></div>
          <div className="h-20 w-11/12   bg-red-600"></div>        
          </div>



          

        </>
    )
}