import { ComponentExample3 } from "./index.js";

export default {
  title: "Design System/Wireframe-UI/ComponentExample3",
  component: ComponentExample3,
};

const Template = (args) => <ComponentExample3 {...args} />;

export const Default = Template.bind({});
Default.args = { options: [{}, {}, {}] }