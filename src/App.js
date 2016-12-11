import React, { Component } from 'react';
import './App.css';
import { Tabs, Tab, Switch } from 'react-mdl';
import Squat from './components/exercise/Squat';
import Bench from './components/exercise/Bench';
import Deadlift from './components/exercise/Deadlift';
import Press from './components/exercise/Press';
import PowerClean from './components/exercise/PowerClean';
import PowerSnatch from './components/exercise/PowerSnatch';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { pounds: false };
    this.state = { exerciseTab: 0 };
  }

  render() {
    const doConvert = this.state.pounds;
    return (
      <div className="App">
        <div className="content">
            <div className="exercise-tabs">
              <Tabs className="tabHeader" activeTab={this.state.exerciseTab} onChange={(tabId) => this.setState({ exerciseTab: tabId })} ripple>
                <Tab className="tabHeaderSelection">Bench</Tab>
                <Tab className="tabHeaderSelection">Deadlift</Tab>
                <Tab className="tabHeaderSelection">Squat</Tab>
                <Tab className="tabHeaderSelection">Press</Tab>
                <Tab className="tabHeaderSelection">Power Clean</Tab>
                <Tab className="tabHeaderSelection">Power Snatch</Tab>
              </Tabs>
            </div>
              <div className="weightTables">
                <div className="kiloToPounds">
                  <Switch  onChange={() => {this.setState({pounds: !doConvert})}} ripple id="kToP" defaultChecked>
                  {doConvert ? <p className="converter">Pounds</p>: <p className="converter">Kilos</p>}
                  </Switch>
                </div>
                <div className="information">
                  <div className="informationPart"><h5>Untrained: </h5><p>Never tried the exercise!</p></div>
                  <div className="informationPart"><h5>Novice: </h5><p>Done the exercise for some months!</p></div>
                  <div className="informationPart"><h5>Intermediate: </h5><p>Done the exercise for a couple of years!</p></div>
                  <div className="informationPart"><h5>Advanced: </h5><p>Done the exercise for multiple years!</p></div>
                  <div className="informationPart"><h5>Elite: </h5><p>Athlete competing in the sport!</p></div>
                </div>
                <div style={{width: '100%'}}>
                  {this.state.exerciseTab === 0 ? <Bench pounds={doConvert} /> : null}
                  {this.state.exerciseTab === 1 ? <Deadlift pounds={doConvert} /> : null}
                  {this.state.exerciseTab === 2 ? <Squat pounds={doConvert} /> : null}
                  {this.state.exerciseTab === 3 ? <Press pounds={doConvert} /> : null}
                  {this.state.exerciseTab === 4 ? <PowerClean pounds={doConvert} /> : null}
                  {this.state.exerciseTab === 5 ? <PowerSnatch pounds={doConvert} /> : null}
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
