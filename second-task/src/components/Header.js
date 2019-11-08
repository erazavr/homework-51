import React, {Component} from 'react';
import images from '../images.js';
class Header extends Component {
    render() {
        return(

            <header className = 'header'>
                <div className="container clearfix">
                    <a href="#" className="logo">
                        <img src={images.logo}/>
                    </a>
                    <nav className="main-nav">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">products</a></li>
                            <li><a href="#">services</a></li>
                            <li><a href="#">our work</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        )
    }
}
export default Header
