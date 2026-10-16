# @equinor/fusion-web-theme

Legacy Fusion theme values and CSS declarations.

## Applying the theme

The `attributes` export contains CSS declarations for the theme's light-palette
defaults, elevation, spacing, typography, and browser-native color scheme. Apply
these declarations to the document root in the consuming application's stylesheet:

```ts
import { attributes } from '@equinor/fusion-web-theme';

const rootStyles = `:root { ${attributes.join(';')}; }`;
```

The `colorVariables` export includes the light-palette declarations and
`color-scheme: only light`; `attributes` includes them through `colorVariables`.

Include the resulting CSS before rendering the application to cover initial load,
native controls, and overlays mounted under `body`. The `color-scheme: only light`
declaration temporarily keeps browser-native controls light when OS or browser
preferences change, matching the package's existing light-palette defaults until
Fusion supports dark mode consistently.

Importing the package does not inject CSS or mutate the document. Consumers that
only use individual `styles` values must also apply the root declarations to get
the native-control lock. A later, more specific color-scheme rule can override it.

This package uses EDS 0.9.2's CSS variable references with light-palette fallbacks.
It does not load theme-sensitive CSS from newer EDS releases. Applications
independently loading newer EDS theme styles must additionally set
`data-color-scheme="light"` on their document root; the native `color-scheme`
declaration does not select the EDS palette.
