import React, { PropTypes } from 'react';
import { DataTable, TableHeader } from 'react-mdl';

const Base = ({ userWeight }) => (
  <DataTable
    style={{margin: '0 auto'}}
    shadow={0}
    rows={[
        {bodyweight: userWeight[0], untrained: 0, novice: 0, intermediate: 0, advanced: 0, elite: 0},
        {bodyweight: userWeight[1], untrained: 0, novice: 0, intermediate: 0, advanced: 0, elite: 0}
    ]}
  >

  <TableHeader numeric name="bodyweight" tooltip="Your Body Weight">Body Weight</TableHeader>
  <TableHeader numeric name="untrained" tooltip="Never tried the exercise">Untrained</TableHeader>
  <TableHeader numeric name="novice" tooltip="Done the exercise for some months">Novice</TableHeader>
  <TableHeader numeric name="intermediate" tooltip="Done the exercise for a couple of years">Intermediate</TableHeader>
  <TableHeader numeric name="advanced" tooltip="Done the exercise for multiple years">Advanced</TableHeader>
  <TableHeader numeric name="elite" tooltip="Athlete competing in the sport">Elite</TableHeader>

</DataTable>
);

Base.propTypes = {
  userWeight: PropTypes.array,
}

export default Base;
