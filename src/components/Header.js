import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/main.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                <h1 style={{fontSize:80,marginTop:`0`, fontFamily:'Stencil'}}>GALLERY</h1><br/>
                <ul>
              <a href="#" style={{color:'lightgray'}}> HOME</a>
                    </ul>
                    <ul>
                    <a href="#" style={{color:'lightgray'}}>   Blogs</a>
                    </ul>
                    <ul>
                    <a href="#" style={{color:'lightgray'}}>  About</a>
                    </ul>
                    <ul>
                    <a href="#" style={{color:'lightgray'}}>    Gallery</a>
                    </ul>
                    

                 
                
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
