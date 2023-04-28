import Link from "next/link";
import React from "react";
import BlogBanner from "src/components/Blogs/BlogBanner";
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
const SocialCounter: React.FC = () => {
    return (
        <BlogBanner label="Social" label1="counter">
            <div className="flex gap-4 ">
                {socialLinks.map((item, i) => (
                    <div
                        className="text-center border border-[#027F89]/[.1] w-[32px] h-[32px]"
                        key={i}
                    >
                        <Link href="/">a</Link>
                    </div>
                ))}
            </div>
        </BlogBanner>
    );
};

export default SocialCounter;
