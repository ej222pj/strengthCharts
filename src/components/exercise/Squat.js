import React, { Component } from 'react';
import MaleBase from './MaleBase';
import FemaleBase from './FemaleBase';


export default class Squat extends Component {
  constructor(props) {
     super(props);
     this.state = {
       maleWeight: [52, 56, 60, 67, 75, 82, 90, 100, 110, 125, 145, 145],
       femaleWeight: [44, 48, 52, 56, 60, 67, 75, 82, 90, 90],
       mUntrained: [35, 37.5, 40, 45, 50, 55, 57.5, 60, 62.5, 65, 67.5, 70],
       fUntrained: [20, 22.5, 25, 25, 27.5, 30, 32.5, 35, 37.5, 40],
       mNovice: [65, 70, 77.5, 85, 92.5, 100, 105, 110, 115, 117.5, 122.5, 125],
       fNovice: [37.5, 40, 45, 47.5, 50, 55, 57.5, 62.5, 67.5, 72.5],
       mIntermediate: [80, 87.5, 92.5, 105, 112.5, 122.5, 130, 135, 140, 145, 147.5, 150],
       fIntermediate: [45, 47.5, 52.5, 55, 60, 62.5, 67.5, 75, 80, 85],
       mAdvanced: [107.5, 117.5, 127.5, 142.5, 155, 167.5, 177.5, 185, 192.5, 197.5, 202.5, 207.5],
       fAdvanced: [60, 65, 67.5, 72.5, 77.5, 85, 90, 97.5, 105, 110],
       mElite: [145, 157.5, 167.5, 185, 202.5, 217.5, 230, 240, 250, 257.5, 262.5, 270],
       fElite: [75, 80, 87.5, 90, 95, 105, 115, 122.5, 132.5, 137.5]
    };
   }

   convertToPounds(stateArr) {
     if(this.props.pounds) {
       let arr = [];
       stateArr.forEach(function(element) {
         arr.push(Math.round(element * 2.2046))
       });
       return arr;
     }
     return stateArr;
   }

  render() {
    return (
      <div style={{margin: '0 auto'}}>
        <div style={{width: 'auto', margin: '3px'}}>
          <h4 style={{margin: '0 auto'}}>Male Squat</h4>
          <MaleBase
            userWeight={this.convertToPounds(this.state.maleWeight)}
            untrained={this.state.mUntrained}
            novice={this.state.mNovice}
            intermediate={this.state.mIntermediate}
            advanced={this.state.mAdvanced}
            elite={this.state.mElite}
            />
        </div>

        <div style={{width: 'auto', margin: '3px'}}>
          <h4 style={{margin: '0 auto'}}>Female Squat</h4>
          <FemaleBase
            userWeight={this.state.femaleWeight}
            untrained={this.state.fUntrained}
            novice={this.state.fNovice}
            intermediate={this.state.fIntermediate}
            advanced={this.state.fAdvanced}
            elite={this.state.fElite}
            />
        </div>
      </div>
    );
  }
}
