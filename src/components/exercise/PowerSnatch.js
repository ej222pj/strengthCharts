import React, { Component } from 'react';
import MaleBase from './base/MaleBase';
import FemaleBase from './base/FemaleBase';
import convertToPounds from '../helpers/Bench';

export default class PowerSnatch extends Component {
  constructor(props) {
     super(props);
     this.state = {
       maleWeight: [52, 56, 60, 67, 75, 82, 90, 100, 110, 125, 145, 145],
       femaleWeight: [44, 48, 52, 56, 60, 67, 75, 82, 90, 90],
       mUntrained: [20, 23, 28, 28, 30, 33, 35, 38, 40, 43, 43, 45],
       fUntrained: [10, 13, 15, 15, 15, 18, 18, 20, 23, 25],
       mNovice: [38, 40, 43, 48, 53, 55, 58, 60, 63, 65, 68, 70],
       fNovice: [23, 25, 25, 28, 30, 33, 35, 38, 40, 43],
       mIntermediate: [43, 48, 53, 60, 63, 68, 73, 78, 80, 83, 85, 88],
       fIntermediate: [25, 28, 30, 33, 35, 38, 40, 43, 45, 50],
       mAdvanced: [63, 65, 70, 80, 88, 93, 100, 105, 108, 113, 115, 118],
       fAdvanced: [35, 38, 38, 40, 43, 50, 53, 58, 60, 63],
       mElite: [73, 80, 85, 93, 103, 110, 115, 120, 125, 130, 133, 138],
       fElite: [43, 45, 50, 53, 55, 63, 68, 70, 75, 80]
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
          <h4>Male Power Snatch</h4>
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
          <h4>Female Power Snatch</h4>
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
