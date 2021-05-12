
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
        'Introduction',
        'Design System',
        ['Introduction', 'Atoms', 'Molecules', 'Organisms', 'Templates'],
        'Example Pages',
        ['Home', 'Search', 'Product', 'Basket', 'Checkout', 'Confirmation'],
        'Draft'
      ],
    }
  }
}
