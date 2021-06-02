const pseudoElements = ['before', 'after'];

module.exports = {
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
    options: {
      whitelist: ['bg-purple-trans-30', 'bg-yellow-trans', /col-start-/],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        accent: ['Gotcha'],
        title: ["'Novecento Sans Wide'"],
        sans: [
          'Montserrat',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        black: '#343434',
        'black-trans': '#343434cc',
        white: '#fff',
        grey: {
          100: '#EFEFEF',
          200: '#D1D1D1',
          300: '#6C6C6C',
          400: '#4E4E4E',
        },

        yellow: '#FAC52D',
        'yellow-200': '#BB8E00',
        'yellow-trans': '#FAC52DB3',
        purple: '#2E293E',
        'purple-200': '#5E586F',
        'purple-trans': '#2E293Eb3',
        'purple-trans-30': '#2E293E4d',
        blue: '#00919F',
        red: '#F05356',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      borderWidth: {
        10: '10px',
        15: '15px',
        20: '20px',
      },
      spacing: {
        '-2/5': '-41vw',
        '-1/2': '-50vw',
        '1/2-screen': '50vw',
        iframe: '56.25%',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
      },
      height: {
        '1/2-screen': '50vh',
      },
      width: {
        '1/3-screen': '33vw',
        '2/3-screen': '66vw',
        '1/4-screen': '25vw',
        '1/6-screen': '16.666666vw',
        '1/8-screen': '12.5vw',
      },
      gridAutoColumns: {
        '50vw': '50vw',
        '25vw': '25vw',
        '12.5vw': '12.5vw',
        '8.33vw': '8.33vw',
      },
      maxWidth: {
        '1/3-screen': '33vw',
      },
      gridTemplateColumns: {
        'screen-2': 'repeat(4, 50vw)',
        'screen-4': 'repeat(4, 25vw)',
        'screen-5': 'repeat(4, 20vw)',
        'screen-6': 'repeat(4, 16.666666vw)',
        'screen-8': 'repeat(4, 12.5vw)',
        'screen-12': 'repeat(4, 8.3333333vw)',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        11: 'repeat(11, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
      inset: {
        50: '50%',
      },
      stroke: (theme) => ({
        yellow: theme('colors.yellow'),
        purple: theme('colors.purple'),
        blue: theme('colors.blue'),
        red: theme('colors.red'),
        current: 'currentColor',
      }),
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'after', 'before'],
    borderWidth: ['responsive', 'after', 'before'],
  },
  plugins: [
    function ({ addVariant, e }) {
      const escape = e || ((x) => x);
      pseudoElements.forEach((pseudo) => {
        addVariant(pseudo, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${escape(`${pseudo}${separator}${className}`)}:${pseudo}`;
          });
        });
      });
    },
  ],
};
