/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px"
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
      },
      fontFamily:{
        titleFont:"Roboto",
        bodyFont:"Poppins"
      },
      colors:{
        amazon_blue:"#131921",
        amazon_light:"#232F3E",
        amazon_yellow:"#ebd69",
        whiteText:"ffffff",
        lightText:"#ccc",
        quantity_box:"#0F2F2",
        footerBottom:"#131A22",
      },
      boxShadow:{
        textShadow:"0px 0px 32px 1px rgba(199, 199, 199, 1)",
        amazonInput:"0 0 3px 2px rgb(228 121 17 / 50%)",
      },
    },
  },
  plugins: [],
};

//const plugin = require('tailwindcss/plugin')

// module.exports = {
//   theme: {
//     extend: {
//       bgGradientDeg: {
//         75: '75deg',
//       }
//     }
//   },
//   plugins: [
//     plugin(function({ matchUtilities, theme }) {
//       matchUtilities(
//           {
//               'bg-gradient': (angle) => ({
//                   'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
//               }),
//           },
//           {
//               values: Object.assign(
//                   theme('bgGradientDeg', {}),
//                   {
//                       10: '10deg',
//                       15: '15deg',
//                       20: '20deg',
//                       25: '25deg',
//                       30: '30deg',
//                       45: '45deg',
//                       60: '60deg',
//                       90: '90deg',
//                       120: '120deg',
//                       135: '135deg',
//                   }
//               )
//           }
//       )
//   })
//   ],
// }

