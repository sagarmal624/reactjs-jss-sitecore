import React from 'react';
import {Text, Image} from '@sitecore-jss/sitecore-jss-react';

const MaxCustomerService = (props) => (
    <div>
        <Text tag={"h3"} field={props.fields.heading}/>
        <Image
            field={props.fields.imageUrl}
            srcSet={[{mw: 300}, {mw: 100}]}
            sizes="(min-width: 960px) 300px, 100px"
            className="img-fluid"
        />
    </div>
);

export default MaxCustomerService;
