import { data } from "autoprefixer";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const DisplayProducts = ({ loadedProducts }) => {
    
    const [products, setProducts] = useState(loadedProducts);

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/products/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deleteCount === 1) {
                    alert("Product deleted successfully!");
                    const newProducts = products.filter((product) => product._id !== _id);
                    setProducts(newProducts);
                }
            });
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
                <div key={product._id} className="bg-white shadow-lg rounded-lg p-4 relative">
                    <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>

                    <p className="text-gray-600 mt-2">${product.price}</p>
                    <p className="text-gray-600 mt-4">{product.description}</p>
                    {/* Action */}
                    <div className="dropdown dropdown-end absolute top-3 right-3">
                        <div tabIndex={0} role="button" className="p-1 bg-gray-100 m-1">
                            ...
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 space-y-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to={`/products/${product._id}`} className="btn btn-success">Edit</Link>
                            </li>
                            <li>
                                <button onClick={() => handleDelete(product._id)} className="btn btn-error">
                                    Delete
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayProducts;
