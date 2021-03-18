import { Properties } from 'csstype';

const camel2kebab = (x: string) => x.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export type StyleAttribute = { attribute: string; value?: string | number; base?: boolean };

export abstract class StyleProperty<T = any, A extends string = string> {
  static makeCssVar(element: string, module: string) {
    return `--fusion-${element}__${module}`;
  }

  static makeCss(obj: Partial<Properties>) {
    return Object.keys(obj)
      .map((x) => `${camel2kebab(x)}: ${obj[x as keyof Properties]}`)
      .join(';');
  }

  static makeVariable({ attribute, value }: StyleAttribute) {
    return `var(${[attribute, value].filter((x) => !!x).join(',')})`;
  }

  static extractVariables(styles: Record<string, StyleProperty>): string[] {
    return Object.values(styles).reduce((cur, value) => cur.concat(value.variables), [] as string[]);
  }

  constructor(public readonly name: string, public readonly value: T) {}

  abstract get attributes(): Record<A, StyleAttribute>;

  get style(): Partial<Properties> {
    const { value, attributes } = this;
    return {
      ...value,
      ...(Object.keys(attributes) as A[]).reduce(
        (cur, key) => Object.assign(cur, { [key]: StyleProperty.makeVariable(attributes[key]) }),
        {}
      ),
    };
  }

  get css(): string {
    return StyleProperty.makeCss(this.style);
  }

  get variables(): string[] {
    return this.getVariables();
  }

  public getAttributes(include_base?: boolean): StyleAttribute[] {
    return (Object.values(this.attributes) as StyleAttribute[]).filter((x) => include_base || !x.base);
  }

  public getVariables(include_base?: boolean): string[] {
    return this.getAttributes(include_base).map(({ attribute, value }) => [attribute, value].join(':'));
  }

  public toString() {
    return this.css;
  }
}

export default StyleProperty;
