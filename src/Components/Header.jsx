import React from "react";

const Header = () => {
    const toggle = () => {
        console.log("toggle is working")
    };
    return (
        <header className="w-full h-auto py-[0.5rem] px-[2rem] flex overflow-hidden align-middle justify-center" style={{justifyContent:'space-between'}}>
        <div className="logo text-[3rem]">Resume Builder</div>
        <div className="menu-items flex align-middle justify-center ">
            <ul className="flex gap-10 text-[1.5rem] align-middle justify-center items-center">
                <li>Home</li>
                <li>About Us</li>
                <li>Templates</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="menu-div w-10 h-3  my-2 md:hidden" >
            <div className="menu-icon" onclick="toggleMenu()">
                <div className="line1 transform rotate-45 translate-x-1 translate-y-1"></div>
                <div className="line2 opacity-0"></div>
                <div className="line3 "></div>
            </div>

           {/* <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>  */}

        </div>
    </header>
    )
}


export default Header;