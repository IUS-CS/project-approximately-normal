import React, {Component} from 'react';
import Calendar from 'react-calendar';
class Dashboard extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      date: new Date(),
      events: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/v1/event/')
    .then(res => res.json())
    .then((data) => {
      console.log(data["content"])
      for(var thing in data["content"])
      {
        this.setState(prevState => ({
          events: [...prevState.events, data["content"][thing]]
        }))
      }
    })
    .catch(console.log)
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
  onChange = date => this.setState({ date })
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.state.getSpecificEvents}
        />
        <div className= "card-body">
        <p>
          {this.state.events.map((result, i) => (
            <li key={i}>{result.description}</li>
          ))}
        </p>
        </div>
      </div>
    );
  }
}


export default Dashboard;