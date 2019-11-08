import React, {Component,Fragment}from 'react';
import './App.css';
import Header from "./components/Header";
import Promo from "./components/Promo";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component{
    render() {
        return(
            <Fragment>
                <Header/>
                <Promo/>
                <Content/>
                <Footer/>
            </Fragment>

        )
    }
}

export default App;
