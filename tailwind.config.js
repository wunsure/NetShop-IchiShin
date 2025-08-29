/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 將 'Kanit' 添加到默認的 sans-serif 字體列表的最前面
        sans: ['Kanit', ...defaultTheme.fontFamily.sans],
        // 你也可以定義一個 serif 字體，如果需要的話
        serif: ['Montagu Slab', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}