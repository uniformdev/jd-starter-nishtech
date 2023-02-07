import { ComponentStory, ComponentMeta } from '@storybook/react';
import DividerComponent from 'shared/src/components/canvas/Divider';

export default {
  title: 'Components/Canvas',
  component: DividerComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof DividerComponent>;

const Template: ComponentStory<typeof DividerComponent> = args => <DividerComponent {...args} />;

export const Divider = Template.bind({});
