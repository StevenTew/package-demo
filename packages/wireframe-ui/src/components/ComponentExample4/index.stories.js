import { ComponentExample4 } from "./index.js";

export default {
  title: "Design System/Wireframe-UI/ComponentExample4",
  component: ComponentExample4,
};

const Template = (args) => <ComponentExample4 {...args} />;

export const Default = Template.bind({});
Default.args = { options: [{}, {}, {}] }