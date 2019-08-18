import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Demo1 = (props) => (
  <div>
    <p>Demo1 Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Demo1;
