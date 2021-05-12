import { ComponentExample6 } from "./index.js";

export default {
  title: "Core-UI/ComponentExample6",
  component: ComponentExample6,
};

const Template = (args) => <ComponentExample6 {...args} />;

export const Default = Template.bind({});
Default.args = { options: [{}, {}, {}] }