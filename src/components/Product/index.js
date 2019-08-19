import React from 'react';
import {Text} from '@sitecore-jss/sitecore-jss-react';
import ProductList from "./ProductList";

const Product = (props) => (
    <div>
        <Text field={props.fields.heading}/>

        <ProductList/>

    </div>
);

export default Product;
