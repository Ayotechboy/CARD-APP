/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'Os': {'max': '2715px'},
      // => @media (max-width: 2715px) { ... }

      'Ps': {'max': '2000px'},
      // => @media (max-width: 2000px) { ... }

      'Fs': {'max': '1500px'},
      // => @media (max-width: 1400px) { ... }

      'Ss': {'max': '1200px'},
      // => @media (max-width: 1200px) { ... }
      
      'Us': {'max': '1050px'},
      // => @media (max-width: 1050px) { ... }

      'Ts': {'max': '800px'},
      // => @media (max-width: 800px) { ... }
  },
  },
  plugins: [],
}

