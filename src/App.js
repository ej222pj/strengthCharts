import React, { Component } from 'react';
import './App.css';
import { Tabs, Tab, Switch } from 'react-mdl';
import Squat from './components/exercise/Squat';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { exerciseTab: 0 };
    this.state = { pounds: false };
  }


  render() {
    //let squat = (this.state.exerciseTab === 1);
    //console.log(squat)
    return (
      <div className="App">
        <div className="content">
            <div className="exercise-tabs">
              <Tabs className="tabHeader" activeTab={this.state.exerciseTab} onChange={(tabId) => this.setState({ exerciseTab: tabId })} ripple>
                <Tab className="tabHeader">Bench</Tab>
                <Tab className="tabHeader">Squat</Tab>
              </Tabs>
              <div className="kiloToPounds">
                <Switch  onChange={() => {this.setState({pounds: !this.state.pounds})}} ripple id="kToP" defaultChecked>
                {this.state.pounds ? <p className="converter">Pounds</p>: <p className="converter">Kilos</p>}
                </Switch>
              </div>
              <div style={{width: '100%'}}>
                {this.state.exerciseTab === 1 ? <Squat pounds={this.state.pounds} /> : null}
              </div>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
