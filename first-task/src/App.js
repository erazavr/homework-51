import React, {Component,Fragment} from 'react';
import avengers from "./assets/5UGk-LBOklcoffOFUhQqXg.jpeg";
import bohemian from './assets/bohemian-rhapsody.jpg'
import logan from './assets/Logan.jpg'
import './App.css';
import Movie from './components/Movie/Movie'

class App extends Component{
  render() {
    return(
        <Fragment>
            <Movie name="Avengers endgame" year='2019' img={avengers}/>
            <Movie name="Logan" year='2017' img={bohemian}/>
            <Movie name="Bohemian rhapsody" year='2018' img={logan}/>
        </Fragment>

    )
  }
}

export default App;
