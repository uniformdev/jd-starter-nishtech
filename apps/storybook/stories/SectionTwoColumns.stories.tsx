import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import SectionTwoColumnsComponent from 'shared/src/components/canvas/SectionTwoColumns';

const DEFAULT_LEFT_CONTENT = [
  {
    type: 'contactSidebar',
    parameters: {
      text: {
        type: 'text',
        value:
          'See what we did there? 😀 But seriously, please let us know if you have any questions and we will get back with you shortly. Thank you.',
      },
      title: {
        type: 'text',
        value: 'Let us know how you have bean.',
      },
    },
  },
];
const DEFAULT_RIGHT_CONTENT = [
  {
    type: 'contactForm',
    parameters: {
      errorSubmitText: {
        type: 'text',
        value: 'Uh oh, something went wrong. Try again later. ',
      },
      errorSubmitImage: {
        type: 'text',
        value: 'https://res.cloudinary.com/uniformdev/image/upload/JavaDrip/icons/error_submit_hxqzt5.svg',
      },
      submitButtonText: {
        type: 'text',
        value: 'Submit',
      },
      successfulSubmitText: {
        type: 'text',
        value: 'Thanks, we will reach back to you shortly!',
      },
      successfulSubmitImage: {
        type: 'text',
        value: 'https://res.cloudinary.com/uniformdev/image/upload/JavaDrip/icons/success_submit_zioib5.svg',
      },
    },
  },
];

export default {
  title: 'Components/Canvas',
  component: SectionTwoColumnsComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    leftContentColumns: {
      name: 'Left Content Columns',
      description:
        'Controlling how elements are sized and placed across left column. See details: https://tailwindcss.com/docs/grid-column ',
      defaultValue: '6',
    },
    rightContentColumns: {
      name: 'Right Content Columns',
      description:
        'Controlling how elements are sized and placed across right column. See details: https://tailwindcss.com/docs/grid-column ',
      defaultValue: '6',
    },
    verticalAlignment: {
      name: 'Vertical Alignment',
      description: 'How would you like to align your item? ',
      defaultValue: 'items-start',
    },
    mobileItemsOrder: {
      name: 'Mobile Items Order',
      description: 'Order of items for small sized screens. (left column first or right column first)',
      defaultValue: 'order-first',
    },
    hasBottomBorder: {
      table: { disable: true },
      defaultValue: false,
    },
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof SectionTwoColumnsComponent>;

const Template: ComponentStory<typeof SectionTwoColumnsComponent> = args => (
  <UniformComposition
    data={{
      _name: 'Section Two Columns',
      _id: '',
      type: 'sectionTwoColumns',
      slots: {
        leftContent: DEFAULT_LEFT_CONTENT,
        rightContent: DEFAULT_RIGHT_CONTENT,
      },
    }}
    behaviorTracking="onLoad"
  >
    <SectionTwoColumnsComponent {...args} />
  </UniformComposition>
);

export const SectionTwoColumns = Template.bind({});
SectionTwoColumns.storyName = 'Section - Two columns';
