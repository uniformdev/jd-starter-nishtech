import React, { FC } from 'react';
import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import Container, { PaddingSize } from '../Container';
import { CanvasComponents } from '../../constants';

const Divider: FC<ComponentProps> = () => (
  <Container paddingTop={PaddingSize.None} paddingBottom={PaddingSize.None}>
    <div className="border-t" />
  </Container>
);

registerUniformComponent({
  type: CanvasComponents.Divider,
  component: Divider,
});

export default Divider;
