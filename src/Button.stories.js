import React from 'react';
import { wInfo } from './utils';

import { storiesOf } from '@storybook/react/dist/client/preview';
import { Button } from './Button';
import { text, boolean } from '@storybook/addon-knobs/react';

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
    <Button
      disabled={boolean('disabled', false)}
    >
      {text('text', 'Hello world')}
    </Button>
  ));