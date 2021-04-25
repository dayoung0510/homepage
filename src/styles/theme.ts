import { DefaultTheme } from 'styled-components';
import { palette } from './colors';

export interface Theme extends DefaultTheme {
  palette: Record<string, string>;
}

const defaultTheme: Theme = { palette };

export default defaultTheme;
