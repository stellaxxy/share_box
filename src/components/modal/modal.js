//we need state for modal: is the modal open or closed?
import React, {Component} from 'react';
import './modal.scss';//when importing css we just put the path here, this css file still affects everything; css is not isolated in this file

class Modal extends Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({
            isOpen: true
        });
    };

    closeModal = () => {
        this.setState({
            isOpen: false
        });
    };
//when we call the setState method, it will call the render automatically afterwards
    //render is called after the state is updated
    //setState is asynchronous; when we call this.state after call this.setState, the state might not show what you expect; because the this.state might happen before this.setState: asynchronous
    render() {
        console.log('isOpen is: ', this.state.isOpen);
        if(this.state.isOpen){
            return (
                //when use position fixed/absolute, the width of div shrink down to what your content's width
                <div className="modal">
                    <div className="modal-content">
                        <h1>This is the Modal</h1>

                        <div className="modal-actions">
                            <button onClick={this.closeModal}>Confirm</button>
                        </div>
                        <div></div>
                    </div>
                </div>
            );
        }

        return (
            <button className="modal-open" onClick={this.openModal}>Open Modal</button>

        );
    }
}

export default Modal;