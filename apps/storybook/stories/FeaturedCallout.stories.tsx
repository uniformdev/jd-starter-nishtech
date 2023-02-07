import { ComponentStory, ComponentMeta } from '@storybook/react';
import FeaturedCalloutComponent from 'shared/src/components/canvas/FeaturedCallout';
import { PaddingSize } from 'shared/src/components/Container';

export default {
  title: 'Components/Canvas',
  component: FeaturedCalloutComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      name: 'Title',
      defaultValue: 'Cervello di Caffè',
    },
    description: {
      name: 'Description',
      defaultValue:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    },
    buttonCopy: {
      name: 'Button Copy',
      defaultValue: 'Read Post',
    },
    buttonLink: {
      name: 'Button Link',
      defaultValue: '/',
    },
    paddingTop: {
      name: 'Padding Top',
      defaultValue: PaddingSize.Medium,
    },
    paddingBottom: {
      name: 'Padding Bottom',
      defaultValue: PaddingSize.Medium,
    },
    image: {
      name: 'Image',
      defaultValue:
        'https://res.cloudinary.com/uniformdev/image/upload/q_auto,f_auto,w_576/JavaDrip/landing%20page/featured_callout.webp',
    },
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof FeaturedCalloutComponent>;

const Template: ComponentStory<typeof FeaturedCalloutComponent> = args => <FeaturedCalloutComponent {...args} />;

export const FeaturedCallout = Template.bind({});
