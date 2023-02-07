import React, { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import Carousel from '../atoms/Carousel';
import ButtonLink from '../atoms/ButtonLink';
import ProductItem from '../ProductItem';
import Container, { BackgroundTypes } from '../Container';
import { CanvasComponents } from '../../constants';

type Props = ComponentProps<{
  title: string;
  subTitle?: string;
  buttonCopy: string;
  buttonUrl: string;
  products: Type.Product[];
}>;

const FeaturedProducts: FC<Props> = ({ title, subTitle, products, buttonCopy, buttonUrl, component }) => {
  const isDark = component.variant === BackgroundTypes.Dark.toLowerCase();

  if (!products.length) return null;

  return (
    <Container backgroundType={isDark ? BackgroundTypes.Dark : BackgroundTypes.LightGray}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10">
        <div className="mb-6 md:mb-0 basis-2/3 xl:basis-auto">
          <p className="font-acumin font-extrabold text-3xl">{title}</p>
          {subTitle && <p className="sm:pr-8">{subTitle}</p>}
        </div>
        {buttonCopy && buttonUrl && (
          <ButtonLink href={buttonUrl} text={buttonCopy} styleType={isDark ? 'secondary' : 'primary'} />
        )}
      </div>
      <Carousel isDark={isDark} itemClass="px-2.5 my-px" containerClass="-mx-2.5">
        {products.map(item => (
          <ProductItem key={`featured-product-${item.id}`} product={item} />
        ))}
      </Carousel>
    </Container>
  );
};

registerUniformComponent({
  type: CanvasComponents.FeaturedProducts,
  component: FeaturedProducts,
});

export default FeaturedProducts;
