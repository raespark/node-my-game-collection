import React, { Component } from 'react';
import classnames from 'classnames';
import './modal.less';

class Modal extends Component {
  render() {
    return (
      <div className={classnames(this.props.className, 'modal')} onClick={this.props.onClick}>
        <div className="modal-container" onClick={this.props.closeModal}>
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
        <div className="modal-background"/>
      </div>
    );
  }
}

export default Modal;
