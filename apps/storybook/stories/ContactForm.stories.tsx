import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactFormComponent from 'shared/src/components/canvas/ContactForm';

export default {
  title: 'Components/Canvas',
  component: ContactFormComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    submitButtonText: {
      name: 'Submit Button Text',
      defaultValue: 'Submit',
    },
    successfulSubmitText: {
      name: 'Successful Submit Text',
      defaultValue: 'Thanks, we will reach back to you shortly!',
    },
    errorSubmitText: {
      name: 'Error Submit Text',
      defaultValue: 'Uh oh, something went wrong. Try again later. ',
    },
    successfulSubmitImage: {
      name: 'Successful Submit Image',
      defaultValue: 'https://res.cloudinary.com/uniformdev/image/upload/JavaDrip/icons/success_submit_zioib5.svg',
    },
    errorSubmitImage: {
      name: 'Error Submit Image',
      defaultValue: 'https://res.cloudinary.com/uniformdev/image/upload/JavaDrip/icons/error_submit_hxqzt5.svg',
    },
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof ContactFormComponent>;

const Template: ComponentStory<typeof ContactFormComponent> = args => <ContactFormComponent {...args} />;

export const ContactForm = Template.bind({});
