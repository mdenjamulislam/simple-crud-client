import "./App.css";
import Users from "./components/Users";

function App() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const user = { name, email, phone, address };
        console.log(user);

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    alert("User added successfully!");
                    e.target.reset();
                }
            });
    };
    return (
        <>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10">Simple CRUD</h1>
            <div className="container lg:max-w-xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="w-full flex flex-col gap-1 items-start">
                        <label htmlFor="name" className="text-sm md:text-base text-gray-700">
                            Name
                        </label>
                        <input type="text" name="name" id="name" className="w-full px-4 py-2 border border-sky-500 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col gap-1 items-start">
                        <label htmlFor="email" className="text-sm md:text-base text-gray-700">
                            Email
                        </label>
                        <input type="email" name="email" id="email" className="w-full px-4 py-2 border border-sky-500 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col gap-1 items-start">
                        <label htmlFor="phone" className="text-sm md:text-base text-gray-700">
                            Phone
                        </label>
                        <input type="tel" name="phone" id="phone" className="w-full px-4 py-2 border border-sky-500 rounded-lg" />
                    </div>
                    <div className="w-full flex flex-col gap-1 items-start">
                        <label htmlFor="address" className="text-sm md:text-base text-gray-700">
                            Address
                        </label>
                        <textarea name="address" id="address" className="w-full px-4 py-2 border border-sky-500 rounded-lg" />
                    </div>
                    <button type="submit" className="w-full bg-sky-500 text-white px-4 py-2 rounded-lg">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default App;
