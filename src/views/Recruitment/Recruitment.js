import React, {Component} from 'react';

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
        <form onSubmit={this.mySubmitHandler}>
      <h1>Hi Potential Group Member!</h1>
      <br></br>
      <p>Want to Join? Give us your first and last name</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <br></br>
      <br></br>
      <p>As well as your email</p>
    <input
        type='text'
        onChange={this.myChangeHandler}
    />
      <input
        type='submit'
      />
      </form>
    );
  }
}

export default Dashboard;
