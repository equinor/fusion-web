import { spacing } from './spacing';
describe('API resource collection', () => {
  it('should create styles', () => {
    (Object.keys(spacing.comfortable) as Array<keyof typeof spacing.comfortable>).forEach((key) => {
      const obj = spacing.comfortable[key];
      expect(obj.style).toEqual(
        expect.objectContaining({
          padding: obj.value,
        })
      );
    });
  });
});
