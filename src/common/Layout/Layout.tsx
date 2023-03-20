import React from "react";
import Footer from "./Footer";
import Header from "./Header";
interface iLayout {
    children: React.ReactNode;
}
const Layout: React.FC<iLayout> = ({ children }) => {
    return (
        <div className="min-h-[100vh] flex flex-col justify-between">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
