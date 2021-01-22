module.exports = {
  mode: 'modules',
  name: 'Fusion Core',
  out: 'docs',
  theme: 'node_modules/typedoc-neo-theme/bin/default',
  // includeDeclarations: true,
  // includeVersion: true,
  // categorizeByGroup: false,
  excludeProtected: true,
  excludePrivate: true,
  excludeExternals: true,
  excludeNotExported: true,
  lernaExclude: ['@equinor/fusion-demo-msal'],
  readme: 'README.md',
  // listInvalidSymbolLinks: true,
  // exclude: ['**/node_modules/**', '**/*.spec.ts', '**/*.d.ts', './demo'],
  exclude: ['**/node_modules/typescript', '**/*.spec.ts'],
  plugin: [
    'typedoc-plugin-lerna-packages',
    'typedoc-neo-theme'
  ],
  source: [{
    path: "https://github.com/equinor/fusion-core/blob/master/packages/",
    line: "L"
  }]
}
