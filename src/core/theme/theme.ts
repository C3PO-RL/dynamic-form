import { createTheme } from '@mui/material/styles'

interface IDefaultColors {
  primary: string
  secondary: string
  error: string
  warning: string
  info: string
  success: string
  lightText: string
  softText: string
}

interface ITheme {
  dark: boolean
  colors: IDefaultColors
}

// Responsive Values
export const MIN_MOBILE_WIDTH = 0
export const MAX_MOBILE_WIDTH = 767
export const MIN_DESKTOP_WIDTH = 1024
export const MIN_HD_WIDTH = 1280
export const MIN_LARGE_DESKTOP_WIDTH = 1440
export const MIN_FHD_WIDTH = 1920
export const MIN_QHD_WIDTH = 2560
export const MIN_4K_WIDTH = 3840
export const MIN_8K_WIDTH = 7680

export const CustomTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#F5F5F7',
    },
  },
})

export const Theme: ITheme = {
  dark: false,
  colors: {
    primary: '#F5F5F7',
    secondary: '#DCDCDC',
    error: '#B22222',
    warning: '#909090',
    info: '#4fc3f7',
    success: '#DADADA',
    lightText: '#86868B',
    softText: '#000000',
  },
}
