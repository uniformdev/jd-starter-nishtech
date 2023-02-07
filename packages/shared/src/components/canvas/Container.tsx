import React, { FC } from 'react';
import { UniformSlot, ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import BaseContainer, { Props as BaseContainerProps } from '../Container';
import { CanvasComponents } from '../../constants';

const Container: FC<ComponentProps<BaseContainerProps>> = props => (
  <BaseContainer {...props}>
    <UniformSlot name="content" />
  </BaseContainer>
);

registerUniformComponent({
  type: CanvasComponents.Container,
  component: Container,
});

export default Container;
