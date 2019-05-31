// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {SpecialButton} from './components/SpecialButton';
//
// class App extends Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//       showMessage : false,
//       buttonColor : 'purple',
//     };
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick(newColor){
//     this.setState({
//       ...this.state,
//       buttonColor: newColor,
//       showMessage : !this.state.showMessage,
//     });
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           {!this.state.showMessage && (
//             <p>
//             Holo, soy un taller de react
//             Y me actualizo con cada modificación
//           </p>
//           )}
//
//           {this.state.showMessage && (
//             <p>Holo, me presionaron el botón</p>
//           )}
//
//           <SpecialButton color={this.state.buttonColor} onClickHandler={this.handleClick}>Press me!</SpecialButton>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;

import React from 'react'

export default class Contador extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      contador: 0,

    }
  }

  incrementar() {
    this.setState({
      ...this.state,
      contador: this.state.contador + 1
    })
  }

  render() {
    return (
      <div>
        <span>Cuenta actual: {this.state.contador}</span>
        <button onClick={this.incrementar.bind(this)}> + </button>
      </div>
    )
  }
}
