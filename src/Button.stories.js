import React from 'react';

import { storiesOf } from '@storybook/react/dist/client/preview';
import { Button } from './Button';

storiesOf('Button', module).add('with background', () => (
  <Button bg="palegoldenrod">Hello World</Button>
)).add('with background 2', () => (
  <Button bg="green">Hello World</Button>
))