import { tokens } from '@equinor/eds-tokens';
import { StyleAttribute, StyleProperty } from '../style-property';

type ElevationType = keyof typeof tokens.elevation;
type ElevationAttributes = 'shadow';

const types = Object.keys(tokens.elevation) as ElevationType[];

export class ElevationStyleProperty extends StyleProperty<string, ElevationAttributes> {
  get attributes(): Record<'shadow', StyleAttribute> {
    const { name, value } = this;
    const attribute = ElevationStyleProperty.makeCssVar('elevation', name);
    return {
      shadow: { attribute, value },
    };
  }
  get style() {
    return {
      boxShadow: StyleProperty.makeVariable(this.attributes.shadow),
    };
  }
}

const createStyleProp = (type: ElevationType): ElevationStyleProperty => {
  return new ElevationStyleProperty(type, tokens.elevation[type]);
};

export const elevation = types.reduce(
  (obj, type) => Object.assign(obj, { [type]: createStyleProp(type) }),
  {} as Record<ElevationType, ElevationStyleProperty>
);

export const elevationVariables = ElevationStyleProperty.extractVariables(elevation);

export default elevation;
