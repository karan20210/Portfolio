import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">The story of my life</span>
                <h2 className="colorlib-heading animate-box">Through the years</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>B.Tech in CSE at IIITD <span>2020-present</span></h2>
                        <p>I'm a CSE undergrad at IIITD. In my college, I've developed quite a few skills, both technical and non-technical. I've picked up languages like Java and JavaScript. I'm also the coordinator of the photography and videography society of IIITD</p>
                      </div>
                    </div>
                  </article>                                       
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Schooling from FAS, Delhi <span>2006-2020</span></h2>
                        <p>I did my full schooling from Father Agnel School, Delhi and I graduated in the science stream which nudged me to be an enginner coz... why not xD</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
