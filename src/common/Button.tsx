import React from "react";
interface iButton {
    variant: ButtonType;
    type: "button" | "submit";
    label: string;
}
export enum ButtonType {
    Varaint1 = "bg-primary-700 p-2 w-[133px] h-[44px] rounded-3xl text-xl",
}
const Button: React.FC<iButton> = ({ variant, type, label }) => {
    return (
        <div>
            <button type={type} className={variant}>
                {label}
            </button>
        </div>
    );
};

export default Button;
