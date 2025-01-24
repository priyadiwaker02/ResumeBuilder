import React from "react";
import spinner from '../assets/spinner.png'
import Carousel from "./Carousel";

function Templates(){

    return(
        <>
       <section className="w-full h-auto md:p-[5rem] p-[3rem] gap-10">
          <div className="flex md:flex-row flex-col gap-10">
            <div className="flex flex-col align-middle justify-center md:w-[70%] w-full gap-10">
                <h3 className="md:text-[3.5rem] md:leading-[3.5rem] text-[2rem] leading-[2rem]">Pick one of many world-class templates and build your resume in minutes</h3>
                <p className="md:text-[1.3rem] text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed ipsum urna. Pellentesque laoreet dolor et mi faucibus maximus et eu elit.</p>
                <button className="button w-80"><a href="">Start Creating Your Resume</a> </button>
            </div>
            <div className="flex flex-col align-middle items-center justify-center w-[50%] gap-10">
               <img src={spinner} alt="spinner" className="w-[15rem] spinner" />
            </div>
          </div>
       </section>
       <section>
        <Carousel />
       </section>
       </>
    )

}

export default Templates;