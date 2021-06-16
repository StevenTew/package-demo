import { ComponentExample4 } from "./index.js";

export default {
  title: "ui-wireframe/ComponentExample4",
  component: ComponentExample4,
};

const Template = (args) => <ComponentExample4 {...args} />;

export const Default = Template.bind({});
Default.args = { options: [{}, {}, {}] }