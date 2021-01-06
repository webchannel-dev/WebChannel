import { rem as prem } from 'polished';
import { css } from 'styled-components';

export const getRem = defaults => val => prem(val, defaults.fontSize);

export const getTypography = (fonts, breakpoints, mediaQuery) => {
  const typographies = Object.keys(fonts).reduce((acc, tag) => ({
    ...acc,
    [tag]: Object.keys(breakpoints).map(breakpoint => {
      if (breakpoint === 'xs' && fonts[tag][breakpoint]) {
        return css(fonts[tag][breakpoint]);
      }
      if (fonts[tag][breakpoint]) {
        return mediaQuery.mediaMin[breakpoint](fonts[tag][breakpoint]);
      }
      return null;
    }),
  }));

  return tag => typographies[tag];
};

/**
 * Take breakpoints config and return media query
 * functions ready to use in styles
 *
 * @param {Object} b Breakpoints config object
 */
export const getMediaQuery = b =>
  Object.keys(b).reduce(
    (finalMedia, breakpoint) => ({
      ...finalMedia,
      mediaMin: {
        ...finalMedia.mediaMin,
        [breakpoint]: (...args) =>
          css`
            @media (min-width: ${b[breakpoint].min}px) {
              ${css(...args)};
            }
          `,
      },
      /**
       * @deprecated - prefer to use mediaMin when possible for mobile-first approach
       */
      mediaMax: {
        ...finalMedia.mediaMax,
        [breakpoint]: (...args) =>
          css`
            @media (max-width: ${b[breakpoint].max}px) {
              ${css(...args)};
            }
          `,
      },
      /**
       * @deprecated - prefer to use mediaMin when possible for mobile-first approach
       */
      mediaRange: {
        ...finalMedia.mediaRange,
        [breakpoint]: (...args) =>
          css`
            @media (min-width: ${b[breakpoint].min}px) and (max-width: ${b[breakpoint].max}px) {
              ${css(...args)};
            }
          `,
      },
    }),
    {}
  );
