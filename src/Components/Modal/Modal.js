import React, { Component } from 'react';
import classnames from 'classnames';
import './modal.less';

class Modal extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, 'modal')} onClick={this.props.onClick}>
        <div className="modal-content">
          {this.props.children}
        </div>
        <div className="modal-background" onClick={this.props.closeModal}/>
      </div>
    );
  }
}

export default Modal;
