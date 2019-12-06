import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';
import Stat from '../Dashboard/Stats.js';
import chartData from '../../logic/Chart-Data/ChartData.js';
import chartOps from '../../logic/Chart-Data/ChartOps.js';

class Chart extends Component {

  render() {
    return (
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">{this.props.title}</CardTitle>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={chartData(this.props.time)} options={chartOps()} height={300} />
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
    );
  }

}

export default Chart;
