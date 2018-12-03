import React from 'react';

import { storiesOf } from '@storybook/react/dist/client/preview';
import { Button } from './Button';

storiesOf('Button', module).addWithJSX('with background', () => (
  <Button bg="palegoldenrod">Hello World</Button>
)).addWithJSX('with background 2', () => (
  <Button bg="green">Hello World</Button>
))