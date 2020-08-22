const { StyleVarsProvider, useStyleVars } = require('./style-vars')
const { useColorMode, ColorModeProvider } = require('./color-mode')
const { Fonts } = require('./fonts')
const { useLogo } = require('./logo')
const { useSocials } = require('./socials')
const { useMenu } = require('./menu')
const { usePages, useCurrentPage } = require('./pages')
const { useAsset } = require('./asset')
const { EssentialsContext, EssentialsProvider } = require('./essentials')
const { useUserConfig } = require('./user-config')
const { useHeading } = require('./heading')

module.exports = {
  // Style vars
  StyleVarsProvider,
  useStyleVars,

  // Color mode
  useColorMode,
  ColorModeProvider,

  // Fonts
  Fonts,

  // Logo
  useLogo,

  // Socials
  useSocials,

  // Menu
  useMenu,

  // Pages
  usePages,
  useCurrentPage,

  // Asset
  useAsset,

  // Essentials
  EssentialsContext,
  EssentialsProvider,

  // User config
  useUserConfig,

  // Heading
  useHeading
}
