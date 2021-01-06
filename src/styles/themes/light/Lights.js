import { getRem, getMediaQuery, getTypography } from '../utils/utils';

import colors from './configs/Colors';
import breakpoints from './configs/Breakpoints';
import getFonts, { defaults } from './configs/Typographies';

const rem = getRem(defaults);
const fonts = getFonts(rem);
const mediaQuery = getMediaQuery(breakpoints);
const typography = getTypography(fonts, breakpoints, mediaQuery);

export default {
  fonts,
  utils: { rem, typography },
  colors,
  mediaQuery,
  breakpoints,
};
