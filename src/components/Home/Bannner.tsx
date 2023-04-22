/* eslint-disable @next/next/no-img-element */
import React from "react";
const Bannner = () => {
    return (
        <div className="relative text-center text-white ">
            <div className="hidden lg:flex w-auto ">
                <img
                    src="/banner.png"
                    alt="banner"
                    className="w-screen object-cover"
                />
            </div>
            <div className=" relative lg:hidden ">
                <img
                    src="/bannerMobile.png"
                    alt="banner"
                    className="w-screen"
                />
            </div>
            <div className="absolute top-[40%] w-full  flex flex-col  justify-center text-center gap-6 ">
                <h2 className=" text-xl lg:text-2xl">
                    Travel is a best therapy!
                </h2>
                <p className="text-lg">
                    You must go on adventures to find out where you truly
                    belong.
                </p>
            </div>
        </div>
    );
};

export default Bannner;
