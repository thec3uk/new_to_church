module.exports = {
  content: [
    `./src/**/*.js`,
    `./src/**/*.jsx`,
    `./src/**/*.ts`,
    `./src/**/*.tsx`,
  ],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: `#343434`,
      white: `#fff`,
      grayscale: {
        50: '#f7f7f7',
        100: '#efefef',
        200: '#dfdfdf',
        300: '#cacaca',
        400: '#a8a8a8',
        500: '#8a8a8a',
        600: '#6d6d6d',
        700: '#5f5f5f',
        800: '#444444',
        900: '#2a2a2a',
      },
      gray: {
        50: '#f6f7f7',
        100: '#edefef',
        200: '#dce0e0',
        300: '#c5cbcb',
        400: '#a1aaaa',
        500: '#808d8d',
        600: '#646f6f',
        700: '#576161',
        800: '#3e4545', // brand
        900: '#272b2b',
      },
      yellow: {
        50: '#fef6e2',
        100: '#fdeec8',
        200: '#fbdc8e',
        300: '#f8c23a', // brand
        400: '#d99e08',
        500: '#b38206',
        600: '#8c6605',
        700: '#7b5904',
        800: '#584003',
        900: '#372802',
      },
      teal: {
        50: '#ddfcff',
        100: '#b8f9ff',
        200: '#64f2ff',
        300: '#00def2',
        400: '#00bacb',
        500: '#00919F', // brand
        600: '#007883',
        700: '#006973',
        800: '#004b52',
        900: '#003034',
      },
      red: {
        50: '#fef5f5',
        100: '#fdeaea',
        200: '#fbd6d7',
        300: '#f9babb',
        400: '#f5898b',
        500: '#f05356', // brand
        600: '#d81316',
        700: '#be1113',
        800: '#8a0c0e',
        900: '#590809',
      },
      purple: {
        50: '#f6f7fb',
        100: '#eceff6',
        200: '#dadfee',
        300: '#c1c9e2',
        400: '#9aa7d0',
        500: '#7688bf',
        600: '#536aaf',
        700: '#475c9a',
        800: '#33426e',
        900: '#202945', // brand
      },
    },
    extend: {
      backgroundSize: {
        underline: '200% 0.75rem',
        text: '200% auto',
      },
      backgroundPosition: {
        'p-full': '100% 130%',
        'p-zero': '0% 100%',
      },
      backgroundImage: {
        live: "url('/live.jpg')",
        live2: "url('/live2.jpg')",
      },
      transitionProperty: {
        'bg-position': 'background-position',
      },
      fontFamily: {
        accent: [`Gotcha`],
        title: [`'Novecento Sans Wide'`],
        sans: [
          `Montserrat`,
          `system-ui`,
          `-apple-system`,
          `BlinkMacSystemFont`,
          `Segoe UI`,
          `Arial`,
          `Noto Sans`,
          `sans-serif`,
          `Apple Color Emoji`,
          `Segoe UI Emoji`,
          `Segoe UI Symbol`,
          `Noto Color Emoji`,
        ],
      },
      height: {
        'screen-90': '90vh',
      },
      minHeight: {
        80: '20rem',
      },
      fontSize: {
        '5.5xl': [
          '3.5rem',
          {
            lineHeight: '1',
          },
        ],
      },
      boxShadow: {
        top: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        'black-full': `${theme('colors.black')} 50%`,
        'yellow-300-full': `${theme('colors.yellow.300')} 50%`,
        'red-500-full': `${theme('colors.red.500')} 50%`,
        'teal-500-full': `${theme('colors.teal.500')} 50%`,
        'purple-900-full': `${theme('colors.purple.900')} 50%`,
        'gray-50-full': `${theme('colors.gray.50')} 50%`,
        'black-full': `${theme('colors.black')} 50%`,
      }),
      spacing: {
        128: '42rem',
      },
      colors: {
        grey: {
          100: `#EFEFEF`,
          200: `#D1D1D1`,
          300: `#6C6C6C`,
          400: `#4E4E4E`,
        },
      },
      keyframes: {
        spinner: {
          // '0%, 40%, 60%, 100%': { transform: 'rotate(0deg)' },
          // '45%': { transform: 'rotate(180deg)' },
          '90%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinner: 'spinner 3s ease-in-out infinite',
      },
      stroke: (theme) => ({
        yellow: theme(`colors.yellow.300`),
        purple: theme(`colors.purple.900`),
        teal: theme(`colors.teal.500`),
        red: theme(`colors.red.500`),
        current: `currentColor`,
      }),
      typography: {
        DEFAULT: {
          css: {
            iframe: {
              width: '100%',
              height: '100%',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundPosition: ['hover-hover', 'pointer-fine'],
    },
  },
  plugins: [
    require('tailwindcss-touch')(),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
