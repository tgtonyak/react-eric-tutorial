import React from 'react';

import Mouse from './mouse';

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
        <Mouse snowday={this.state.showModal} cubagoodingjr={close}/>

    </div>
  )
 }
}

export default Fieval
