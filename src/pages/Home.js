import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home()  {


    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(``)
            .then((response) => {
                console.log(response.data.data)
                setAPIData(response.data.data);
            })
    }, []);
    console.log(APIData, 'APIData')


    return (
      <>
      <section className="padding-y bg-light mt-5">
        <div className="container">
            
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap">
                            <img src="images/items/5.jpg"/>
                        </a>
                        <div className="info-wrap border-top">
                            <Link to="/product-details" className="title">Apple Watch Series G2
                            </Link>
                            <strong className="price">$399.50
                            </strong>
                            
                        </div>
                        <div className="info-wrap border-top text-center">
                            <Link to="/product-details" className="title text-primary">Product Details
                            </Link>
                        </div>
                    </div>
                    
                </div>
                
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card card-product-grid">
                        <div className="img-wrap">
                            <div className="hover-action p-2">
                                <a className="btn btn-sm w-100 btn-primary" href="#">
                                    <i className="fa fa-search-plus">
                                    </i> Quick view
                                </a>
                            </div>
                            <img src="images/items/5.jpg"/>
                        </div>
                        <div className="info-wrap border-top">
                            <a href="#" className="title">Apple Watch Series 1 Sport
                            </a>
                            <strong className="price">$299.00
                            </strong>
                            
                        </div>
                    </div>
                    
                </div>
                
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card card-product-grid">
                        <div className="img-wrap">
                            <span className="topbar">
                                <a href="#" className="btn btn-sm btn-light float-end">
                                    <i className="fa fa-heart">
                                    </i>
                                </a>
                                <span className="badge bg-danger"> New
                                </span>
                            </span>
                            <img src="images/items/6.jpg"/>
                        </div>
                        <div className="info-wrap border-top">
                            <a href="#" className="title">Sport Smart Watch Bracelet
                            </a>
                            <div className="price-wrap">
                                <strong className="price">$98.95
                                </strong>
                                <del className="price-old">$14.99
                                </del>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card card-product-grid">
                        <div className="img-wrap">
                            <span className="topbar">
                                <a href="#" className="btn btn-sm btn-light float-end">
                                    <i className="fa fa-heart">
                                    </i>
                                </a>
                            </span>
                            <img src="images/items/6.jpg"/>
                        </div>
                        <div className="info-wrap border-top">
                            <a href="#" className="title">Apple Watch Series 1 Sport
                            </a>
                            <div className="price-wrap">
                                <strong className="price">$120.00
                                </strong>
                                <del className="price-old">$14.99
                                </del>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            <br/>
            <br/>
            
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap">
                            <img src="images/items/10.jpg"/>
                            <span className="topbar">
                                <span className="badge bg-success"> Offer
                                </span>
                            </span>
                        </a>
                        <div className="info-wrap border-top">
                            <a href="#" className="float-end btn btn-light btn-icon">
                                <i className="fa fa-heart">
                                </i>
                            </a>
                            <a href="#" className="title text-truncate">Slim fit T-shirt for men
                            </a>
                            <small className="text-muted">Sizes: S, M, XL
                            </small>
                            <div className="price-wrap">
                                <strong className="price">$75.50
                                </strong>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap">
                            <img src="images/items/10.jpg"/>
                        </a>
                        <div className="info-wrap border-top">
                            <a href="#" className="float-end btn btn-light btn-icon">
                                <i className="fa fa-heart">
                                </i>
                            </a>
                            <a href="#" className="title text-truncate">Slim fit T-shirt for men
                            </a>
                            <small className="text-muted">Sizes: S, M, XL
                            </small>
                            <div className="price-wrap">
                                <strong className="price">$75.50
                                </strong>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap">
                            <img src="images/items/12.jpg"/>
                            <span className="topbar">
                                <span className="badge bg-success"> Offer
                                </span>
                            </span>
                        </a>
                        <div className="info-wrap border-top">
                            <a href="#" className="float-end btn btn-primary btn-icon">
                                <i className="fa fa-shopping-cart">
                                </i>
                            </a>
                            <a href="#" className="title text-truncate">Modern T-shirt for men
                            </a>
                            <small className="text-muted">Sizes: S, M, XL
                            </small>
                            <div className="price-wrap">
                                <strong className="price">$75.50
                                </strong>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="card card-product-grid">
                        <a href="#" className="img-wrap">
                            <img src="images/items/12.jpg"/>
                        </a>
                        <div className="info-wrap border-top">
                            <a href="#" className="float-end btn btn-primary btn-icon">
                                <i className="fa fa-shopping-cart">
                                </i>
                            </a>
                            <a href="#" className="title text-truncate">Blue T-shirt for men
                            </a>
                            <small className="text-muted">Sizes: S, M, XL
                            </small>
                            <div className="price-wrap">
                                <strong className="price">$75.50
                                </strong>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            
            
            
            
            
        </div>
        
    </section>
      </>
    )
  }


