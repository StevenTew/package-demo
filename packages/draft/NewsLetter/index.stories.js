import { NewsLetter } from "./index.js";

export default {
  title: "Draft/Newsletter",
  component: NewsLetter,
};

const Template = (args) => <NewsLetter {...args} />;

export const Default = Template.bind({});
Default.args = {}