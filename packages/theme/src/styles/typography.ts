import { tokens } from '@equinor/eds-tokens';
import StyleProperty, { StyleAttribute } from '../style-property';

type Typography = Pick<
  CSSStyleDeclaration,
  'color' | 'fontFamily' | 'fontSize' | 'fontWeight' | 'letterSpacing' | 'lineHeight' | 'textAlign'
>;
type TypographyAttribute = keyof Pick<Typography, 'fontSize' | 'color'>;

export class TypographyStyleProperty extends StyleProperty<Typography, TypographyAttribute> {
  get attributes() {
    const { name, value } = this;
    return {
      color: {
        attribute: StyleProperty.makeCssVar('typography', `${name}__color`),
        value: StyleProperty.makeVariable({
          attribute: StyleProperty.makeCssVar('typography', `base-color`),
          value: value.color,
        }),
        base: true,
      },
      fontSize: {
        attribute: StyleProperty.makeCssVar('typography', `${name}-fontSize`),
        value: value.fontSize,
      },
    };
  }
}

const createStyleProperty = <T extends Record<string, Typography | any>, Tkey extends keyof T>(
  obj: T,
  name: string
): Record<Tkey, TypographyStyleProperty> =>
  Object.keys(obj).reduce(
    (cur, key) => Object.assign(cur, { [key]: new TypographyStyleProperty(`${name}-${key}`, obj[key]) }),
    {} as Record<Tkey, TypographyStyleProperty>
  );

export const typography = {
  heading: createStyleProperty(tokens.typography.heading, 'heading'),
  input: createStyleProperty(tokens.typography.input, 'input'),
  navigation: createStyleProperty(tokens.typography.navigation, 'navigation'),
  paragraph: createStyleProperty(tokens.typography.paragraph, 'paragraph'),
  table: createStyleProperty(tokens.typography.table, 'table'),
  ui: createStyleProperty(tokens.typography.ui, 'ui'),
};

export const baseTypographyColor: StyleAttribute = {
  attribute: StyleProperty.makeCssVar('typography', `base-color`),
  value: tokens.colors.text.static_icons__default.rgba,
};

export const typographyVariables = [
  ...Object.values(typography).reduce(
    (cur, value) => cur.concat(StyleProperty.extractVariables(value)),
    [] as string[]
  ),
  [baseTypographyColor.attribute, baseTypographyColor.value].join(':'),
];

export default typography;
