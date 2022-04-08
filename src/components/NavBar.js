import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-light fixed-top" style={{ backgroundColor: 'gold' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><b>NewsExpress</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" style={{ fontWeight: 'bold' }}>Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business" style={{ fontWeight: 'bold' }}>Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{ fontWeight: 'bold' }}>Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/" style={{ fontWeight: 'bold' }}>General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health" style={{ fontWeight: 'bold' }}>Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science" style={{ fontWeight: 'bold' }}>Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports" style={{ fontWeight: 'bold' }}>Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology" style={{ fontWeight: 'bold' }}>Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
