
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
        ['Introduction', 'Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
        'Example Pages',
        ['Home', 'Search', 'Product', 'Basket', 'Checkout', 'Confirmation'],
        'JDE Example',
        'Legacy Store',
        'New Store',
        'Draft'
      ],
    }
  }
}
