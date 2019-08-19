import React from 'react';
import {Image, RichText, Text, withSitecoreContext} from '@sitecore-jss/sitecore-jss-react';

const BjajInsurance = (props) => (
    <div data-e2e-class="styleguide-layout-tabs-tab">
        {props.sitecoreContext &&
        props.sitecoreContext.pageEditing && <Text tag="h5" field={props.fields.title}/>}
        <RichText field={props.fields.content}/>
        <Image
            field={props.fields.imageUrl}
            srcSet={[{ mw: 300 }, { mw: 100 }]}
            sizes="(min-width: 960px) 300px, 100px"
            className="img-fluid"
        />
    </div>
);
export default withSitecoreContext()(BjajInsurance);
