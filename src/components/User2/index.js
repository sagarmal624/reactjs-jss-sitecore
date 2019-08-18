import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const User2 = (props) => (
  <div>
    <p>User2 Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default User2;
