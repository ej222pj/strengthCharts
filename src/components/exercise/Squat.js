import React, { Component } from 'react';
import Base from './Base';

export default class Squat extends Component {
  constructor(props) {
     super(props);
     this.state = {
       userWeight: [2,3]
    };
   }

  render() {

    return (
      <Base userWeight={this.state.userWeight} />
    );
  }
}
