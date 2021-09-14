import logo from './logo.svg';
import './App.scss';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className="flex" style={{width: "500px", margin: "0 auto"}}>
          <div>
            <h3 className="textAlignCenter">1</h3>  
            <p>ACCOUNT SETUP</p>
          </div>        
          <div>
            <h3 className="textAlignCenter">2</h3>
            <p>SOCIAL PROFILES</p>
          </div>
          <div>
            <h3 className="textAlignCenter">3</h3>
            <p>PERSONAL DETAILS</p>
          </div>
        </div>
      </div>
    );  
  }
}
export default App;
