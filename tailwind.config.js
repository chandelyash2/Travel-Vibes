/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                kaushan: ["Kaushan Script", "cursive"],
            },
            backgroundImage: {
                mask: "url('/Mask group.png')",
            },
        },
        colors: ({ colors }) => ({
            current: colors.current,
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            grey: colors.grey,
            primary: "#027f89",
        }),
    },
    plugins: [],
};
