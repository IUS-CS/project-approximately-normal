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
            <table className="table">
              <thead>
              <tr>
                <th>Heading</th>
                <th>Example</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <p>
                    <code className="h5">This is where you would put column one</code>
                  </p>
                </td>
                <td>
                  <span className="h5">This is where you would put column two</span>
                </td>
              </tr>
              </tbody>
            </table>
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
