import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Breadcome extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <section className="bg-primary padding-y-sm">
            <div className="container">
            <ol className="breadcrumb ondark mb-0">
                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                {/* <li className="breadcrumb-item"><a className="text-white" href="#">Library</a></li>
                <li className="breadcrumb-item active text-white" aria-current="page">Data</li> */}
            </ol>
            </div> 
            </section>
        <section className="padding-y"></section>
      </div>
    )
  }
}

export default Breadcome