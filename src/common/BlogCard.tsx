import React from "react";
import Title from "./Title";

const BlogCard = () => {
    return (
        <div className=" relative m-auto w-full">
           
                <img src="/Rectangle.png" className="w-full " />
        
            <div className="absolute bg-mask w-full h-full max-h-[300px] bottom-0 left-0 flex flex-col justify-end pb-16 text-left">
                    <Title label="Hidimba Devi Temple - Manali, Himachal" />
                    <p >
                        Hadimba Temple, is located in Manali, a hill station in
                        the State of Himachal Pradesh in north India, also known
                        as Dhungari Temple.
                    </p>
             
            </div>
        </div>
    );
};

export default BlogCard;