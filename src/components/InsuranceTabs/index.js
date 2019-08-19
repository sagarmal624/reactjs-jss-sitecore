import React from 'react';
import {RichText, Text, withSitecoreContext} from '@sitecore-jss/sitecore-jss-react';

const InsuranceTabs = (props) => (
    <div data-e2e-class="styleguide-layout-tabs-tab">

        {props.sitecoreContext &&
        props.sitecoreContext.pageEditing && <Text tag="h5" field={props.fields.title}/>}

        {/* React.Fragment tells React to not use any wrapping tag for the component */}
        <RichText field={props.fields.content}/>
    </div>
);

export default withSitecoreContext()(InsuranceTabs);
