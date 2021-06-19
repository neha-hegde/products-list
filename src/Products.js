import React from "react";

const Products = (props) => {
    const {name,price}=props.product;
    return(
        <div className="product">
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <input id="button" type="button" name="button" value="Description" />
        </div>
    );
}

export default Products;