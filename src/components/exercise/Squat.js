import React, { Component } from 'react';
import Base from './Base';

export default class Squat extends Component {
  constructor(props) {
     super(props);
     this.state = {
       maleWeight: [40,50],
       femaleWeight: [20,30]
    };
   }

  render() {
    return (
      <div style={{margin: '0 auto'}}>
        <div style={{width: 'auto', margin: '3px'}}>
          <h4 style={{margin: '0 auto'}}>Male</h4>
          <Base userWeight={this.state.maleWeight} />
        </div>

        <div style={{width: 'auto', margin: '3px'}}>
          <h4 style={{margin: '0 auto'}}>Female</h4>
          <Base userWeight={this.state.femaleWeight} />
        </div>
      </div>
    );
  }
}
