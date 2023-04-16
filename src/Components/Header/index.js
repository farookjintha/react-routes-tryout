import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'> MyApp </NavLink>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to='/dashboard'> Dashboard </NavLink>
                    <NavLink className="nav-link" to='/profile'> Profile </NavLink>
                    <NavLink className="nav-link" to='/login'> Login </NavLink>
                    <NavLink className="nav-link" to='/register'> Register </NavLink>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;