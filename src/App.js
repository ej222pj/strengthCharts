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
    return (
      <div className="App">
        <div className="content">
            <div className="exercise-tabs">
              <Tabs className="tabHeader" activeTab={this.state.exerciseTab} onChange={(tabId) => this.setState({ exerciseTab: tabId })} ripple>
                <Tab className="tabHeader">Bench</Tab>
                <Tab className="tabHeader">Deadlift</Tab>
                <Tab className="tabHeader">Squat</Tab>
                <Tab className="tabHeader">Press</Tab>
                <Tab className="tabHeader">Power Clean</Tab>
                <Tab className="tabHeader">Power Snatch</Tab>
              </Tabs>
              <div className="kiloToPounds">
                <Switch  onChange={() => {this.setState({pounds: !this.state.pounds})}} ripple id="kToP" defaultChecked>
                {this.state.pounds ? <p className="converter">Pounds</p>: <p className="converter">Kilos</p>}
                </Switch>
              </div>
              <div style={{width: '100%'}}>
                {this.state.exerciseTab === 0 ? <Bench pounds={this.state.pounds} /> : null}
                {this.state.exerciseTab === 1 ? <Deadlift pounds={this.state.pounds} /> : null}
                {this.state.exerciseTab === 2 ? <Squat pounds={this.state.pounds} /> : null}
                {this.state.exerciseTab === 3 ? <Press pounds={this.state.pounds} /> : null}
                {this.state.exerciseTab === 4 ? <PowerClean pounds={this.state.pounds} /> : null}
                {this.state.exerciseTab === 5 ? <PowerSnatch pounds={this.state.pounds} /> : null}
              </div>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
