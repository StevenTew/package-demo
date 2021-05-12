import { ComponentExample5 } from "./index.js";

export default {
  title: "Design System/Core-UI/ComponentExample5",
  component: ComponentExample5,
};

const Template = (args) => <ComponentExample5 {...args} />;

export const Default = Template.bind({});
Default.args = { options: [{}, {}, {}] }