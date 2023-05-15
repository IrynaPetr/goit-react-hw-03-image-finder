import { Overlay, Modal } from "./Modal.styled";
import React, { Component } from "react";

export class ModalWindow extends Component {
  onKeyDown = e  => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.terget) {
      this.props.closeModal();
    }};

    componentDidMount() {
      window.addEventListener('keydown', this.onKeyDown);
    }
  
    componentWillUnmount() {
      window.removeEventListener('keydown', this.onKeyDown);
    }

    render() {
      return (
        <Overlay onClick={this.onBackdropClick}>
            <Modal>
              <img src={this.props.url} alt=""/>
            </Modal>
        </Overlay>
      );
    }
};