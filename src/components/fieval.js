import React from 'react';

import {Modal} from 'react-bootstrap'

class Fieval extends React.Component{
  constructor(){
    super();
    this.state={
      showModal: false
    };
  }

handleClick(){
  //talk about this
  this.setState({
    showModal: true

  });
}

 render(){
   const close = () => this.setState({showModal: false});
   return(
    <div>
        <button onClick={this.handleClick.bind(this)}>Fieval</button>

        <Modal show={this.state.showModal} onHide={() => this.setState({showModal: false})}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

          <Modal.Body>
            Goes West
          </Modal.Body>
        </Modal>
    </div>
  )
 }
}

export default Fieval
