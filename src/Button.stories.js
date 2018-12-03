import React from 'react';
import { wInfo } from '../src/utils.js';

import { storiesOf } from '@storybook/react/dist/client/preview';
import { Button } from './Button';

storiesOf('Button', module)
  .addWithJSX(
    'with background', 
    wInfo(`
      description of the component

      ~~~js
      <Button>Click here</Button>
      ~~~
  `)(() => (
    <Button bg="palegoldenrod">Hello World</Button>
  )))
  .addWithJSX('with background 2', () => (
    <Button bg="green">Hello World</Button>
  ));