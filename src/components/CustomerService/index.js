import React from 'react';
import {Image, RichText, Text, withSitecoreContext} from '@sitecore-jss/sitecore-jss-react';
import {Link} from "react-router-dom";

const CustomerService = (props) => (
    <div>

        <Link to="/customerservice/max"> <RichText field={props.fields.Maxdescription}/></Link>
        <br/>
        <Link to="/customerservice/lic"> <RichText field={props.fields.Licdescription}/></Link>
        <Image
            field={props.fields.imageUrl}
            srcSet={[{mw: 300}, {mw: 100}]}
            sizes="(min-width: 960px) 300px, 100px"
            className="img-fluid"
        />
    </div>
);
export default withSitecoreContext()(CustomerService);
