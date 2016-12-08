import React, { Component } from 'react';
import MaleBase from './base/MaleBase';
import FemaleBase from './base/FemaleBase';


export default class PowerClean extends Component {
  constructor(props) {
     super(props);
     this.state = {
       maleWeight: [52, 56, 60, 67, 75, 82, 90, 100, 110, 125, 145, 145],
       femaleWeight: [44, 48, 52, 56, 60, 67, 75, 82, 90, 90],
       mUntrained: [25, 28, 30, 35, 38, 38, 40, 43, 45, 48, 50, 53],
       fUntrained: [13, 15, 18, 18, 20, 23, 23, 25, 28, 30],
       mNovice: [48, 50, 55, 60, 65, 73, 75, 80, 83, 85, 88, 90],
       fNovice: [28, 30, 33, 35, 38, 40, 43, 45, 50, 53],
       mIntermediate: [58, 63, 68, 75, 83, 88, 93, 98, 103, 105, 108, 110],
       fIntermediate: [33, 35, 35, 38, 40, 45, 50, 55, 58, 63],
       mAdvanced: [80, 85, 90, 103, 113, 120, 128, 135, 140, 143, 145, 150],
       fAdvanced: [43, 45, 50, 53, 55, 60, 65, 70, 75, 80],
       mElite: [93, 103, 110, 120, 133, 140, 148, 155, 160, 165, 170, 175],
       fElite: [53, 58, 60, 65, 68, 75, 86, 90, 95, 100]
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
          <h4 style={{margin: '0 auto'}}>Male Power Clean</h4>
          <MaleBase
            userWeight={this.convertToPounds(this.state.maleWeight)}
            untrained={this.convertToPounds(this.state.mUntrained)}
            novice={this.convertToPounds(this.state.mNovice)}
            intermediate={this.convertToPounds(this.state.mIntermediate)}
            advanced={this.convertToPounds(this.state.mAdvanced)}
            elite={this.convertToPounds(this.state.mElite)}
            />
        </div>

        <div style={{width: 'auto', margin: '3px'}}>
          <h4 style={{margin: '0 auto'}}>Female Power Clean</h4>
          <FemaleBase
            userWeight={this.convertToPounds(this.state.femaleWeight)}
            untrained={this.convertToPounds(this.state.fUntrained)}
            novice={this.convertToPounds(this.state.fNovice)}
            intermediate={this.convertToPounds(this.state.fIntermediate)}
            advanced={this.convertToPounds(this.state.fAdvanced)}
            elite={this.convertToPounds(this.state.fElite)}
            />
        </div>
      </div>
    );
  }
}
