import React, { Component } from 'react';
import MaleBase from './base/MaleBase';
import FemaleBase from './base/FemaleBase';
import convertToPounds from '../helpers/Bench';

export default class Bench extends Component {
  constructor(props) {
     super(props);
     this.state = {
       maleWeight: [52, 56, 60, 67, 75, 82, 90, 100, 110, 125, 145, 145],
       femaleWeight: [44, 48, 52, 56, 60, 67, 75, 82, 90, 90],
       mUntrained: [38, 40, 45, 50, 55, 60, 63, 63, 65, 68, 70, 73],
       fUntrained: [23, 25, 28, 30, 33, 35, 38, 38, 40, 43],
       mNovice: [50, 53, 58, 65, 70, 75, 80, 83, 85, 88, 90, 93],
       fNovice: [30, 33, 35, 38, 40, 40, 43, 50, 53, 55],
       mIntermediate: [60, 63, 70, 78, 85, 90, 98, 103, 105, 108, 113, 115],
       fIntermediate: [35, 38, 38, 40, 43, 48, 53, 55, 60, 63],
       mAdvanced: [83, 90, 95, 108, 115, 125, 133, 138, 143, 148, 153, 155],
       fAdvanced: [43, 45, 50, 53, 58, 63, 65, 73, 75, 80],
       mElite: [100, 110, 118, 133, 145, 158, 163, 173, 180, 185, 190, 193],
       fElite: [53, 58, 63, 65, 68, 75, 85, 90, 95, 100]
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
          <h4>Male Squat</h4>
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
          <h4>Female Squat</h4>
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
