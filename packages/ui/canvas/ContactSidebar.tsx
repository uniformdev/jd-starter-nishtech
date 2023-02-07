import { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';

type Props = ComponentProps<{
  title: string;
  text: string;
}>;

const ContactSidebar: FC<Props> = ({ title, text }) => (
  <>
    <p className="font-bold text-4xl">{title}</p>
    <p className="mt-3.5">{text}</p>
  </>
);

registerUniformComponent({
  type: 'contactSidebar',
  component: ContactSidebar,
});

export default ContactSidebar;
