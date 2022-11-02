import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Footer extends Component {
  static propTypes = {}

  render() {
    return (
      <>
         <footer className="section-footer bg-white shadow mt-3 card">
        <div className="container">
            <section className="footer-main py-5">
                <div className="row">
                    <aside className="col-lg-4">
                        <article className="me-lg-4 mb-4">
                            <img src="images/logo.png" className="logo-footer"/>
                            <p className="mt-3"> You might remember the Lenovo computer commercials in which a youth reports
                                this exciting news to his friends.
                            </p>
                            <nav>
                                <a className="btn btn-icon btn-light" title="Facebook" target="_blank" href="#">
                                    <i className="fab fa-facebook-f">
                                    </i>
                                </a>
                                <a className="btn btn-icon btn-light" title="Instagram" target="_blank" href="#">
                                    <i className="fab fa-instagram">
                                    </i>
                                </a>
                                <a className="btn btn-icon btn-light" title="Youtube" target="_blank" href="#">
                                    <i className="fab fa-youtube">
                                    </i>
                                </a>
                                <a className="btn btn-icon btn-light" title="Twitter" target="_blank" href="#">
                                    <i className="fab fa-twitter">
                                    </i>
                                </a>
                            </nav>
                        </article>
                    </aside>
                    <aside className="col-6 col-sm-3 col-lg-2">
                        <h6 className="title">About
                        </h6>
                        <ul className="list-menu mb-4">
                            <li>
                                <a href="#">About us
                                </a>
                            </li>
                            <li>
                                <a href="#">Services
                                </a>
                            </li>
                            <li>
                                <a href="#">Rules and terms
                                </a>
                            </li>
                            <li>
                                <a href="#">Blogs
                                </a>
                            </li>
                        </ul>
                    </aside>
                    <aside className="col-6 col-sm-3 col-lg-2">
                        <h6 className="title">Services
                        </h6>
                        <ul className="list-menu mb-4">
                            <li>
                                <a href="#">Help center
                                </a>
                            </li>
                            <li>
                                <a href="#">Money refund
                                </a>
                            </li>
                            <li>
                                <a href="#">Terms and Policy
                                </a>
                            </li>
                            <li>
                                <a href="#">Open dispute
                                </a>
                            </li>
                        </ul>
                    </aside>
                    <aside className="col-6 col-sm-3 col-lg-2">
                        <h6 className="title">For users
                        </h6>
                        <ul className="list-menu mb-4">
                            <li>
                                <a href="#"> User Login
                                </a>
                            </li>
                            <li>
                                <a href="#"> User register
                                </a>
                            </li>
                            <li>
                                <a href="#"> Account Setting
                                </a>
                            </li>
                            <li>
                                <a href="#"> My Orders
                                </a>
                            </li>
                        </ul>
                    </aside>
                    <aside className="col-6 col-sm-2 col-lg-2">
                        <h6 className="title">Get the app
                        </h6>
                        <a href="#" className="d-block mb-2">
                            <img src="images/misc/btn-appstore.png" height="40"/>
                        </a>
                        <a href="#" className="d-block mb-2">
                            <img src="images/misc/btn-market.png" height="40"/>
                        </a>
                    </aside>
                </div>
                
            </section>
            
            <section className="footer-bottom d-flex justify-content-lg-between border-top">
                <p className="text-muted mb-0"> © 2021 Templatemount. All rights reserved.
                </p>
                <nav>
                    <a href="#" className="px-2">Support
                    </a>
                    <a href="#" className="px-2">Privacy &amp; Cookies
                    </a>
                    <a href="#" className="px-2">Accessibility
                    </a>
                </nav>
            </section>
        </div>
        
    </footer>
      </>
    )
  }
}

export default Footer