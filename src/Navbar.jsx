import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex gap-6 justify-between max-w-2xl mx-auto">
             <NavLink to="/" className= " btn btn-accent "> Home</NavLink>
            <NavLink to="/addCoffee" className= " btn btn-accent">Add coffee</NavLink>
            <NavLink to="/signUp" className= " btn btn-accent "> Sign Up</NavLink>
            <NavLink to="/signIn" className= " btn btn-accent ">Sign In</NavLink>
            <NavLink to="/users" className= " btn btn-accent ">Users</NavLink>
        </div>
    );
};

export default Navbar;