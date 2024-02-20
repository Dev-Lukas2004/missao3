import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-black">
                <div className="container">
                    <div className="coll7apse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/"><strong>Catálago</strong> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/dados"><strong>Novo</strong> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Nav;