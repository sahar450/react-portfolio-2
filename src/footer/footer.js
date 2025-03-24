import React, { Component } from 'react'
import './footer.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
export default class Footer extends Component {
  render() {
    return (
      <div className='f'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-sm-12 mb-4'>
                    <div>
                        <h1 className="titlef">
                        <span className="kcolorf">K</span>VIEERA
                        </h1>
                        <p>These Terms will be applied fully and affect to your use of this Website.</p>
                    </div>
                    <div>
                        <i className="fa-brands fa-x-twitter itemf"></i>
                        <i className="fa-brands fa-x-twitter itemf"></i>
                        <i className="fa-brands fa-x-twitter itemf"></i>
                        <i className="fa-brands fa-x-twitter itemf"></i>
                    </div>
                </div>
                
                
               
            </div>
        </div>
      </div>
    )
  }
}
