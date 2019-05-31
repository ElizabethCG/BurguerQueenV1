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
import { menu } from './menu.json';



import {SpecialButton} from './components/SpecialButton';
import {SpecialButton1} from './components/SpecialButton1';
import {SpecialButton2} from './components/SpecialButton2';
import {ButtonMeal} from './components/ButtonMeal';

export default class App2 extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      client:"",
       menu,
      menuChoices :[],
      menuPrices : [],
      buttonColor : 'purple',
      showMessage : false,
      showColor: false,
      meal:"",
      showOptions: false,
      newArray: [],

    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }


    handleClick(newColor){
      this.setState({
        ...this.state,

        buttonColor : newColor,
        showMessage : !this.state.showMessage,
        showColor: !this.state.showColor,
      });
    }


    handleClick2(event,cont){
      console.log(cont)
      this.setState({
        ...this.state,
        // menuPrices.push([event.target.value],)


         menuPrices : [...this.state.menuPrices, event.target.value],
         menuChoices: [...this.state.menuChoices, event.target.name],


        });


      }

      handleClick3(event){
        this.setState({
          ...this.state,

          meal : event.target.name,
         showOptions: true,
          });

        }



      updateClient(event){
        this.setState({
          ...this.state,
          client: event.target.value
        });
      }


  render() {

      return (

      <div>
      <h1>Burguer Queen</h1>
        <h2>Fast food 24 Hours</h2>



        <ButtonMeal   estado= {this.state.showColor} color={this.state.buttonColor} onClickHandler3={this.handleClick3}>Desayuno</ButtonMeal>

        {this.state.showOptions  && (


<div>

      <label> Nombre cliente </label>

        <input type="text" value={this.state.client} onChange={this.updateClient.bind(this)}/>

        <SpecialButton2 menu={menu} meal={this.state.meal}  menuChoice={this.state.menuChoices} menuPrice={this.state.menuPrices} onClickHandler2={this.handleClick2}></SpecialButton2>

        <SpecialButton   estado= {this.state.showColor} color={this.state.buttonColor} onClickHandler={this.handleClick}>Botón de prueba Taller</SpecialButton>

        <SpecialButton1 menuChoice={ this.state.menuChoices} menuPrice={this.state.menuPrices} cliente=  {this.state.client}

         onChange={this.updateClient.bind(this)}> Muestra resumen del pedido </SpecialButton1>

     </div>

 )}
</div>
    )}






}
