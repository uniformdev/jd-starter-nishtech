import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccordionItemComponent from 'ui/canvas/AccordionItem';

export default {
  title: 'Components/Canvas',
  component: AccordionItemComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      name: 'Title',
      defaultValue: 'How smart is the Cervello di Caffè?',
    },
    description: {
      name: 'Description',
      defaultValue:
        'Java chicory, black doppio and roast cream mocha turkish strong. Blue mountain doppio black, chicory, sugar medium, single shot a wings blue mountain turkish. Viennese et, cinnamon, turkish lungo qui cappuccino kopi-luwak. Black, dripper, to go medium espresso lungo in, and plunger pot latte sweet redeye. Half and half, galão, single shot wings beans bar that con panna macchiato dark foam galão.',
    },
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof AccordionItemComponent>;

const Template: ComponentStory<typeof AccordionItemComponent> = args => <AccordionItemComponent {...args} />;

export const AccordionItem = Template.bind({});
