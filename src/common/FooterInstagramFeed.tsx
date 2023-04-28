import React from "react";
import Image from "next/image";
const FooterInstagramFeed = () => {
    return (
        <div className="flex w-full">
            <Image
                src="/Rasol.JPG"
                width="200"
                height="100"
                alt="img"
                className="object-cover"
            />
            <Image
                src="/Lahaul.jpeg"
                width="200"
                height="100"
                alt="img"
                className="object-cover"
            />

            {/* <Image
                    src="/Rectangle.png"
                    width="200"
                    height="100"
                    alt="img"
                    className='object-cover'

                /> */}

            {/* <Image
                    src="/Home.jpeg"
                    width="200"
                    height="100"
                    alt="img"
                    className='object-cover'

                />
                   <Image
                    src="/waterfaal.jpg"
                    width="200"
                    height="100"
                    alt="img"
                    className='object-cover'

                /> */}
        </div>
    );
};

export default FooterInstagramFeed;
