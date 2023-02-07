import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutItemComponent, { DirectionTypes } from 'ui/canvas/AboutItem';

export default {
  title: 'Components/Canvas',
  component: AboutItemComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      name: 'Title',
      defaultValue: 'AI-optimized grinding and delivery ensures that every coffee is just how you like it',
    },
    content: {
      name: 'Content',
      defaultValue:
        'Not everyone has decades of experience selecting, roasting and grinding coffee - but that doesn’t mean they don’t deserve a perfect espresso every time. That’s why we’ve worked with the industry’s top experts to create an AI system that gives you the coffee you deserve.',
    },
    direction: {
      name: 'Direction',
      defaultValue: DirectionTypes.Right,
    },
    image: {
      name: 'Image',
      defaultValue:
        'https://res.cloudinary.com/uniformdev/image/upload/c_limit,f_auto,q_auto,w_504/v1675156336/vNext%20Demos/Baseline/about-item-1_uffzr4.webp',
    },
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof AboutItemComponent>;

const Template: ComponentStory<typeof AboutItemComponent> = args => <AboutItemComponent {...args} />;

export const AboutItem = Template.bind({});
