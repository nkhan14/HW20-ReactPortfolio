import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work!</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <ul className="overlay">
                        <div className="portfolio-item-meta">
                          <a href={item.url}>
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          </a>
                        </div>
                      </ul>
                  
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