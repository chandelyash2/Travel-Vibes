import React from "react";
interface iHeading {
    children: React.ReactNode;
    variant: string;
}
export enum HeadingVariant {
    H1 = "font-normal text-7xl leading-[107px]",
    H2 = "font-normal text- leading-[107px]",
}

const Heading: React.FC<iHeading> = ({ children, variant }) => {
    return <div className={variant}>{children}</div>;
};

export default Heading;
