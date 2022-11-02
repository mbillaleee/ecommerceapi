import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../App.css';

export class Cart extends Component {
  static propTypes = {}

  render() {
    return (
      
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-4">Shopping cart
                            </h5>
                            <article class="row gy-3 mb-4">
                                <div class="col-lg-6">
                                    <div class="itemside me-lg-5">
                                        <div class="aside">
                                            <img src="images/items/1.jpg" class="img-sm border rounded" alt="im"/>
                                        </div>
                                        <div class="info">
                                            <a href="#" class="title mb-1">GoPro HERO6 4K Action Camera - Black color
                                            </a>
                                            <p class="text-muted small"> Color: Black, Zoom: 80x
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <select className="option" class="form-select">
                                        <option>1
                                        </option>
                                        <option>2
                                        </option>
                                        <option>3
                                        </option>
                                        <option>4
                                        </option>
                                    </select>
                                </div>
                                <div class="col-lg-2 col-sm-4 col-6">
                                    <div class="price-wrap lh-sm">
                                        <var class="price h6">$1156.00
                                        </var>
                                        <br/>
                                        <small class="text-muted"> $460.00 / per item
                                        </small>
                                    </div>
                                    
                                </div>
                                <div class="col-lg col-sm-4">
                                    <div class="float-lg-end">
                                        <a href="#" class="btn btn-light">
                                            <i class="fa fa-heart">
                                            </i>
                                        </a>
                                        <a href="#" class="btn btn-light text-danger"> Remove
                                        </a>
                                    </div>
                                </div>
                            </article>
                            
                            <article class="row gy-3 mb-4">
                                <div class="col-lg-6">
                                    <div class="itemside me-lg-5">
                                        <div class="aside">
                                            <img src="images/items/2.jpg" class="img-sm border rounded" alt="im"/>
                                        </div>
                                        <div class="info">
                                            <a href="" class="title mb-1">Canon Cmera EOS 2000, Black color 10x zoom
                                            </a>
                                            <p class="text-muted small"> Color: Black, Memory: 512GB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <select  class="form-select">
                                        <option>1
                                        </option>
                                        <option>2
                                        </option>
                                        <option>3
                                        </option>
                                        <option>4
                                        </option>
                                    </select>
                                </div>
                                <div class="col-lg-2 col-sm-4 col-6">
                                    <div class="price-wrap lh-sm">
                                        <var class="price h6">$1156.00
                                        </var>
                                        <br />
                                        <small class="text-muted"> $460.00 / per item
                                        </small>
                                    </div>
                                    
                                </div>
                                <div class="col-lg col-sm-4">
                                    <div class="float-lg-end">
                                        <a href="#" class="btn btn-light">
                                            <i class="fa fa-heart">
                                            </i>
                                        </a>
                                        <a href="#" class="btn btn-light text-danger"> Remove
                                        </a>
                                    </div>
                                </div>
                            </article>
                            
                            <article class="row gy-3 mb-4">
                                <div class="col-lg-6">
                                    <div class="itemside me-lg-5">
                                        <div class="aside">
                                            <img src="images/items/3.jpg" class="img-sm border rounded" alt="im"/>
                                        </div>
                                        <div class="info">
                                            <a href="#" class="title mb-1"> Xiaomi Redmi 8 Original Global Version 4GB
                                            </a>
                                            <p class="text-muted small"> Color: Black, Memory: 512GB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <select className="option"  class="form-select">
                                        <option>1
                                        </option>
                                        <option>2
                                        </option>
                                        <option>3
                                        </option>
                                        <option>4
                                        </option>
                                    </select>
                                </div>
                                <div class="col-lg-2 col-sm-4 col-6">
                                    <div class="price-wrap lh-sm">
                                        <var class="price h6">$1156.00
                                        </var>
                                        <br/>
                                        <small class="text-muted"> $460.00 / per item
                                        </small>
                                    </div>
                                    
                                </div>
                                <div class="col-lg col-sm-4">
                                    <div class="float-lg-end">
                                        <a href="#" class="btn btn-light">
                                            <i class="fa fa-heart">
                                            </i>
                                        </a>
                                        <a href="#" class="btn btn-light text-danger"> Remove
                                        </a>
                                    </div>
                                </div>
                            </article>
                            
                        </div>
                        
                        <div class="card-body border-top">
                            <p class="mb-0">
                                <i class="me-2 text-success fa fa-truck">
                                </i> Free Delivery within 1-2 weeks
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
                
                <aside class="col-lg-3">
                    <div class="card mb-3">
                        <div class="card-body">
                            <form>
                                <label class="form-label">Have coupon?
                                </label>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Coupon code" />
                                    <button class="btn btn-light">Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    
                    <div class="card">
                        <div class="card-body">
                            <dl class="dlist-align">
                                <dt>Total price:
                                </dt>
                                <dd class="text-end"> $1403.97
                                </dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Discount:
                                </dt>
                                <dd class="text-end text-success"> - $60.00
                                </dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>TAX:
                                </dt>
                                <dd class="text-end text-danger"> + $14.00
                                </dd>
                            </dl>
                            <hr/>
                            <dl class="dlist-align">
                                <dt>Total:
                                </dt>
                                <dd class="text-end text-dark h5"> $1357.97
                                </dd>
                            </dl>
                            <div class="d-grid gap-2 my-3">
                                <a href="#" class="btn btn-primary w-100"> Make Purchase
                                </a>
                                <a href="#" class="btn btn-light w-100"> Back to shop
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    
                </aside>
                
            </div>
            
            
            <br/>
            <br/>
            
            <div class="row">
                <div class="col-md-9">
                    <article class="card card-body mb-3">
                        <div class="row gy-3 align-items-center">
                            <div class="col-md-6">
                                <a href="#" class="itemside align-items-center">
                                    <div class="aside">
                                        <img src="images/items/10.jpg" height="72" width="72"
                                            class="img-thumbnail img-sm" alt="im"/>
                                    </div>
                                    <div class="info">
                                        <p class="title">T-shirts with multiple colors, for men and lady
                                        </p>
                                        <span class="text-muted">Clothes
                                        </span>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-auto">
                                <div class="input-group input-spinner">
                                    <button class="btn btn-light" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                            viewBox="0 0 24 24">
                                            <path d="M19 13H5v-2h14v2z">
                                            </path>
                                        </svg>
                                    </button>
                                    <input type="text" class="form-control" value="1" />
                                    <button class="btn btn-light" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                            viewBox="0 0 24 24">
                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                
                            </div>
                            
                            <div class="col">
                                <strong class="price"> $180.00
                                </strong>
                            </div>
                            <div class="col text-end">
                                <a href="#" class="btn btn-icon btn-light">
                                    <i class="fa fa-trash">
                                    </i>
                                </a>
                            </div>
                        </div>
                        
                    </article>
                    
                    <article class="card card-body mb-3">
                        <div class="row gy-3 align-items-center">
                            <div class="col-md-6">
                                <a href="#" class="itemside align-items-center">
                                    <div class="aside">
                                        <img src="images/items/12.jpg" height="72" width="72"
                                            class="img-thumbnail img-sm" alt="im"/>
                                    </div>
                                    <div class="info">
                                        <p class="title"> Backpack jeans for travel for men and lady
                                        </p>
                                        <span class="text-muted"> Accessories
                                        </span>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-auto">
                                <div class="input-group input-spinner">
                                    <button class="btn btn-light" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                            viewBox="0 0 24 24">
                                            <path d="M19 13H5v-2h14v2z">
                                            </path>
                                        </svg>
                                    </button>
                                    <input type="text" class="form-control" value="1" />
                                    <button class="btn btn-light" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                            viewBox="0 0 24 24">
                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                
                            </div>
                            
                            <div class="col">
                                <strong class="price"> $180.00
                                </strong>
                            </div>
                            <div class="col text-end">
                                <a href="#" class="btn btn-icon btn-light">
                                    <i class="fa fa-trash">
                                    </i>
                                </a>
                            </div>
                        </div>
                        
                    </article>
                    
                    <article class="card card-body mb-3">
                        <div class="row gy-3 align-items-center">
                            <div class="col-md-6">
                                <a href="#" class="itemside align-items-center">
                                    <div class="aside">
                                        <img src="images/items/8.jpg" height="72" width="72"
                                            class="img-thumbnail img-sm" alt="im"/>
                                    </div>
                                    <div class="info">
                                        <p class="title">Jeans bag for hiking blue color
                                        </p>
                                        <span class="text-muted">Wears
                                        </span>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-auto">
                                <div class="input-group input-spinner">
                                    <button class="btn btn-light" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                            viewBox="0 0 24 24">
                                            <path d="M19 13H5v-2h14v2z">
                                            </path>
                                        </svg>
                                    </button>
                                    <input type="text" class="form-control" value="2" />
                                    <button class="btn btn-light" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                            viewBox="0 0 24 24">
                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                
                            </div>
                            
                            <div class="col">
                                <strong class="price"> $180.00
                                </strong>
                            </div>
                            <div class="col text-end">
                                <a href="#" class="btn btn-icon btn-light">
                                    <i class="fa fa-trash">
                                    </i>
                                </a>
                            </div>
                        </div>
                        
                    </article>
                    
                </div>
                
                <aside class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Promo code" />
                                <button class="btn btn-light text-primary">Apply
                                </button>
                            </div>
                            <dl class="dlist-align">
                                <dt>Total price:
                                </dt>
                                <dd class="text-end"> $1403.97
                                </dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Discount:
                                </dt>
                                <dd class="text-end text-success"> - $60.00
                                </dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>TAX:
                                </dt>
                                <dd class="text-end text-danger"> + $14.00
                                </dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Total:
                                </dt>
                                <dd class="text-end text-dark h5"> $1357.97
                                </dd>
                            </dl>
                            <hr/>
                            <p class="text-center mt-3">
                                <img src="images/misc/payments.png" height="24" alt="im"/>
                            </p>
                            <a href="#" class="btn btn-primary mb-2 w-100">Checkout
                            </a>
                            <a href="#" class="btn btn-outline-primary w-100">Installment
                            </a>
                        </div>
                        
                    </div>
                    
                </aside>
                
            </div>
            
            
            <br/>
            <br/>
            
            <div class="card">
                <div class="row gx-0">
                    <aside class="col-md-9">
                        <article class="card-body border-bottom">
                            <div class="row gy-3">
                                <div class="col-md-7">
                                    <div class="itemside">
                                        <a href="#" class="aside">
                                            <img src="images/items/5.jpg" class="img-md img-thumbnail" alt="im"/>
                                        </a>
                                        <div class="info">
                                            <a href="#" class="title">Some name of item goes here nice
                                            </a>
                                            <strong class="price d-block mb-2">$128.00
                                            </strong>
                                            <div>
                                                <a href="#" class="btn-link">Save for later
                                                </a>
                                                <b class="dot mx-1">
                                                </b>
                                                <a href="#" class="btn-link text-danger"> Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-5">
                                    <div class="input-group input-spinner float-lg-end">
                                        <button class="btn btn-light" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                                viewBox="0 0 24 24">
                                                <path d="M19 13H5v-2h14v2z">
                                                </path>
                                            </svg>
                                        </button>
                                        <input type="text" class="form-control" value="1"/>
                                        <button class="btn btn-light" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                                viewBox="0 0 24 24">
                                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </article>
                        
                        <article class="card-body border-bottom">
                            <div class="row gy-3">
                                <div class="col-md-7">
                                    <div class="itemside">
                                        <a href="#" class="aside">
                                            <img src="images/items/6.jpg" class="img-md img-thumbnail" alt="im"/>
                                        </a>
                                        <div class="info">
                                            <a href="#" class="title">Some name of item goes here nice
                                            </a>
                                            <strong class="price d-block mb-2">$74.50
                                            </strong>
                                            <div>
                                                <a href="#" class="btn-link">Save for later
                                                </a>
                                                <b class="dot mx-1">
                                                </b>
                                                <a href="#" class="btn-link text-danger"> Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-5">
                                    <div class="input-group input-spinner float-lg-end">
                                        <button class="btn btn-light" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                                viewBox="0 0 24 24">
                                                <path d="M19 13H5v-2h14v2z">
                                                </path>
                                            </svg>
                                        </button>
                                        <input type="text" class="form-control" value="1"/>
                                        <button class="btn btn-light" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                                viewBox="0 0 24 24">
                                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </article>
                        
                        <article class="card-body">
                            <div class="row gy-3">
                                <div class="col-md-7">
                                    <div class="itemside">
                                        <a href="#" class="aside">
                                            <img src="images/items/7.jpg" class="img-md img-thumbnail" alt="im"/>
                                        </a>
                                        <div class="info">
                                            <a href="#" class="title">Gaming Headset 32db Black built in mic
                                            </a>
                                            <strong class="price d-block mb-2">$38.99
                                            </strong>
                                            <div>
                                                <a href="#" class="btn-link">Save for later
                                                </a>
                                                <b class="dot mx-1">
                                                </b>
                                                <a href="#" class="btn-link text-danger"> Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-5">
                                    <div class="input-group input-spinner float-lg-end">
                                        <button class="btn btn-light" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                                viewBox="0 0 24 24">
                                                <path d="M19 13H5v-2h14v2z">
                                                </path>
                                            </svg>
                                        </button>
                                        <input type="text" class="form-control" value="1"/>
                                        <button class="btn btn-light" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#999"
                                                viewBox="0 0 24 24">
                                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </article>
                        
                    </aside>
                    
                    <aside class="col-md-3 border-start">
                        <div class="card-body">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Promo code"/>
                                <button class="btn btn-light text-primary">Apply
                                </button>
                            </div>
                            <hr/>
                            <dl class="dlist-align">
                                <dt>Total price:
                                </dt>
                                <dd class="text-end"> $893.00
                                </dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Discount:
                                </dt>
                                <dd class="text-end text-danger"> - $60.00
                                </dd>
                            </dl>
                            <dl class="dlist-align">
                                <dt>Total:
                                </dt>
                                <dd class="text-end text-dark h5"> $957.00
                                </dd>
                            </dl>
                            <br/>
                            <a href="#" class="btn btn-primary w-100"> Checkout
                            </a>
                            <p class="text-center mt-3">
                                <img src="images/misc/payments.png" height="24" alt="im"/>
                            </p>
                        </div>
                        
                    </aside>
                    
                </div>
                
            </div>
            
            
            <br/>
            <br/>
            <div class="row">
                <aside class="col-lg-8">
                    
                    <div class="card">
                        <article class="card-body">
                            <h4 class="card-title">Review cart
                            </h4>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="itemside mb-4">
                                        <div class="aside">
                                            <img src="images/items/14.jpg" class="border img-sm rounded" alt="im"/>
                                        </div>
                                        <div class="info">
                                            <p> Leather Wallet for Men Original blue
                                            </p>
                                            <span class="text-muted">1 x $200.95
                                            </span>
                                            <br/>
                                            <strong class="price"> $400.90
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="itemside mb-4">
                                        <div class="aside">
                                            <img src="images/items/2.jpg" class="border img-sm rounded" alt="im"/>
                                        </div>
                                        <div class="info">
                                            <p> Canon EOS 1400 Black, optical lense
                                            </p>
                                            <span class="text-muted">2 x $169.95
                                            </span>
                                            <br/>
                                            <strong class="price"> $339.90
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="itemside mb-4">
                                        <div class="aside">
                                            <img src="images/items/11.jpg" class="border img-sm rounded" alt="im"/>
                                        </div>
                                        <div class="info">
                                            <p> Winter Jacket for men and lady
                                            </p>
                                            <span class="text-muted">2 x $169.95
                                            </span>
                                            <br/>
                                            <strong class="price"> $339.90
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-md-6">
                                    <div class="itemside mb-4">
                                        <div class="aside">
                                            <img src="images/items/3.jpg" class="border img-sm rounded" alt="im"/>
                                        </div>
                                        <div class="info">
                                            <p> Reealme note 7 128 GB Black
                                            </p>
                                            <span class="text-muted">2 x $220.95
                                            </span>
                                            <br/>
                                            <strong class="price"> $440.90
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </article>
                        
                        <article class="card-body border-top">
                            <a class="btn btn-light" href="#">
                                <i class="fa fa-arrow-left me-2">
                                </i> Edit order
                            </a>
                            <table className="tbl" class="table table-sm float-lg-end">
                                <tbody>
                                    <tr>
                                        <td> Subtotal (4 items):
                                        </td>
                                        <td> $1403.97
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Delivery charge:
                                        </td>
                                        <td> $120.00
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Total:
                                        </td>
                                        <td>
                                            <strong class="h5 price">$6018.00
                                            </strong>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                        
                    </div>
                    
                    
                </aside>
                
                <aside class="col-lg-4">
                    
                    <div class="card">
                        <div class="card-body">
                            <div class="dropdown">
                                <a href="#" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">
                                    Dropdown shopping cart
                                </a>
                                <div class="dropdown-menu p-3 dropdown-menu-end drop" >
                                    <div class="itemside mb-3">
                                        <div class="aside">
                                            <img src="images/items/2.jpg" class="img-sm rounded border" alt="im"/>
                                        </div>
                                        <div class="info">
                                            <a href="#" class="title">Canon Cmera EOS
                                            </a>
                                            <small class="text-muted">Blue Size: M QTY: 1
                                            </small>
                                            <div class="price text-muted">$9.50
                                            </div>
                                            
                                        </div>
                                        <div class="flex-grow-0 ms-2">
                                            <a href="#" class="btn btn-sm btn-light float-end">
                                                <i class="fa fa-times">
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="itemside mb-3">
                                        <div class="aside">
                                            <img src="images/items/1.jpg" class="img-sm rounded border" alt="im"/>
                                        </div>
                                        <div class="info">
                                            <a href="#" class="title">Name of item nice iteme
                                            </a>
                                            <small class="text-muted">Blue Size: M QTY: 1
                                            </small>
                                            <div class="price text-muted">$9.50
                                            </div>
                                            
                                        </div>
                                        <div class="flex-grow-0 ms-2">
                                            <a href="#" class="btn btn-sm btn-light float-end">
                                                <i class="fa fa-times">
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="itemside mb-3">
                                        <div class="aside">
                                            <img src="images/items/1.jpg" class="img-sm rounded border" alt="im"/>
                                        </div>
                                        <div class="info">
                                            <a href="#" class="title">Name of item nice iteme
                                            </a>
                                            <small class="text-muted">Blue Size: M QTY: 1
                                            </small>
                                            <div class="price text-muted">$9.50
                                            </div>
                                            
                                        </div>
                                        <div class="flex-grow-0 ms-2">
                                            <a href="#" class="btn btn-sm btn-light float-end">
                                                <i class="fa fa-times">
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div class="my-3"> Subtotal:
                                        <strong class="float-end price">$944.99
                                        </strong>
                                    </div>
                                    <a href="#" class="btn btn-success w-100"> Checkout
                                    </a>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    
                </aside>
                
            </div>
            
        </div>
    )
  }
}

export default Cart