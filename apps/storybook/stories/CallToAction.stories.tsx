import { ComponentStory, ComponentMeta } from '@storybook/react';
import CallToActionComponent from 'ui/canvas/CallToAction';

export default {
  title: 'Components/Canvas',
  component: CallToActionComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      name: 'Title',
      defaultValue: 'The home of coffee obsessives',
    },
    text: {
      name: 'Text',
      defaultValue:
        'Welcome to JavaDrip. We are a boutique coffee company obsessed with the perfect cup of coffee. We believe that the perfect cup starts with the perfect bean and that those beans require the perfect brewing method. This means that we offer both high quality beans and products to meet any occasion and mood. Have a look around and let us know if you have any questions.',
    },
    buttonCopy: {
      name: 'Button Copy',
      defaultValue: 'button',
    },
    buttonLink: {
      name: 'Button Link',
      defaultValue: '/',
    },
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof CallToActionComponent>;

const Template: ComponentStory<typeof CallToActionComponent> = args => <CallToActionComponent {...args} />;

export const CallToAction = Template.bind({});

CallToAction.storyName = 'Call to Action';
