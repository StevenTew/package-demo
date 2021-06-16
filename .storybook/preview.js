
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Docs',
        ['Introduction'],
        'core-ui',
        'wireframe-ui',
        'Draft',
        'Deprecated',
        'Example Pages',
        ['Home', 'Search', 'Product', 'Basket', 'Checkout', 'Confirmation'],
      ],
    }
  }
}
