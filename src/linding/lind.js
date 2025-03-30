import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './lind.css';

export default class Lind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imag: [
                { title: "1", para: "para1.", srct: "/images/max-bohme-BNnwFmplLLM-unsplash.jpg" },
                { title: "2", para: "para2.", srct: "/images/photo-1726137569914-ae2ad1c634f6.jpeg" },
            ],
            count: 0,
        };
    }

    componentDidMount() {
        if (this.state.imag.length > 0) {
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
        const { imag, count } = this.state;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='background-slide'>
                        <div>
                            <h1><b>{imag[count].title}</b></h1>
                            <p>{imag[count].para}</p>
                            <img 
                                className='img-slider-landing' 
                                src={`${process.env.PUBLIC_URL}${imag[count].srct}`} 
                                alt="slide" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
