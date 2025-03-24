import React, { Component } from 'react';
import './About.css';
export default class About extends Component {
    constructor(props){
        super(props);
        this.funprograss=this.funprograss.bind(this);
        this.state={
            numberprograss:0,
        }

    }
    componentDidMount() {
      this.funprograss();
  }
  
    funprograss() {
      this.stop = setInterval(() => {
          this.setState((prevState) => {
              if (prevState.numberprograss < 90) {
                  return { numberprograss: prevState.numberprograss + 1 };
              } else {
                  clearInterval(this.stop); // متوقف کردن تایمر وقتی به 90 رسید
                  return null;
              }
          });
      }, 10);
  }
  
    
  render() {
    return (
      <div>
        <div className='container'>
            <div>
                <h5>_ About Company _ </h5>
                <h2>We Create Only Digital And Creative Stuff </h2>
                <p>We believe that success is achieved through a highly collaborative interaction, so that We can Work. We are know for our together to identify eval. these services and features can provide Comprehensive range of offerings to cater.</p>
            </div>
            <div className='prograss'>
                <h4>Web development</h4>
                <div id="myProgress">
                   <div id="myBar" style={{ width: `${this.state.numberprograss}%` }}></div>
                </div>


            </div>
        </div>
      </div>
    )
  }
}
