import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount === 1) {
                    alert("User deleted successfully!");
                    const newUsers = users.filter(user => user._id !== _id);
                    setUsers(newUsers);
                }
        })
    }

    return (
        <div className="container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map((user) => {
                return (
                    <div key={user._id} className="p-4 bg-white shadow-md rounded-xl space-y-3">
                        <h3 className="text-2xl font-semibold">{user.name}</h3>
                        <p className="font-semibold">{user.email}</p>
                        <p>{user.phone}</p>
                        <div className="pt-3 border-t border-slate-400 text-left">
                            <p>{ user.address}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to={`/update/${user._id}`}><button className="bg-sky-500 text-white px-4 py-2 rounded-lg">Edit</button></Link>
                            <button onClick={() => handleDelete(user._id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Users;
