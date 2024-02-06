import { StyleSheet } from '@react-pdf/renderer';

export const FONT_FAMILY_SANS = 'Helvetica';
export const FONT_FAMILY_SANS_LIGHT = 'Helvetica-Oblique';
export const FONT_FAMILY_ITALICS = 'Helvetica-Oblique';
export const FONT_FAMILY_BOLD = 'Helvetica-Bold';

// Color
export const COLOR_BG_PAGE = '#011b47';
export const COLOR_BG_DARK = '#3E3E3E';
export const COLOR_BG_LIGHT = 'white';
export const COLOR_BG_LIGHT_BLUE = '#72bcd4';
export const COLOR_TEXT_LIGHT = '#f8f8f8';
export const COLOR_TEXT_DARK = '#181818';

// Spacing
export const SPACING_LARGER = 32;
export const SPACING_LARGE = 24;
export const SPACING_MEDIUM = 16;
export const SPACING_SMALL = 8;

// Font sizes
export const FONT_SIZE_LARGE = 26;
export const FONT_SIZE_NORMAL = 13;
export const FONT_SIZE_SMALL = 10;

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
  },
  textLargeDark: {
    fontSize: FONT_SIZE_LARGE,
    fontFamily: FONT_FAMILY_SANS,
    color: COLOR_TEXT_DARK,
  },
  textMediumDark: {
    fontSize: FONT_SIZE_NORMAL,
    fontFamily: FONT_FAMILY_SANS,
    color: COLOR_TEXT_DARK,
  },
  textMediumDarkBold: {
    fontWeight: 700,
    fontSize: FONT_SIZE_NORMAL,
    fontFamily: FONT_FAMILY_BOLD,
    color: COLOR_TEXT_DARK,
  },
  textSmallDark: {
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_SANS,
    color: COLOR_TEXT_DARK,
  },
  textSmallDarkItalic: {
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_ITALICS,
    color: COLOR_TEXT_DARK,
  },
  textSmallDarkBold: {
    fontWeight: 700,
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_BOLD,
    color: COLOR_TEXT_DARK,
  },
  textSmallDarkThin: {
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_SANS_LIGHT,
    color: COLOR_TEXT_DARK,
  },
  textLargeLight: {
    fontSize: FONT_SIZE_LARGE,
    fontFamily: FONT_FAMILY_SANS,
    color: COLOR_TEXT_LIGHT,
  },
  textMediumLight: {
    fontSize: FONT_SIZE_NORMAL,
    fontFamily: FONT_FAMILY_SANS,
    color: COLOR_TEXT_LIGHT,
  },
  textSmallLight: {
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_SANS,
    color: COLOR_TEXT_LIGHT,
  },
  textSmallLightThin: {
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_SANS_LIGHT,
    color: COLOR_TEXT_LIGHT,
  },
});
