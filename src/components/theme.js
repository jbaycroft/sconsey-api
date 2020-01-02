// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#1B5E20', contrastText: '#ffffff' },
  secondary: { main: '#F57C00' }
};
const themeName = 'Parsley Gold Drop Fish';

export default createMuiTheme({ palette, themeName });
