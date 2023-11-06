/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainCol: "#6C63FF",
            },
        },
    },
    plugins: [require("daisyui")],
};
