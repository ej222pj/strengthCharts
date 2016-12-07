import React, { Component } from 'react';
import './App.css';
import { Tabs, Tab } from 'react-mdl';
import Squat from './components/exercise/Squat';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { genderTab: 0 };
    this.state = { exerciseTab: 0 };
  }


  render() {
    //let squat = (this.state.exerciseTab === 1);
    //console.log(squat)
    return (
      <div className="App">
        <div className="gender-tabs">
          <Tabs activeTab={this.state.genderTab} onChange={(tabId) => this.setState({ genderTab: tabId })} ripple>
            <Tab>Male</Tab>
            <Tab>Female</Tab>
          </Tabs>
          <section>
            <div className="exercise-tabs">
              <Tabs activeTab={this.state.exerciseTab} onChange={(tabId) => this.setState({ exerciseTab: tabId })} ripple>
                <Tab>Bench</Tab>
                <Tab>Squat</Tab>
              </Tabs>
              <section>
                <div className="content">
                  {this.state.exerciseTab}
                  {this.state.exerciseTab === 1 ? <Squat /> : null}
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;