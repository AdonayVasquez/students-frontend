import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="d-flex justify-content-end navbar">
            <div className="mx-5 m-0">
                <NavLink exact to="/" className="inherit" activeClassName="pageSelected">Add Student</NavLink>
                <NavLink to="/student-list" className="inherit" activeClassName="pageSelected">Students List</NavLink>
            </div>
        </div>
    )
}

export default Navbar;