import React, { Component } from 'react';
import MaleBase from './base/MaleBase';
import FemaleBase from './base/FemaleBase';
import convertToPounds from '../helpers/Converter';

export default class Deadlift extends Component {
  constructor(props) {
     super(props);
     this.state = {
       maleWeight: [52, 56, 60, 67, 75, 82, 90, 100, 110, 125, 145, 145],
       femaleWeight: [44, 48, 52, 56, 60, 67, 75, 82, 90, 90],
       mUntrained: [43, 48, 50, 58, 63, 68, 70, 75, 78, 80, 83, 85],
       fUntrained: [25, 28, 30, 33, 35, 38, 40, 43, 45, 50],
       mNovice: [83, 88, 95, 108, 115, 125, 133, 138, 145, 148, 153, 155],
       fNovice: [48, 53, 55, 60, 63, 68, 73, 80, 88, 90],
       mIntermediate: [93, 100, 110, 123, 135, 143, 153, 160, 165, 170, 173, 178],
       fIntermediate: [50, 60, 63, 68, 73, 80, 85, 93, 98, 105],
       mAdvanced: [135, 145, 155, 173, 185, 200, 208, 218, 223, 228, 230, 233],
       fAdvanced: [80, 85, 90, 95, 100, 110, 118, 125, 130, 138],
       mElite: [175, 188, 200, 218, 235, 250, 258, 265, 270, 273, 278, 280],
       fElite: [105, 110, 115, 120, 125, 135, 145, 150, 160, 165]
    };
   }

   convertToPounds(stateArr) {
     const doConvert = this.props.pounds;
     const convertHelper = new convertToPounds();
     return convertHelper.convert(stateArr, doConvert);
   }

  render() {
    return (
      <div className="weightTables">
        <div className="tableStyle">
          <h4>Male Deadlift</h4>
          <MaleBase
            userWeight={this.convertToPounds(this.state.maleWeight)}
            untrained={this.convertToPounds(this.state.mUntrained)}
            novice={this.convertToPounds(this.state.mNovice)}
            intermediate={this.convertToPounds(this.state.mIntermediate)}
            advanced={this.convertToPounds(this.state.mAdvanced)}
            elite={this.convertToPounds(this.state.mElite)}
            />
        </div>

        <div className="tableStyle">
          <h4>Female Deadlift</h4>
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
