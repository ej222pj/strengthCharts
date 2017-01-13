import React, { Component } from 'react';
import MaleBase from './base/MaleBase';
import FemaleBase from './base/FemaleBase';
import convertToPounds from '../helpers/Converter';

export default class Press extends Component {
  constructor(props) {
     super(props);
     this.state = {
       maleWeight: [52, 56, 60, 67, 75, 82, 90, 100, 110, 125, 145, 145],
       femaleWeight: [44, 48, 52, 56, 60, 67, 75, 82, 90, 90],
       mUntrained: [23, 25, 28, 30, 33, 35, 38, 40, 43, 43, 45, 45],
       fUntrained: [15, 15, 18, 18, 18, 20, 23, 23, 25, 28],
       mNovice: [33, 35, 38, 43, 45, 50, 53, 55, 58, 60, 60, 63],
       fNovice: [18, 20, 23, 23, 25, 28, 30, 33, 35, 38],
       mIntermediate: [40, 45, 48, 55, 58, 63, 65, 70, 73, 75, 75, 78],
       fIntermediate: [23, 25, 28, 28, 30, 33, 35, 38, 40, 43],
       mAdvanced: [50, 53, 58, 63, 70, 75, 78, 83, 85, 88, 90, 93],
       fAdvanced: [30, 33, 35, 38, 40, 43, 48, 50, 53, 58],
       mElite: [60, 65, 70, 78, 85, 100, 105, 115, 120, 123, 125, 130],
       fElite: [40, 43, 45, 48, 50, 55, 63, 65, 68, 73]
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
          <h4>Male Press</h4>
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
          <h4>Female Press</h4>
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
