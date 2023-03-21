import React from "react";
import Button, { ButtonType } from "../Button";
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
        <header className="w-full absolute text-white">
            <Container>
                <div className="w-full flex gap-4 items-center py-9 justify-between text-white">
                    <div>
                        <img
                            src="/Logo.png"
                            className="max-w-[164px] h-auto "
                        />
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="flex gap-10 text-lg">
                            {navList.map((nav, i) => (
                                <li key={i}>{nav.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:hidden">
                        <img
                            src="/Menu Bar.png"
                            className="w-6  cursor-pointer"
                        />
                    </div>
                    <div className="hidden lg:flex">
                        <Button
                            label="Contact Us"
                            type="button"
                            variant={ButtonType.Varaint1}
                        />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
