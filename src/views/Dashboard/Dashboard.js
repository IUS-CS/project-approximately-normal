import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';
import Stat from './Stats.js';
import chartData from '../../logic/Chart-Data/ChartData.js'
import chartOps from '../../logic/Chart-Data/ChartOps.js'


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

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


        
        
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Traffic</CardTitle>
                    <div className="small text-muted">November 2015</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={chartData()} options={chartOps()} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Stat Title="Visits" Numeric="29,703" Type="Users" Percent="40" /> 
                  <Stat Title="Unique" Numeric="24,093" Type="Users" Percent="20" />
                  <Stat Title="Page views" Numeric="78,706" Type="Views" Percent="60" />
                  <Stat Title="Bounce Rate" Type="Average Rate" Percent="40" />
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
