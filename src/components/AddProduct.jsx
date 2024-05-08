import React from "react";

const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.product_title.value;
        const price = e.target.product_price.value;
        const description = e.target.product_description.value;
        const product = { title, price, description };

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Product added successfully!");
                    e.target.reset();
                    window.location.reload();
                }
            });
    };
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold">Add a new product</h1>
            <div className="w-full md:max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="product_title">Title</label>
                        <input type="text" name="product_title" id="product_title" className="w-full px-4 py-2 border border-sky-500 rounded-lg" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="product_price">Price</label>
                        <input type="number" name="product_price" id="product_price" className="w-full px-4 py-2 border border-sky-500 rounded-lg" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="product_description">Description</label>
                        <textarea name="product_description" id="product_description" className="w-full px-4 py-2 border border-sky-500 rounded-lg" />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
