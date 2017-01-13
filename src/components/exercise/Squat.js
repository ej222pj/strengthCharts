import React, { Component } from 'react';
import MaleBase from './base/MaleBase';
import FemaleBase from './base/FemaleBase';
import convertToPounds from '../helpers/Converter';

export default class Squat extends Component {
  constructor(props) {
     super(props);
     this.state = {
       maleWeight: [52, 56, 60, 67, 75, 82, 90, 100, 110, 125, 145, 145],
       femaleWeight: [44, 48, 52, 56, 60, 67, 75, 82, 90, 90],
       mUntrained: [35, 38, 40, 45, 50, 55, 58, 60, 63, 65, 68, 70],
       fUntrained: [20, 23, 25, 25, 28, 30, 33, 35, 38, 40],
       mNovice: [65, 70, 78, 85, 93, 100, 105, 110, 115, 118, 123, 125],
       fNovice: [38, 40, 45, 48, 50, 55, 58, 63, 68, 73],
       mIntermediate: [80, 88, 93, 105, 113, 123, 130, 135, 140, 145, 148, 150],
       fIntermediate: [45, 48, 53, 55, 60, 63, 68, 75, 80, 85],
       mAdvanced: [108, 118, 128, 143, 155, 168, 178, 185, 193, 198, 203, 208],
       fAdvanced: [60, 65, 68, 73, 78, 85, 90, 98, 105, 110],
       mElite: [145, 158, 168, 185, 203, 218, 230, 240, 250, 258, 263, 270],
       fElite: [75, 80, 88, 90, 95, 105, 115, 123, 133, 138]
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
