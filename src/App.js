import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Modal from 'react-modal';  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    }

  // handleModalClose = () => {
  //   this.setState({
  //     isModalOpen: false
  //   })
  // }

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
          {/* <div>
          <button type="button" onClick={handleOpen}>
            Open Modal
          </button> */}
          {/* <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={this.handleModalClose}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal> */}
          {/* </div> */}
        </div>
      </div>
    );  
  }
}
export default App;
