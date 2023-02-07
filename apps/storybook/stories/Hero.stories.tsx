import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeroComponent, { HeroVariants } from 'shared/src/components/canvas/Hero';

export default {
  title: 'Components/Canvas/Hero',
  component: HeroComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      name: 'Title',
      defaultValue: 'Contact us for details',
    },
    subtitle: {
      name: 'Subtitle',
      defaultValue: 'Order now for free shipping.',
    },
    buttonCopy: {
      name: 'Button Copy',
      defaultValue: 'Contact us',
    },
    buttonLink: {
      name: 'Button Link',
      defaultValue: '/',
    },
    backgroundImage: {
      name: 'Background Image',
      defaultValue:
        'https://res.cloudinary.com/uniformdev/image/upload/v1675157619/vNext%20Demos/Baseline/hero-1_vks69p.webp',
    },
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof HeroComponent>;

const Template: ComponentStory<typeof HeroComponent> = args => <HeroComponent {...args} />;

export const Centered = Template.bind({});
Centered.args = { component: { variant: HeroVariants.Centered, type: 'hero' } };
export const Default = Template.bind({});
Default.args = { component: { variant: '', type: 'hero' } };
