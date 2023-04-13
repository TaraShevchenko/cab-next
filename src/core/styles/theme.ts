export enum EColorTheme {
   light = 'light',
   dark = 'dark',
}

export const breakpoints = {
   xsm: 374,
   sm: 575,
   md: 767,
   lg: 991,
   xlg_1150: 1150,
   xlg: 1199,
   xxlg_1400: 1400,
   xxlg: 1439,
   xxxlg_1650: 1650,
   xxxlg_1750: 1750,
   xxxlg: 1919,
}

export const colors = {
   white: '#FFFFFF',
   accent: '#10EAB5',
   accentHalfTransparent: 'rgba(16, 234, 181, 0.5)',
   ebonyClay: '#25313B',
   aquaHaze: '#F2F5F8',
   pigeonPost: '#BCCCDF',
   shuttleGray: '#666A79',
   firefly: '#0D1A25',
   blueBayoux: '#526476',
   fringyFlower: '#B2DCC8',
   fuzzyWuzzyBrown: '#C24E4E',
   catskillWhite: '#E8EEF3',
   ghost: '#C7CDD5',
   turquoise: '#2CDBB0',
   melon: '#FDB4B4',
   linkWater: '#F8FAFD',
   gullGray: '#94A0AC',
   whiteSmoke: '#F5F5F5',
   crimson: '#EA1010',
   whiteTransparent: 'rgba(255, 255, 255, 0.55)',
   grayTransparent: 'rgba(255, 255, 255, 0.1)',
   blueBlackTransparent: 'rgba(237, 49, 59, 0.1)',
   blackTransparent: 'rgba(0, 0, 0, 0.55)',
   darkRiftTransparent: 'rgba(8, 17, 24, 0.75)',
   theCountsBlack: '#11202A',
   halfShadowBlackTransparent: 'rgba(13, 26, 37, 0.67)',
   fullShadowBlackTransparent: 'rgba(13, 26, 37, 0)',
   halfShadowWhiteTransparent: 'rgba(248, 250, 253, 0.67)',
   fullShadowWhiteTransparent: 'rgba(248, 250, 253, 0)',
   blackHoleTransparent: 'rgba(0, 0, 0, 0.08)',
   blackHoleQuarterTransparent: 'rgba(0, 0, 0, 0.25)',
   washMeTransparent: 'rgba(255, 255, 255, 0.25)',
   abyssalAnchorfishBlue: '#1A2630',
   coarseWool: '#131F29',
   washMe: '#FAFCFE',
   boysenberryShadow: '#F2F5F9',
   blackIsBack: '#09121A',
   capitalYellow: '#E5B842',
   lickAndKiss: '#EB5176',
   dark: '#19242D',
}

const fonts = {
   primary: 'var(--font-akzidenz-grotesk-pro)',
   secondary: 'var(--font-manrope)',
}

export const lightTheme = {
   name: EColorTheme.light,
   colors: {
      body: colors.linkWater,
      background: colors.aquaHaze,
      secondaryBackground: colors.white,
      primaryText: colors.ebonyClay,
      secondaryText: colors.shuttleGray,
      shadow: colors.blackHoleTransparent,
   },
   toggleTheme: {
      active: colors.ebonyClay,
      backgroundColor: colors.white,
   },
   checkboxs: {
      primary: {
         sign: colors.gullGray,
         borderColor: colors.accent,
         backgroundColor: colors.catskillWhite,
      },
   },
   buttons: {
      primary: {
         color: colors.shuttleGray,
         borderColor: colors.accent,
         backgroundColor: colors.aquaHaze,
      },
   },
   loader: {
      iconColor: colors.accent,
      background: colors.linkWater,
   },
   backdrop: {
      background: colors.darkRiftTransparent,
   },
   shadowScroll: {
      thumb: colors.fringyFlower,
      track: colors.aquaHaze,
      shadowStart: colors.linkWater,
      shadowMiddle: colors.halfShadowWhiteTransparent,
      shadowFinish: colors.fullShadowWhiteTransparent,
   },
   inputs: {
      primary: {
         color: colors.turquoise,
         iconColor: colors.gullGray,
         placeholderColor: colors.ebonyClay,
         borderColor: colors.catskillWhite,
         borderColorHover: colors.ghost,
         borderColorFocus: colors.turquoise,
         borderColorError: colors.melon,
         errorColor: colors.shuttleGray,
         placeholder: colors.pigeonPost,
      },
   },
   chart: {
      value: colors.turquoise
   },
   navbar: {
      background: colors.linkWater,
      border: colors.catskillWhite,
      logo: colors.ebonyClay,
      activeIcon: colors.accent,
      icon: colors.gullGray,
      iconBackground: colors.aquaHaze,
      burgerIconBorder: colors.catskillWhite,
      burgerDivider: colors.catskillWhite,
      activeText: colors.ebonyClay,
      hoverText: colors.accent,
      text: colors.shuttleGray,
      backdropBackground: colors.blackTransparent,
   },
   header: {
      background: colors.linkWater,
      color: colors.ebonyClay,
      primaryColor: colors.accent,
      notificationColor: colors.gullGray,
      notificationBackground: colors.aquaHaze,
      notificationDate: colors.gullGray,
      profileBlankIcon: colors.aquaHaze,
      dropdownBorder: colors.aquaHaze,
      dropdownBackground: colors.white,
      dropdownShadow: colors.whiteTransparent,
      dropdownItemHoverBackground: colors.aquaHaze,
      mobileMenuBackground: colors.linkWater,
      mobileMenuDivider: colors.catskillWhite,
      mobileMenuHeaderColor: colors.ebonyClay,
      mobileMenuFooterButtonBackground: colors.aquaHaze,
      mobileMenuFooterButtonText: colors.ebonyClay,
      mobileMenuFooterButtonIcon: colors.accent,
   },
   notification: {
      notificationIcon: colors.gullGray,
      notificationIconDivider: colors.blueBlackTransparent,
      notificationItemSubtitle: colors.shuttleGray,
      notificationLink: colors.turquoise,
   },
   dashboard: {
      cardGradientColor1: colors.white,
      cardGradientColor2: colors.washMe,
      cardGradientColor3: colors.boysenberryShadow,
      cardBackground: colors.white,
      convertedText: colors.turquoise,
      copyIcon: colors.gullGray,
      qrBackground: colors.linkWater,
   },
   deposit: {
      cardBackground: colors.white,
      currencyChain: colors.gullGray,
      qrBackground: colors.linkWater,
      currencyIconBackground: colors.aquaHaze,
   },
   transactions: {
      transactionBackground: colors.white,
      transactionColName: colors.gullGray,
   },
   datePicker: {
      background: colors.white,
      activeColor: colors.shuttleGray,
      outsideMonthColor: colors.ghost,
      boxShadow: colors.blackHoleTransparent,
   }
}

export const darkTheme = {
   name: EColorTheme.dark,
   colors: {
      body: colors.firefly,
      background: colors.ebonyClay,
      secondaryBackground: colors.theCountsBlack,
      primaryText: colors.white,
      secondaryText: colors.pigeonPost,
      shadow: colors.blackHoleQuarterTransparent,
   },
   toggleTheme: {
      active: colors.white,
      backgroundColor: colors.ebonyClay,
   },
   checkboxs: {
      primary: {
         sign: colors.accent,
         borderColor: colors.accent,
         backgroundColor: colors.ebonyClay,
      },
   },
   buttons: {
      primary: {
         color: colors.pigeonPost,
         borderColor: colors.accent,
         backgroundColor: colors.ebonyClay,
      },
   },
   loader: {
      iconColor: colors.accent,
      background: colors.blackIsBack,
   },
   backdrop: {
      background: colors.darkRiftTransparent,
   },
   shadowScroll: {
      thumb: colors.fringyFlower,
      track: colors.ebonyClay,
      shadowStart: colors.firefly,
      shadowMiddle: colors.halfShadowBlackTransparent,
      shadowFinish: colors.fullShadowBlackTransparent,
   },
   inputs: {
      primary: {
         color: colors.fringyFlower,
         iconColor: colors.gullGray,
         placeholderColor: colors.white,
         borderColor: colors.ebonyClay,
         borderColorHover: colors.blueBayoux,
         borderColorFocus: colors.fringyFlower,
         borderColorError: colors.fuzzyWuzzyBrown,
         errorColor: colors.pigeonPost,
         placeholder: colors.washMeTransparent,
      },
   },
   chart: {
      value: colors.accent
   },
   navbar: {
      background: colors.firefly,
      border: colors.ebonyClay,
      logo: colors.white,
      icon: colors.whiteSmoke,
      activeIcon: colors.accent,
      iconBackground: colors.ebonyClay,
      burgerIconBorder: colors.gullGray,
      burgerDivider: colors.grayTransparent,
      activeText: colors.white,
      hoverText: colors.accent,
      text: colors.pigeonPost,
   },
   header: {
      background: colors.firefly,
      color: colors.white,
      primaryColor: colors.accent,
      notificationColor: colors.whiteSmoke,
      notificationBackground: colors.ebonyClay,
      notificationDate: colors.blueBayoux,
      profileBlankIcon: colors.ebonyClay,
      dropdownBorder: colors.ebonyClay,
      dropdownBackground: colors.theCountsBlack,
      dropdownShadow: colors.blackTransparent,
      dropdownItemHoverBackground: colors.ebonyClay,
      mobileMenuBackground: colors.firefly,
      mobileMenuDivider: colors.grayTransparent,
      mobileMenuHeaderColor: colors.white,
      mobileMenuFooterButtonBackground: colors.ebonyClay,
      mobileMenuFooterButtonText: colors.pigeonPost,
      mobileMenuFooterButtonIcon: colors.accent,
   },
   notification: {
      notificationIcon: colors.blueBayoux,
      notificationIconDivider: colors.grayTransparent,
      notificationItemSubtitle: colors.pigeonPost,
      notificationLink: colors.fringyFlower,
   },
   dashboard: {
      cardGradientColor1: colors.abyssalAnchorfishBlue,
      cardGradientColor2: colors.coarseWool,
      cardGradientColor3: colors.firefly,
      cardBackground: colors.theCountsBlack,
      convertedText: colors.fringyFlower,
      copyIcon: colors.pigeonPost,
      qrBackground: colors.white,
   },
   deposit: {
      cardBackground: colors.theCountsBlack,
      currencyChain: colors.blueBayoux,
      qrBackground: colors.white,
      currencyIconBackground: colors.firefly,
   },
   transactions: {
      transactionBackground:  colors.theCountsBlack,
      transactionColName:  colors.blueBayoux,
   },
   datePicker: {
      background: colors.theCountsBlack,
      activeColor: colors.dark,
      outsideMonthColor: colors.blueBayoux,
      boxShadow: colors.blackTransparent,
   }
}

const themes = {
   dark: darkTheme,
   light: lightTheme,
}

export const getTheme = (theme: EColorTheme) => ({
   breakpoints,
   up: (breakpoint: number) => `@media (min-width: ${breakpoint}px)`,
   down: (breakpoint: number) => `@media (max-width: ${breakpoint}px)`,
   colors,
   fonts,
   colorTheme: { ...themes[theme] },
})
