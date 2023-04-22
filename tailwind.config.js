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
            primary: {
                50: "#eefffe",
                100: "#c6fffd",
                200: "#8dfffc",
                300: "#4cfcfb",
                400: "#18e3e9",
                500: "#00c5cd",
                600: "#009ba5",
                700: "#027f89",
                800: "#075f68",
                900: "#0c4f55",
            },
        }),
    },
    plugins: [],
};
