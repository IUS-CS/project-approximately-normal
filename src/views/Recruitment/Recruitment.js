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
              <div className={styles.checkBoxSection}> 
              <input
                type='checkbox'
                onChange={this.myChangeHandler}
              /> <div className={styles.checkBoxLabels}>League of Legends</div>
              </div>
              <div className={styles.checkBoxSection}> 
              <input
                type='checkbox'
                onChange={this.myChangeHandler}
              /> <div className={styles.checkBoxLabels}>Fortnite</div>
              </div>
              <div className={styles.checkBoxSection}> 
              <input
                type='checkbox'
                onChange={this.myChangeHandler}
              /> <div className={styles.checkBoxLabels}>Counter Strike: Golbal Offensive</div>
              </div>
              <div className={styles.checkBoxSection}> 
              <input
                type='checkbox'
                onChange={this.myChangeHandler}
              /> <div className={styles.checkBoxLabels}>DOTA 2</div>
              </div>
              <div className={styles.checkBoxSection}> 
              <input
                type='checkbox'
                onChange={this.myChangeHandler}
              /> <div className={styles.checkBoxLabels}>Overwatch</div>
              </div>
              <div className={styles.checkBoxSection}> 
              <input
                type='checkbox'
                onChange={this.myChangeHandler}
              /> <div className={styles.checkBoxLabels}>Minecraft</div>
              </div>
              <div className={styles.checkBoxSection}> 
              <input
                type='checkbox'
                onChange={this.myChangeHandler}
              /> <div className={styles.checkBoxLabels}>FIFA20</div>
              </div>
              <div className={styles.checkBoxSection}> 
              <input
                type='checkbox'
                onChange={this.myChangeHandler}
              /> <div className={styles.checkBoxLabels}>APEX Legends</div>
              </div>
              <div className={styles.checkBoxSection}> 
              <input
                type='checkbox'
                onChange={this.myChangeHandler}
              /> <div className={styles.checkBoxLabels}>Call of Duty - Modern Warfare</div>
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
