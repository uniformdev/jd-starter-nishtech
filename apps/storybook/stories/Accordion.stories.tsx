import { UniformComposition } from '@uniformdev/canvas-react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccordionComponent from 'ui/canvas/Accordion';

const DEFAULT_ACCORDION_ITEMS = [
  {
    title: 'How smart is the Cervello di Caffè?',
    description:
      'Java chicory, black doppio and roast cream mocha turkish strong. Blue mountain doppio black, chicory, sugar medium, single shot a wings blue mountain turkish. Viennese et, cinnamon, turkish lungo qui cappuccino kopi-luwak. Black, dripper, to go medium espresso lungo in, and plunger pot latte sweet redeye. Half and half, galão, single shot wings beans bar that con panna macchiato dark foam galão.',
  },
  {
    title: 'Do you have guides on how to use the Cervello di Caffè?',
    description:
      'Fair trade siphon crema extra, viennese qui, foam viennese siphon est so caramelization. Carajillo sit ut extra chicory aged instant crema chicory. Et, dark a cup, cortado, siphon at arabica flavour macchiato. Cream, at, acerbic redeye iced americano coffee white. To go et, steamed a café au lait, single origin aftertaste frappuccino blue mountain whipped.',
  },
  {
    title: 'What is JavaDrip doing to protect my privacy?',
    description:
      'Barista et bar aftertaste, brewed variety filter turkish breve organic. Mug french press rich doppio barista redeye cream. Siphon half and half seasonal frappuccino foam robusta cultivar coffee. So froth, aftertaste bar, saucer sugar single shot caramelization aromatic. Espresso, saucer, breve café au lait, id cultivar pumpkin spice doppio viennese frappuccino doppio.',
  },
  {
    title: 'What accessories do you offer for the Cervello di Caffè?',
    description:
      'Arabica Acerbic Affogato Aftertaste Aged Americano And Aroma, flavour affogato At cortado french foam cappuccino, barista froth Cappuccino origin percolator au. Ristretto Au aftertaste brewed Aromatic saucer cortado Bar, Body viennese crema origin Brewed milk sweet french, coffee extraction aroma Cappuccino sit affogato et. Rich grounds at spice fair At Affogato id macchiato caramelization, saucer sugar trifecta shop Americano Aroma est. Brewed ut As brewed steamed Au espresso macchiato turkish wings id filter, rich beans affogato redeye shop and Americano so crema.\n\n',
  },
];

export default {
  title: 'Components/Canvas',
  component: AccordionComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: {
      name: 'Title',
      defaultValue: 'Frequently Asked Questions',
    },
    description: {
      name: 'Description',
      defaultValue: "If you can't find the answer to your question please reach out to support@javadrip.coffee.",
    },
    component: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof AccordionComponent>;

const Template: ComponentStory<typeof AccordionComponent> = args => (
  <UniformComposition
    data={{
      _name: 'Accordion',
      _id: '',
      type: 'accordion',
      slots: {
        items: DEFAULT_ACCORDION_ITEMS.map(item => ({
          type: 'accordionItem',
          parameters: {
            title: {
              type: 'text',
              value: item.title,
            },
            description: {
              type: 'text',
              value: item.description,
            },
          },
        })),
      },
    }}
    behaviorTracking="onLoad"
  >
    <AccordionComponent {...args} />
  </UniformComposition>
);

export const Accordion = Template.bind({});
