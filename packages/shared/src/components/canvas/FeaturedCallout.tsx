import React, { FC } from 'react';
import Image from 'next/image';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import Container, { PaddingSize } from '../Container';
import ButtonLink from '../atoms/ButtonLink';
import { CanvasComponents } from '../../constants';

type FeaturedCalloutProps = ComponentProps<{
  title: string;
  text: string;
  buttonCopy?: string;
  buttonLink?: string;
  paddingTop?: PaddingSize;
  paddingBottom?: PaddingSize;
  backgroundImage: Type.Image;
  content: FeaturedCalloutProps;
}>;

type ExtendedFeaturedCalloutProps = Omit<FeaturedCalloutProps, 'buttonLink'> & {
  buttonLink?:
    | {
        path: string;
        nodeId: string;
        projectMapId: string;
      }
    | string;
};

const FeaturedCallout: FC<FeaturedCalloutProps> = ({
  title,
  text,
  buttonCopy,
  buttonLink,
  paddingTop = PaddingSize.Medium,
  paddingBottom = PaddingSize.Medium,
  backgroundImage,
}) => {
  return (
    <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <div className="flex flex-col lg:flex-row gap-x-16 max-w-full">
        {Boolean(backgroundImage) || Boolean(backgroundImage?.src) ? (
          <div className="basis-1/2">
            <Image width={504} height={504} src={backgroundImage?.src ?? backgroundImage} alt="featured callout" />
          </div>
        ) : null}
        <div className="flex flex-col justify-center pt-8 md:pt-12 lg:pt-0 basis-1/2">
          <p className="font-extrabold text-3xl">{title}</p>
          {Boolean(text) && <div className="product-description pt-6">{text}</div>}
          {buttonCopy && buttonLink && (
            <ButtonLink areaLabel={buttonCopy} text={buttonCopy} href={buttonLink} className="mt-6 text-sm md:mt-10" />
          )}
        </div>
      </div>
    </Container>
  );
};

const transformData = (BaseComponent: FC<FeaturedCalloutProps>): FC<FeaturedCalloutProps> =>
  function wrapper({ buttonLink, ...props }: ExtendedFeaturedCalloutProps) {
    const transformedProps: FeaturedCalloutProps = {
      ...props,
      ...props.content,
      buttonLink: typeof buttonLink === 'string' ? buttonLink : buttonLink?.path,
    };
    return <BaseComponent {...transformedProps} />;
  };

registerUniformComponent({
  type: CanvasComponents.FeaturedCallout,
  component: transformData(FeaturedCallout),
});

export default FeaturedCallout;
