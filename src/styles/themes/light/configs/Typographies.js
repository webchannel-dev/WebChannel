export const defaults = {
  fontSize: 14,
  fontFamily: '"Fenomen Sans", Arial, Helvetica, "Helvetica Neue", sans-serif',
  lineHeight: 14,
  fontWeightNormal: 400,
  fontWeightBold: 600,
  fontWeightBolder: 700,
};

export default rem => ({
  defaults,
  body: {
    xs: {
      margin: 0,
      fontSize: defaults.fontSize,
      fontFamily: defaults.fontFamily,
      lineHeight: rem(defaults.lineHeight),
    },
  },
  bodyL: {
    xs: {
      fontSize: rem(defaults.fontSize),
      lineHeight: rem(22),
    },
  },
  bodyLMedium: {
    xs: {
      fontSize: rem(defaults.fontSize),
      lineHeight: rem(22),
    },
  },
  bodyM: {
    xs: {
      fontSize: rem(12),
      lineHeight: rem(22),
    },
  },
  bodyMLight: {
    xs: {
      fontSize: rem(12),
      lineHeight: rem(16),
    },
  },
  h1: {
    xs: {
      maxWidth: '100%',
      fontSize: rem(24),
      lineHeight: rem(29),
    },
    lg: {
      fontSize: rem(30),
      lineHeight: rem(36),
    },
  },
  h2: {
    xs: {
      maxWidth: '100%',
      fontSize: rem(20),
      lineHeight: rem(24),
    },
    lg: {
      fontSize: rem(24),
      lineHeight: rem(29),
    },
  },
  h3: {
    xs: {
      maxWidth: '100%',
      fontSize: rem(16),
      lineHeight: rem(19),
    },
    lg: {
      fontSize: rem(20),
      lineHeight: rem(24),
    },
  },
  h4: {
    xs: {
      maxWidth: '100%',
      fontSize: rem(14),
      lineHeight: rem(17),
    },
    lg: {
      fontSize: rem(16),
      lineHeight: rem(19),
    },
  },
  h5: {
    xs: {
      maxWidth: '100%',
      fontSize: rem(9),
      lineHeight: rem(11),
    },
    lg: {
      fontSize: rem(14),
      lineHeight: rem(17),
    },
  },
  h6: {
    xs: {
      maxWidth: '100%',
      fontSize: rem(9),
      lineHeight: rem(11),
      fontWeight: 600,
    },
    lg: {
      fontSize: rem(9),
      lineHeight: rem(11),
    },
  },
});
