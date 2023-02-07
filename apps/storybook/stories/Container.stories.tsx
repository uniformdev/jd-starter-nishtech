import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UniformComposition } from '@uniformdev/canvas-react';
import ContainerComponent from 'shared/src/components/canvas/Container';
import { BackgroundTypes, PaddingSize } from 'shared/src/components/Container';

const DEFAULT__CONTENT = [
  {
    type: 'sectionTwoColumns',
    slots: {
      leftContent: [
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
      ],
      rightContent: [
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
      ],
    },
    parameters: {
      mobileItemsOrder: {
        type: 'select',
        value: 'order-first',
      },
      verticalAlignment: {
        type: 'select',
        value: 'items-start',
      },
      leftContentColumns: {
        type: 'select',
        value: '5',
      },
      rightContentColumns: {
        type: 'select',
        value: '7',
      },
    },
  },
];

export default {
  title: 'Components/Canvas',
  component: ContainerComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundType: {
      name: 'Background Type',
      description: 'Background color of container',
      defaultValue: BackgroundTypes.White,
    },
    paddingTop: {
      name: 'Padding Top',
      description: 'Top padding in container',
      defaultValue: PaddingSize.Large,
    },
    paddingBottom: {
      name: 'Padding Bottom',
      description: 'Bottom padding in container',
      defaultValue: PaddingSize.Large,
    },
    backgroundClassName: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof ContainerComponent>;

const Template: ComponentStory<typeof ContainerComponent> = args => (
  <UniformComposition
    data={{
      _name: 'Container',
      _id: '',
      type: 'container',
      slots: {
        content: DEFAULT__CONTENT,
      },
    }}
    behaviorTracking="onLoad"
  >
    <ContainerComponent {...args} />
  </UniformComposition>
);

export const Container = Template.bind({});
