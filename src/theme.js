import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  colors: {
    text: '#2a2a2a',
    primary: 'rgb(255 255 555)',
    secondary: 'rgb(211, 235, 216)',
    accent: 'rgb(95, 133, 117)',
    muted: 'rgba(0, 0, 0, 0.8)',
    random: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '16px',
    m: '20px',
    l: '24px',
    xl: '32px',
    xxl: '24px',
    xxxl: '128px',
  },
  fontWeights: {
    normal: 400,
    intermediate: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '2px solid',
    bold: '3px solid',
  },
  shadowBorders: {
    none: 'none',
    normal: '1px 1px 3px',
    bold: '2px 2px 5px',
  },
  radii: {
    none: '0',
    normal: '5px',
    large: '10px',
    round: '50%',
  },
});
