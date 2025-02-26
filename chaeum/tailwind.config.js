/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      pretendard: ["Pretendard", "sans-serif"],
    },
  },
};
export const plugins = [];
