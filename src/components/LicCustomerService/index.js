import React from 'react';
import {Image, RichText, Text} from '@sitecore-jss/sitecore-jss-react';

const LicCustomerService = (props) => (
    <div>
        <Text tag={"h3"} field={props.fields.heading}/>
        <RichText field={props.fields.content}/>
        <Image
            field={props.fields.imageUrl}
            srcSet={[{mw: 300}, {mw: 100}]}
            sizes="(min-width: 960px) 300px, 100px"
            className="img-fluid"
        />
    </div>
);

export default LicCustomerService;
