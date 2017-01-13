import React, { Component } from 'react';
import MaleBase from './base/MaleBase';
import FemaleBase from './base/FemaleBase';
import convertToPounds from '../helpers/Converter';

export default class Bench extends Component {
  constructor(props) {
     super(props);
     this.state = {
       maleWeight: [52, 56, 60, 67, 75, 82, 90, 100, 110, 125, 145, 145],
       femaleWeight: [44, 48, 52, 56, 60, 67, 75, 82, 90, 90],
       mUntrained: [35, 37, 40, 45, 50, 55, 57, 60, 62, 65, 67, 70],
       fUntrained: [20, 22, 25, 25, 27, 30, 32, 35, 37, 40],
       mNovice: [65, 70, 77, 85, 92, 100, 105, 110, 115, 117, 122, 125],
       fNovice: [37, 40, 45, 47.5, 50, 55, 57, 62, 67, 72],
       mIntermediate: [80, 87, 92, 105, 112, 122, 130, 135, 140, 145, 147, 150],
       fIntermediate: [45, 47, 52, 55, 60, 62, 67, 75, 80, 85],
       mAdvanced: [107, 117, 127, 142, 155, 167, 177, 185, 192, 197, 202, 207],
       fAdvanced: [60, 65, 67, 72, 77, 85, 90, 97, 105, 110],
       mElite: [145, 157, 167, 185, 202, 217, 230, 240, 250, 257, 262, 270],
       fElite: [75, 80, 87, 90, 95, 105, 115, 122, 132, 137]
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
          <h4>Male Bench</h4>
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
          <h4>Female Bench</h4>
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
