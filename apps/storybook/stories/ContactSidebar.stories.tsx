import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactSidebarComponent from 'ui/canvas/ContactSidebar';

export default {
  title: 'Components/Canvas',
  component: ContactSidebarComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      name: 'Title',
      defaultValue: 'Let us know how you have bean.',
    },
    text: {
      name: 'Text',
      defaultValue:
        'See what we did there? 😀 But seriously, please let us know if you have any questions and we will get back with you shortly. Thank you.',
    },
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof ContactSidebarComponent>;

const Template: ComponentStory<typeof ContactSidebarComponent> = args => <ContactSidebarComponent {...args} />;

export const ContactSidebar = Template.bind({});
