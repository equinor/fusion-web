import { colors, colorVariables } from './colors';
import { elevation, elevationVariables } from './elevation';
import { typography, typographyVariables } from './typography';

export const styles = {
  colors,
  elevation,
  typography,
};

export const attributes = [...colorVariables, ...elevationVariables, ...typographyVariables];

export default styles;
