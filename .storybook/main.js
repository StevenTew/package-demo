module.exports = {
  "core": {
    "builder": "webpack5"
  },
  "stories": [
    "../packages/**/src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@whitespace/storybook-addon-html"
  ]
}