import React, { Component } from 'react';
export default class Portfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id='portfolio'>
                <div className='row'>
                    <div className='twelve colums collapsed'>
                        <h1> Check Out Some of the Work I Did!</h1>
                        <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                            {
                                resumeData.portfolio && resumeData.portfolio.map((item) => {
                                    return (
                                        <div className='columns portfolio-item'>
                                            <div className='item-wrap'>
                                                <a href='#images-01'>
                                                    <img src={`${item.imgurl}`} alt = 'images' className="item-img"/> 
                                                    <div className='overlay'>
                                                        <div className='portfolio-item-meta'>
                                                            <h5>{item.name}</h5>
                                                            <p>{item.description}</p>

                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}