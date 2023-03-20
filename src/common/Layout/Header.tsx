import Link from "next/link";
import React from "react";
import Container from "../Container";

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
        name: "Discover Sories",
    },
];
const Header: React.FC = () => {
    return (
        <header className="w-full absolute ">
            <Container>
                <div className="w-full flex gap-4 items-center py-9 justify-between text-white	 ">
                    <div>
                        <img
                            src="/Logo.png"
                            className="max-w-[164px] h-auto "
                        />
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            {navList.map((nav, i) => (
                                <li key={i}>{nav.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div>ccdcdc</div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
