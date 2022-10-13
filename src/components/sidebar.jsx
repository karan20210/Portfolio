import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className=" js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 className='uppercase main-text'> Karan Baboota </h1>

              <a href = "mailto:karanbaboota@gmail.com"> <p>karanbaboota@gmail.com </p></a>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>                  
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>                              
                <li><a href="https://www.instagram.com/karanbaboota/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/karan-baboota/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/karan20210" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>     
                <li><a href = "https://wa.me/917291070242"><i className='icon-whatsapp'></i></a></li>         
              </ul>
            </nav>            
          </aside>
        </div>
      </div>
    )
  }
}
