import React, { Component } from 'react';
import styles from './Recruitment.module.css'

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
      <div className="animated fadeIn">
        <div className="card">
          <form onSubmit={this.mySubmitHandler}>
            <div>

              <div className="card-header">
                <span className={styles.headerText}>Recruitment Form</span>
              </div>
              <br></br>
              <div className={styles.rowInput}>
                <div className={styles.areaOfInput}>
                  <div className={styles.labels}>First Name</div>
                  <input
                    type='text'
                    onChange={this.myChangeHandler}
                  />
                </div>
                <div className={styles.areaOfInput}>
                  <div className={styles.labels}>Last Name</div>
                  <input
                    type='text'
                    onChange={this.myChangeHandler}
                  /></div>
              </div>
              <br></br>
              <div className={styles.rowInput}>
                <div className={styles.areaOfInput}>
                  <div className={styles.labels}>School Email</div>
                  <input
                    type='text'
                    onChange={this.myChangeHandler}
                  />
                </div>
                <div className={styles.areaOfInput}>
                  <div className={styles.labels}>
                    Graduation Year
              </div>
                  <input
                    type='text'
                    onChange={this.myChangeHandler}
                  />
                </div>
              </div>
              <br></br>
              <div className={styles.seperatorText}>Indicate below, games you are interested in:</div>
              <div>
                <label className={styles.checkBoxArea}>
                  <input className={styles.chb}
                    type='checkbox'
                    onChange={this.myChangeHandler}
                  /> <div className={styles.label}>Leage Of Legends</div>
                </label>
              </div>
              <div>
                <label className={styles.checkBoxArea}>
                  <input className={styles.chb}
                    type='checkbox'
                    onChange={this.myChangeHandler}
                  /> <div className={styles.label}>Fortnite</div>
                </label>
              </div>
              <div>
                <label className={styles.checkBoxArea}>
                  <input className={styles.chb}
                    type='checkbox'
                    onChange={this.myChangeHandler}
                  /> <div className={styles.label}>Counter Strike: Global Offensive</div>
                </label>
              </div>
              <div>
                <label className={styles.checkBoxArea}>
                  <input className={styles.chb}
                    type='checkbox'
                    onChange={this.myChangeHandler}
                  /> <div className={styles.label}>DOTA 2</div>
                </label>
              </div>
              <div>
                <label className={styles.checkBoxArea}>
                  <input className={styles.chb}
                    type='checkbox'
                    onChange={this.myChangeHandler}
                  /> <div className={styles.label}>Overwatch</div>
                </label>
              </div>
              <div>
                <label className={styles.checkBoxArea}>
                  <input className={styles.chb}
                    type='checkbox'
                    onChange={this.myChangeHandler}
                  /> <div className={styles.label}>Minecraft</div>
                </label>
              </div>
              <div>
                <label className={styles.checkBoxArea}>
                  <input className={styles.chb}
                    type='checkbox'
                    onChange={this.myChangeHandler}
                  /> <div className={styles.label}>FIFA 20</div>
                </label>
              </div>
              <div>
                <label className={styles.checkBoxArea}>
                  <input className={styles.chb}
                    type='checkbox'
                    onChange={this.myChangeHandler}
                  /> <div className={styles.label}>APEX Legends</div>
                </label>
              </div>
              <div>
                <label className={styles.checkBoxArea}>
                  <input className={styles.chb}
                    type='checkbox'
                    onChange={this.myChangeHandler}
                  /> <div className={styles.label}>Call of Duty - Modern Warfare</div>
                </label>
              </div>

              <br></br>
              <div className={styles.rowInput}>
                <div className={styles.areaOfInput}>
                  <div className={styles.labels}>Other Games:</div>
                  <input className={styles.bigInput}
                    type='text'
                    onChange={this.myChangeHandler}
                  />
                </div>
              </div>
              <br></br>
              <br></br>
              <input className={styles.submitButton}
                type='submit'
              /></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Dashboard;