import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/users">Users</NavLink>
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
        </>
    );
    return (
        <header>
            <div className="container navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/" className="text-xl font-bold">CRUD</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
