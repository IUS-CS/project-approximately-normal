import React, {Component} from 'react';
import Chart from '../Charts/Chart.js';


class Dashboard extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      // This is stuff to start a home/readme/intro for the IUS website. User beware :D
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            Welcome!
          </div>
          <div className="card-body">
            <p>This is the IUS ESports Club's website. There will be more stuff here eventually. Or maybe not, who knows.</p>
            <p>We offer a centralized place for recruitment, statistics, and tournament information for the IUS e-sports club. This site will attempt to provide a meaningful way for casual and competitive gamers alike to bond and compete against eachother in local tournaments</p>
          </div>
        </div>
        <div className="card"></div>

        <Chart time="Days" title="Traffic"/>
        <Chart time="Months" title="Data"/>
        <Chart time="Years" title="Popularity"/>

      </div>
    );
  }
}

export default Dashboard;
