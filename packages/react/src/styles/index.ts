import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@felipe_ignite_ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    // if this is not here, all the properties will be overwritten completely. This way
    // both the default values and mapped ones will be available on intellisense
    ...defaultThemeMap,

    // spacing on theme uses only for padding and margin, this is a way to map
    // the spaces to another css property, intellisense will now display the values
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
