import React from "react";
import homebg from '../assets/home-animation.svg'
import FlipSlider from "./FlipSlider";
import Templates from "./Termplates";

const Hero=()=>{
    return(
        <div>
     <section className="hero backdrop-blur-[10px] overflow-hidden p-10">
        <div className="circle circle1 md:mt-[-32%] md:ml-[-83%] mt-[-50%] ml-[-50%] overflow-hidden"></div>
        <div className="parent  w-full flex align-middle justify-center py-0 px-[1rem] md:px-[2rem] flex-col-reverse md:flex-row">
            <div className="w-full content flex flex-col align-middle justify-center md:px-[2rem] px-[2rem] gap-[2rem] text-center z-2 items-center">
                <h1 className="text-[3rem] md:text-[6.5rem] md:leading-[6rem] text-center leading-[3rem]">The Best Online
                    Resume Builder</h1>
                <p className="md:text-[1.5rem] text-3xl w-100">Easily create a resume for any job using our best-in-class resume builder platform.</p>

                <button className="button w-80"><a href="">Start Creating Your Resume</a>
                </button>
            </div>
            <div className="slider w-[40rem] min-h-[600px] flex align-middle justify-center">
             <FlipSlider/>
            </div>
        </div>
        <div className="circle circle2 md:mt-[33%] md:ml-[77%] mt-[80%] ml-[50%]"></div>  
    </section>
    <Templates />
    </div>
    )
}
export default Hero;