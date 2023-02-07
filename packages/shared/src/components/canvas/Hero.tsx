import React, { FC } from 'react';
import Image from 'next/image';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import ButtonLink from '../atoms/ButtonLink';
import Container, { PaddingSize } from '../Container';
import { CanvasComponents } from '../../constants';

export enum HeroVariants {
  Centered = 'centered',
}

type HeroProps = ComponentProps<{
  title: string;
  text?: string;
  buttonCopy?: string;
  buttonLink?: string;
  backgroundImage: Type.Image;
  content: HeroProps;
}>;

type ExtendedHeroProps = Omit<HeroProps, 'buttonLink'> & {
  buttonLink?:
    | {
        path: string;
        nodeId: string;
        projectMapId: string;
      }
    | string;
};

const HeroDefault: FC<HeroProps> = ({ title, text, buttonCopy = '', buttonLink = '', backgroundImage }) => (
  <div className="relative">
    <Image
      className="absolute w-full h-full object-cover"
      src={backgroundImage?.src || backgroundImage}
      fill
      alt="hero-image"
      priority
    />
    <Container paddingTop={PaddingSize.None} paddingBottom={PaddingSize.None} backgroundClassName="pt-40">
      <div className="bg-neutral-800 md:bg-orange-900 relative md:-bottom-11 ml-auto w-full md:max-w-[658px] p-12 md:pl-24 md:pr-7 md:py-20 z-10">
        <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">{title}</p>
        {Boolean(text) && <p className="mt-7 font-extrabold text-white">{text}</p>}
        {buttonCopy && buttonLink && (
          <ButtonLink text={buttonCopy} href={buttonLink} className="lg:w-1/2 mt-9 text-sm max-w-full" />
        )}
      </div>
    </Container>
  </div>
);

const HeroCentered: FC<HeroProps> = ({ title, text, buttonCopy = '', buttonLink = '', backgroundImage }) => (
  <div className="relative">
    <Image
      className="absolute w-full h-full object-cover"
      src={backgroundImage?.src || backgroundImage}
      fill
      alt="hero-image"
      priority
    />
    <div className="relative flex items-center flex-col px-4 py-56 z-30">
      <p className="text-white text-3xl md:text-5xl font-bold text-center max-w-[600px]">{title}</p>
      {Boolean(text) && <p className="mt-7 font-extrabold text-white">{text}</p>}
      {buttonCopy && buttonLink && (
        <ButtonLink text={buttonCopy} href={buttonLink} className="mt-9 text-sm md:w-[329px] max-w-full" />
      )}
    </div>
  </div>
);

const transformData = (BaseComponent: FC<HeroProps>): FC<HeroProps> =>
  function wrapper({ buttonLink, ...props }: ExtendedHeroProps) {
    const transformedProps: HeroProps = {
      ...props,
      ...props.content,
      buttonLink: typeof buttonLink === 'string' ? buttonLink : buttonLink?.path,
    };
    return <BaseComponent {...transformedProps} />;
  };

const Hero: FC<HeroProps> = props =>
  props.component?.variant === HeroVariants.Centered ? <HeroCentered {...props} /> : <HeroDefault {...props} />;

registerUniformComponent({
  type: CanvasComponents.Hero,
  component: transformData(Hero),
});

export default Hero;
