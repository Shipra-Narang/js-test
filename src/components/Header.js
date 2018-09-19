import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/main.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                <h1 style={{fontSize:80,marginTop:`-90`, fontFamily:'Andalus'}}>GALLERY</h1><br/>
                <ul style={{border:'solid',borderWidth:10, textAlign:'center',backgroundColor:'rgba(19, 17, 17, 0.678)',width:150,alignSelf:'center',marginLeft:200}}>
              <a href="#" style={{color:'lightgray', borderBottom:0}}> HOME</a>
                    </ul>
                    <ul style={{border:'solid',borderWidth:10, textAlign:'center',backgroundColor:'rgba(19, 17, 17, 0.678)',width:150,alignSelf:'center',marginLeft:100}}>
                    <a href="#" style={{color:'lightgray', borderBottom:0}}>   Blogs</a>
                    </ul>
                    <ul style={{border:'solid',borderWidth:10, textAlign:'center',backgroundColor:'rgba(19, 17, 17, 0.678)',width:150,alignSelf:'center',marginLeft:200}}>
                    <a href="#" style={{color:'lightgray', borderBottom:0}}>  About</a>
                    </ul>
                    <ul style={{border:'solid',borderWidth:10, textAlign:'center',backgroundColor:'rgba(19, 17, 17, 0.678)',width:150,alignSelf:'center',marginLeft:100}}>
                    <a href="#" style={{color:'lightgray', borderBottom:0}}>    Gallery</a>
                    </ul>
                    

                 
                
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
