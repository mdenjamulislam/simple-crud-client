import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const product = useLoaderData();

    return (
        <div>
            <h1 className="text-2xl text-center mt-10">Update Product</h1>
            <div className="w-full md:max-w-xl mx-auto p-4 md:p-5 bg-gray-50 rounded-xl mt-8">
                <form action="" className="space-y-3">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm mb-1">Name</label>
                        <input type="text" id="name" name="name" defaultValue={product.name} className="px-3 py-2 border rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price" className="text-sm mb-1">Price</label>
                        <input type="number" id="price" name="price" defaultValue={product.price} className="px-3 py-2 border rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-sm mb-1">Description</label>
                        <textarea name="description" id="description" cols="30" rows="5" defaultValue={product.description} className="px-3 py-2 border rounded"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="image" className="text-sm mb-1">Image</label>
                        <input type="text" id="image" name="image" defaultValue={product.image} className="px-3 py-2 border rounded" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Update Product</button>
                </form>
            </div>
            
        </div>
    );
};

export default UpdateProduct;