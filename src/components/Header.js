import React from 'react'


function Header() {
  return (
    <div>
        <header className="section-header border-bottom">
        
        
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="http://bootstrap-ecommerce.com">
                    <img src="images/logo.svg" height="40" className="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main1"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbar_main1">
                    <ul className="navbar-nav ms-auto me-sm-2 mt-2 mt-lg-0">
                        <li className="nav-item me-2 active">
                            <a className="nav-link" href="/"> Home
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#">About
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#">Services
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="#">Projects
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="/services">Services
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="/contact">Contacts
                            </a>
                        </li>
                        <li className="nav-item me-2">
                            <a className="nav-link" href="/about">About
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link py-0 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span className="icon-xs bg-gray rounded-circle me-2">
                                    <i className="fa fa-user">
                                    </i>
                                </span>
                                <span>Profile
                                </span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="#">Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Account Settings
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Newsletter
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Sign Out
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    </header>
    </div>
  )
}

export default Header