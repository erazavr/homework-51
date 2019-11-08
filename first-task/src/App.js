import React, {Component} from 'react';
import avengers from './assets/5UGk-LBOklcoffOFUhQqXg.jpeg'
import './App.css';

class App extends Component{
  render() {
    return(
        <div className="main">
            <img src={avengers}/>
            <h1>Название фильма: {this.props.name}</h1>
            <h1>Год выпуска: {this.props.year}</h1>
        </div>
    )
  }
}

export default App;
