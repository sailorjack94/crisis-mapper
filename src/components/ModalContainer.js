import React, { Component } from "react";
import Modal from './modal/InfoModal';

class ModalContainer extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <p>Modal</p>
                </Modal>
                <button className="btn btn-outline-light" type="button" onClick={this.showModal}>
                    More Info
        </button>
            </main>
        );
    };
};

export default ModalContainer;