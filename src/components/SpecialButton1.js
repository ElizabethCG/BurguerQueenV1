import React, { Component } from 'react';
// import {SpecialButton} from './SpecialButton';

export class SpecialButton1 extends React.Component{
  constructor(...props){
    super(...props);


  }


  render(){


    const pedido = this.props.menuChoice.map((menuChoice, i) => {
      return (
        <p>{menuChoice}</p>
      )})


    const precio = this.props.menuPrice.map((menuPrice, i) => {



        return (
          <p>{menuPrice}</p>


        )})

 // const total = this.props.menuPrice.reduce(function(a, b){ return a + b; });


    return (

    <div>

    <hr/>
      <p>RESUMEN PEDIDO</p>
      <span>Nombre Cliente: {this.props.cliente}</span>

      <p>{pedido} {precio}</p>



      </div>

    );
  }
}
