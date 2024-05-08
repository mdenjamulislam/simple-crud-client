import React from "react";
import AddProduct from "../components/AddProduct";
import { useLoaderData } from "react-router-dom";
import DisplayProducts from "../components/DisplayProducts";

const Products = () => {
    const loadedProducts = useLoaderData();

    return (
        <div className="container py-10">
            <AddProduct />

            {/* Display Product */}
            <div className="pt-10">
                <DisplayProducts loadedProducts={loadedProducts} />
            </div>
        </div>
    );
};

export default Products;
