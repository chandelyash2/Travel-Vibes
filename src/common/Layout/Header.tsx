import React, { useEffect, useState } from "react";
import Button, { ButtonType } from "../Button";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
const navList = [
    {
        name: "Home",
    },
    {
        name: "Blog",
    },
    {
        name: "Experience",
    },
    {
        name: "Discover Stories",
    },
];
const Header: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setScrollPosition(window.pageYOffset > 20)
            );
        }
    }, []);
    return (
        <header
            className={`w-full backdrop-blur-[2px]  ${
                scrollPosition ? "sticky top-0 bg-primary-700 " : "absolute"
            } `}
        >
            <Container>
                <div className="w-full flex gap-4 items-center py-9 justify-between text-white ">
                    <div>
                        <Image
                            src="/Logo.png"
                            alt="logo"
                            className="cursor-pointer"
                            width={165}
                            height={40}
                        />
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="flex gap-10 text-lg cursor-pointer">
                            {navList.map((nav, i) => (
                                <li key={i} className="">
                                    <Link href="/">{nav.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:hidden">
                        <Image
                            src="/Menu Bar.png"
                            alt="Menu"
                            className="cursor-pointer"
                            width={24}
                            height={0}
                        />
                    </div>
                    <div className="hidden lg:flex">
                        <Button
                            label="Contact Us"
                            type="button"
                            variant={
                                scrollPosition
                                    ? ButtonType.Variant2
                                    : ButtonType.Varaint1
                            }
                        />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
