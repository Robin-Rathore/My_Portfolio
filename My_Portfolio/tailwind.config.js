/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
                  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
                  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
                  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          LightPrimaryColor : "#9b9b9c",
          PrimiaryColor : "#e0e0e3", // Light Grayish White Colour
          SecondaryColor : "#ffc86b", // Yellowish Orange
          DarkColor : "#3d3e42", // Dark Gray Colour
          ExtraDarkColor : "#31333b", // Dark balkish Gray
          CardColor : "#3d3e42", // Card Colour
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },

        fontFamily: {
          josefin: ['"Josefin Sans"', 'sans-serif'],  // Custom font family
        },
        fontWeight: {
          light: 300, // Define custom font weights if needed
          normal: 400,
          bold: 700,
        },  
        flex: {
          '3': '3 3 0%', // Custom flex value
          '4': '4 4 0%', // Custom flex value
        },
        zIndex: {
          'custom-low': -10, // Custom low z-index value
          'custom-Extremelow': -100, // Custom high z-index value
        },
        screens: {
          'sm': {'max': '600px'},  // Apply styles up to 600px
          'md': '601px',           // Apply styles starting from 601px
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
      },
    },
    plugins: [],
  };
  