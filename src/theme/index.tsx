import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
    },
    secondary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});
