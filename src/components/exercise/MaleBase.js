import React, { PropTypes } from 'react';
import { DataTable, TableHeader } from 'react-mdl';

const MaleBase = ({ userWeight, untrained, novice, intermediate, advanced, elite }) => (
  <DataTable
    style={{margin: '0 auto'}}
    shadow={0}
    rows={[
        {bodyweight: userWeight[0], untrained: untrained[0], novice: novice[0], intermediate: intermediate[0], advanced: advanced[0], elite: elite[0]},
        {bodyweight: userWeight[1], untrained: untrained[1], novice: novice[1], intermediate: intermediate[1], advanced: advanced[1], elite: elite[1]},
        {bodyweight: userWeight[2], untrained: untrained[2], novice: novice[2], intermediate: intermediate[2], advanced: advanced[2], elite: elite[2]},
        {bodyweight: userWeight[3], untrained: untrained[3], novice: novice[3], intermediate: intermediate[3], advanced: advanced[3], elite: elite[3]},
        {bodyweight: userWeight[4], untrained: untrained[4], novice: novice[4], intermediate: intermediate[4], advanced: advanced[4], elite: elite[4]},
        {bodyweight: userWeight[5], untrained: untrained[5], novice: novice[5], intermediate: intermediate[5], advanced: advanced[5], elite: elite[5]},
        {bodyweight: userWeight[6], untrained: untrained[6], novice: novice[6], intermediate: intermediate[6], advanced: advanced[6], elite: elite[6]},
        {bodyweight: userWeight[7], untrained: untrained[7], novice: novice[7], intermediate: intermediate[7], advanced: advanced[7], elite: elite[7]},
        {bodyweight: userWeight[8], untrained: untrained[8], novice: novice[8], intermediate: intermediate[8], advanced: advanced[8], elite: elite[8]},
        {bodyweight: userWeight[9], untrained: untrained[9], novice: novice[9], intermediate: intermediate[9], advanced: advanced[9], elite: elite[9]},
        {bodyweight: userWeight[10], untrained: untrained[10], novice: novice[10], intermediate: intermediate[10], advanced: advanced[10], elite: elite[10]},
        {bodyweight: userWeight[11] + "+", untrained: untrained[11], novice: novice[11], intermediate: intermediate[11], advanced: advanced[11], elite: elite[11]}
    ]}
  >

  <TableHeader className="bwCol" numeric name="bodyweight" tooltip="Your Body Weight">Body Weight</TableHeader>
  <TableHeader className="levelHeader" numeric name="untrained" tooltip="Never tried the exercise">Untrained</TableHeader>
  <TableHeader className="levelHeader" numeric name="novice" tooltip="Done the exercise for some months">Novice</TableHeader>
  <TableHeader className="levelHeader" numeric name="intermediate" tooltip="Done the exercise for a couple of years">Intermediate</TableHeader>
  <TableHeader className="levelHeader" numeric name="advanced" tooltip="Done the exercise for multiple years">Advanced</TableHeader>
  <TableHeader className="levelHeader" numeric name="elite" tooltip="Athlete competing in the sport">Elite</TableHeader>

</DataTable>
);

MaleBase.propTypes = {
  userWeight: PropTypes.array,
  untrained: PropTypes.array,
  novice: PropTypes.array,
  intermediate: PropTypes.array,
  advanced: PropTypes.array,
  elite: PropTypes.array,
}

export default MaleBase;
