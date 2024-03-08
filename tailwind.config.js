/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },

      boxShadow: {
        'custom': '-1px -5px 20px -4px #6c757d, 1px 3px 30px -1px #001524',
        'custom2': '-5px -5px 10px -1px #6c757d, 5px 8px 10px -6px #001d3d',
        'custom3':'-1px -2px 20px -5px #6c757d, 1px 6px 20px -5px #001d3d',
        'custom-inset': 'inset 1px 1px 15px 0 rgb(15 25 42), inset -1px -6px 10px -1px #6c757d'
      },

      opacity: {
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
        '90': '0.9',
      }
    }
  },
  variants: {},
  plugins: [],
}
