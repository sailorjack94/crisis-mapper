import React, { Component } from "react";
import VideoModal from './VideoModal/InfoVideoModal';

class VideoModalContainer extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.showVideoModal = this.showVideoModal.bind(this);
        this.hideVideoModal = this.hideVideoModal.bind(this);
       
    }

    showVideoModal = () => {
        this.setState({ show: true });
    };

    hideVideoModal = () => {
        this.setState({ show: false });
    };
    render() {
        return (
            <main>
                <VideoModal show={this.state.show} handleVideoClose={this.hideVideoModal}>
                    <p>Modal</p>
                </VideoModal>
                <button id = "media"className="btn btn-outline-light" type="button" onClick={this.showVideoModal}>
                    Media
        </button>
            </main>
        );
    }

}
    

    export default VideoModalContainer;
