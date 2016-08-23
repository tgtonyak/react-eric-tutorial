import {Modal} from 'react-bootstrap'
import React from 'react'

class Mouse extends React.Component{
  render(){
    return(
      <Modal show={this.props.snowday} onHide={this.props.cubagoodingjr.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Goes West
            <a href='#' onClick={this.props.cubagoodingjr.bind(this)}>goes east</a>
        </Modal.Body>
      </Modal>
    )
  }
}

export default Mouse
