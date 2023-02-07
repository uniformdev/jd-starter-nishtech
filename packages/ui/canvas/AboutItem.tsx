import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import Container from '../components/Container';

export enum DirectionTypes {
  Right = 'Right',
  Left = 'Left',
}

const DirectionClasses = {
  [DirectionTypes.Right]: 'lg:flex-row',
  [DirectionTypes.Left]: 'lg:flex-row-reverse',
};

type AboutItemProps = ComponentProps<{
  title: string;
  text?: string;
  direction: DirectionTypes;
  backgroundImage: {
    src: string;
    alt?: string;
    width: number;
    height: number;
  };
}>;

const AboutItem: FC<AboutItemProps> = ({ title, text, backgroundImage, direction }) => (
  <Container>
    <div
      className={classNames(
        'flex flex-col gap-x-14 pb-10 lg:pb-20 last:pb-0 lg:items-center',
        DirectionClasses[direction]
      )}
    >
      <div className="basis-5/12 pb-5 lg:pb-0">
        <p className="lg:text-3xl text-xl font-extrabold pb-5 lg:pb-10">{title}</p>
        {Boolean(text) && <p>{text}</p>}
      </div>
      {backgroundImage?.src || backgroundImage ? (
        <div className="basis-7/12">
          <Image src={backgroundImage?.src ?? backgroundImage} width={504} height={504} alt="about-image" />
        </div>
      ) : null}
    </div>
  </Container>
);

const transformData = (BaseComponent: FC<AboutItemProps>): FC<AboutItemProps> =>
  function wrapper({ ...props }: any) {
    const transformedProps: AboutItemProps = {
      ...props,
      ...props.content,
    };
    return <BaseComponent {...transformedProps} />;
  };

registerUniformComponent({
  type: 'aboutItem',
  component: transformData(AboutItem),
});

export default AboutItem;
