/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {"100":"#7FFADE","200":"#5FF9D5","300":"#3FF8CD","400":"#1FF7C5","500":"#09EAB4","600":"#07CFA0","700":"#06B189","800":"#059472","900":"#04765C"},
        secondary: {"100":"#C8FEF6","200":"#BBFDF3","300":"#ADFDF1","400":"#9FFDEF","500":"#93FCEC","600":"#61FBE4","700":"#31FADC","800":"#06F2CF","900":"#05C2A6"},
        tertiary: {"100":"#8A7AB8","200":"#6C59A6","300":"#574785","400":"#413663","500":"#2C2443","600":"#261F3A","700":"#211B32","800":"#1B1629","900":"#161221"},
        cream: {"100":"#FAF8FB","200":"#F9F7FB","300":"#F8F5FA","400":"#F7F3F9","500":"#F6F2F8","600":"#DACAE2","700":"#BFA2CD","800":"#A37AB8","900":"#87569F"},
        gray: {"100":"#BDBCC2","200":"#ACABB3","300":"#9B9BA4","400":"#8B8A95","500":"#7A7985","600":"#6B6A75","700":"#5C5B64","800":"#4C4C54","900":"#3D3D43"},
        darkGreen: {"500": "#00501E"},
        mintGreen: {"500": "#e5ffbe"},
        lightGreen: {"500": "#a8fe28"},
      },
      maxHeight: {
        '500': '500px',
        '400': '400px',
        '200': '200px',
      },
      spacing: {
        '500': '500px',
        '400': '400px',
        '300': '300px',
        '200': '200px',
      }
    },
  },
  plugins: [],
}
