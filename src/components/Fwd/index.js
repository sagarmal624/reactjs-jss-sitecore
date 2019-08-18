import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Fwd = (props) => (
  <div>
    <p>Fwd Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Fwd;
