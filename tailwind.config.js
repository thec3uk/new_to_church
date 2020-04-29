const pseudoElements = ['before', 'after'];

module.exports = {
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
        "purple-200": '#5E586F',
        'purple-trans': '#2E293Eb3',
        'purple-trans-30': '#2E293E4d',
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
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      stroke: theme => ({
        yellow: theme('colors.yellow'),
        purple: theme('colors.purple'),
        current: 'currentColor',
      }),
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'after', 'before'],
    borderWidth: ['responsive', 'after', 'before'],
  },
  plugins: [
    function({ addVariant, e }) {
      const escape = e || (x => x);
      pseudoElements.forEach(pseudo => {
        addVariant(pseudo, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${escape(`${pseudo}${separator}${className}`)}:${pseudo}`;
          });
        });
      });
    },
  ],
};
