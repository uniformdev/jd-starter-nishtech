import { FC } from 'react';
import { ComponentProps, UniformSlot, registerUniformComponent } from '@uniformdev/canvas-react';
import Container from '../components/Container';

type Props = ComponentProps<{
  title: string;
  description: string;
}>;

const Accordion: FC<Props> = ({ title, description }) => (
  <Container>
    <p className="text-3xl font-extrabold pb-4">{title}</p>
    <p className="text-xl pb-10">{description}</p>
    <UniformSlot name="items" />
  </Container>
);

registerUniformComponent({
  type: 'accordion',
  component: Accordion,
});

export default Accordion;
