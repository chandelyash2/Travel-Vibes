import Image from "next/image";
import React from "react";

const socialLinks = [
    {
        name: "Facebook",
        url: "/facebook.png",
    },
    {
        name: "Instagram",
        url: "/instagram.png",
    },
    {
        name: "Twitter",
        url: "/twitter.png",
    },
];
const Footer = () => {
    return (
        <footer className="max-h-[496px] bg-primary-700 w-full text-white">
            <div className="flex flex-col items-center py-20 gap-6">
                <div>
                    <Image
                        src="/Logo.png"
                        alt="logo"
                        className="cursor-pointer"
                        width={165}
                        height={40}
                    />
                </div>
                <div className="w-[60%] text-center lg:w-[40%] ">
                    <p className="text-sm font-semibold lg:text-lg">
                        Travel Vibes is a personal blog site, and we share our
                        personal experiance related to places. A good story has
                        a beginning, middle and end. The beginning is where you
                        make a promise to viewers that this story will lead
                        somewhere worthy of their time.
                    </p>
                </div>
                <hr className="border-white border-solid w-[80%] opacity-20 " />
                <div className="flex gap-2 lg:gap-4">
                    {socialLinks.map((link, i) => (
                        <Image
                            src={link.url}
                            alt={link.name}
                            className="cursor-pointer"
                            width={38}
                            height={38}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
