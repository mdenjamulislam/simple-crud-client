import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();

    // Update information
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const updatedUser = { name, email, phone, address };

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.modifiedCount === 1) {
                    alert("User updated successfully!");
                    window.location.href = "/users"; // When user is updated, redirect to users page
                }
            });
    };

    return (
        <div className="container mx-auto my-10">
            <h3 className="text-2xl text-center">
                Update Information of <span className="font-bold">{loadedUser.name}</span>
            </h3>
            <div className="w-full md:max-w-xl mx-auto p-4 md:p-5 bg-gray-50 rounded-xl mt-8">
                <form onSubmit={handleUpdate} className="space-y-3">
                    <div className="flex flex-col">
                        <label className="text-sm mb-1" htmlFor="name">
                            Name
                        </label>
                        <input type="text" id="name" name="name" defaultValue={loadedUser.name} className="px-3 py-2 border rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm mb-1" htmlFor="email">
                            Email
                        </label>
                        <input type="email" id="email" name="email" defaultValue={loadedUser.email} className="px-3 py-2 border rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm mb-1" htmlFor="phone">
                            Phone
                        </label>
                        <input type="tel" id="phone" name="phone" defaultValue={loadedUser.phone} className="px-3 py-2 border rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm mb-1" htmlFor="address">
                            Address
                        </label>
                        <input type="url" id="address" name="address" defaultValue={loadedUser.address} className="px-3 py-2 border rounded" />
                    </div>
                    <input type="submit" value="Update" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-2" />
                </form>
            </div>
        </div>
    );
};

export default Update;
