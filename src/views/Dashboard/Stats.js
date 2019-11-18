import React, {Component} from 'react';
import {
  Col,
  Progress,
} from 'reactstrap';

class Stat extends Component {

    render(){
        return (
            <Col sm={12} md className="mb-sm-2 mb-0">
                <div className="text-muted">{this.props.Title}</div>
                <strong>{this.props.Numeric} {this.props.Type} ({this.props.Percent}%)</strong>
                <Progress className="progress-xs mt-2" color="info" value={this.props.Percent} />
            </Col>
        )
    }
}

export default Stat;
