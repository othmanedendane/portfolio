/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: { //2alwan o dakchi
        blue: "#2CBCE9",
        khdar: "#2C5F2DFF",
        lfat7: "#FFE77AFF",
        red: "#DC4492",
        chibi: "#3090C7",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
          "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: { //ecriture
        playfair: ["playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: { //for images
        brush: "url('./assets/brush.png')",
        tr: "url('./assets/tr.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/soufiane.png')",
        person3: "url('./assets/person-3.png')",
      }
    },
    screens: {  //responsive, gives us the class names that we can use with screens
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: '1024px',
        xl: '1245px',
        x: '1340px',
        xxl: '1536px',
    }  
  },
  plugins: [],
}
