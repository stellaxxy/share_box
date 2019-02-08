//we need state for modal: is the modal open or closed?
import React, {Component} from 'react';

class Modal extends Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({
            isOpen: true
        });
    }

    render() {

        if(this.state.isOpen){
            return (
                <h1>The modal is open!</h1>
            );
        }

        return (
            <div>
                <h1>The modal is closed!</h1>
                <button onClick={this.openModal}>Open Modal</button>
            </div>
        );
    }
}

export default Modal;