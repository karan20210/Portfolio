import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Yooo! <br />I'm Karan</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1-F_EdTPLtcOsvAaBk4V_vyEhiiuQtbCL/edit?usp=sharing&ouid=107427003273334779951&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">View Resumé</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I love Videography!!</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.instagram.com/tv/CSo1x_Rp3K6/?igshid=NmNmNjAwNzg%3D" target="_blank" rel="noopener noreferrer">Here's a sneak peek </a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>              
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
