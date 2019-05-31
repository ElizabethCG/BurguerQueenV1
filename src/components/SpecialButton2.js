import React, { Component } from 'react';
// import { menu } from '../menu.json';

export class SpecialButton2 extends React.Component{
  constructor(...props){
    super(...props);

    this.state = {

    showResume:false,}

      this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event){
   this.props.onClickHandler2(event)

    };





  render(){
   // console.log("Props > "+JSON.stringify(this.props));
    const menu = this.props.menu.map((men, i) => {

      if (men.comida===this.props.meal){
          return (
            <button name={men.tipo} value={men.precio} onClick={this.handleClick}>{men.tipo}</button>
          )}

        })



  return (


    <div>
          {menu}


    </div>
      )
     }
}
