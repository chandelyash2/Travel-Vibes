import React from "react";

const TrendingCards = () => {
    return (
        <div className="flex flex-col gap-2 bg-grey-100">
            <img src="/Rasol.JPG" className="max-w-[500px] max-h-[500px]" />
            <div className="flex flex-col gap-2 p-2">
                <h2 className="text-primary-700 text-xl ">
                    India’s most beautiful place all must visit
                </h2>
                <p>
                    This place is situated in Himachal Pradesh Kangra{" "}
                    <span className="text-primary-700">Read More...</span>
                </p>
            </div>
        </div>
    );
};

export default TrendingCards;
