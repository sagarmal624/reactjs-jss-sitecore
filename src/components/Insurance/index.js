import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Insurance = (props) => (
  <div>
    <p>Insurance Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Insurance;
