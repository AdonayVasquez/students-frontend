import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
           <NavLink exact to="/" activeClassName="pageSelected">Add Student</NavLink>
           <NavLink to="/student-list" activeClassName="pageSelected">Students List</NavLink>
        </div>
    )
}

export default Navbar;