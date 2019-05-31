import React, { Component } from 'react';

export class SpecialButton extends React.Component{
  constructor(props){
    super(props);


    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(){

    {!this.props.estado && (
        this.props.onClickHandler('orange')
    )}

    {this.props.estado && (
      this.props.onClickHandler('green')
    )}


    // {!this.handleClick.showColor && (
    //     this.props.onClickHandler('orange')
    // )}

    // {this.handleClick.showColor && (
    //   this.props.onClickHandler('green')
    // )}

    // this.props.onClickHandler('orange');   LINEA DE FABIAN
    // console.log("Props > "+JSON.stringify(this.props.onClickHandler('red')));
    // console.log("Props > "+JSON.stringify(this.props.children));
     console.log("Props > "+JSON.stringify(this.props));
     console.log("Props > "+JSON.stringify(this.props.color));
     console.log("Props > "+JSON.stringify(this.props.showColor));
     console.log("Props > "+JSON.stringify(this.props.showMessage));

  }

  render(){
    return (<button style={{color : this.props.color}} onClick={this.handleClick}>{this.props.children}</button>);
  }
}
