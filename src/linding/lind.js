import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './lind.css';
export default class Lind extends Component {
    constructor(props){
        super(props);
        this.state={
            imag:[
                {title:"1",para:"para1.",srct:"/images/max-bohme-BNnwFmplLLM-unsplash.jpg"},
                {title:"2",para:"para2.",srct:"/images/photo-1726137569914-ae2ad1c634f6.jpeg"},
                
            ],
            count:0,
        }
    }
    componentDidMount() {
        if (this.state.imag.length > 0) { // چک کردن اینکه آرایه خالی نباشد
            this.stopinter = setInterval(() => {
                this.setState((prevState) => ({
                    count: (prevState.count + 1) % this.state.imag.length
                }));
            }, 2000);
        }
    }
    componentWillUnmount() {
        clearInterval(this.stopinter);
    }
  render() {
    const imagindex = this.state.imag;
    const numberindex =this.state.count;
    return (
      <div className='container'>
        <div className='row'>
            <div className='background-slide'>
                <div>
                    <h1><b>{imagindex[numberindex].title}</b></h1>
                    <p>
                       {imagindex[numberindex].para}
                    </p>
                    <img className='img-slider-landing' src={imagindex[numberindex].srct} />
                    {/* {<h1><b>Technology, Bridging Dreams <br/>And Readlity</b></h1>
                    <p>
                        This slogan suggests that technology serves as a connection<br/> between
                        aspirations and tangible outcomes, making dreams achievable.
                    </p>
                    <img src='/images/bnr-pic2.jpg' />} */}
                </div>
            </div>

        </div>
      </div>
    )
  }
}
