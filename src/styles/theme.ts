const theme = {
  colors: {
    white: '#fff',
    black: '#222',
    gray: '#d3d3d3',
    lightBlue: '#11998e',
    lightGreen: '#38ef7d'
  },
  media: {
    lteMedium: '(max-width: 768px)',
    phone: '(max-width: 780px)',
    tablet: '(max-width: 950px)',
    lapTop: '(max-width: 1500px)',
  },
  media_screen_size: {
    phone: '@media (max-width: 780px)',
    tablet: '@media (max-width: 950px) and (min-width: 781px)',
    lapTop: '@media (max-width: 1500px) and (min-width: 951px)',
  },
  padding: {
    small: '1.6rem',
    extra_small: '3.2rem',
    large: '4.8rem',
    extra_large: '6.4rem',
    big: '8rem',
    extra_big: '9.6rem',
  },
} as const;

export { theme };
