import React from 'react';
import {RichText, Text, withSitecoreContext} from '@sitecore-jss/sitecore-jss-react';

const LiCInsurance = (props) => (
    <div data-e2e-class="styleguide-layout-tabs-tab">
       {props.sitecoreContext &&
        props.sitecoreContext.pageEditing && <Text tag="h5" field={props.fields.title}/>}
       <RichText field={props.fields.content}/>
    </div>
);
export default withSitecoreContext()(LiCInsurance);
