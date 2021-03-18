import { tokens } from '@equinor/eds-tokens';
import { Properties } from 'csstype';
import StyleProperty from '../style-property';

export type SpacingStyleAttribute = 'padding';

export class ColorStyleProperty extends StyleProperty<string, SpacingStyleAttribute> {
  get attributes() {
    const { name, value } = this;
    const attribute = StyleProperty.makeCssVar('color', name);
    return {
      padding: { attribute, value },
    };
  }

  get style(): Properties {
    return {
      padding: this.value,
    };
  }
}

const createStyleProperty = <T extends Record<string, string>, Tkey extends keyof T>(
  obj: T,
  name: string
): Record<Tkey, ColorStyleProperty> =>
  Object.keys(obj).reduce(
    (cur, key) => Object.assign(cur, { [key]: new ColorStyleProperty(`${name}-${key}`, obj[key]) }),
    {} as Record<Tkey, ColorStyleProperty>
  );

export const spacing = {
  comfortable: createStyleProperty(tokens.spacings.comfortable, 'comfortable'),
};

export const spacingVariables = Object.values(spacing).reduce(
  (cur, value) => cur.concat(ColorStyleProperty.extractVariables(value)),
  [] as string[]
);

export default spacing;
