import React, {Component} from 'react';
import { connect } from 'react-redux';//connect a component to redux;so can update/modify your state
import { tick } from '../actions';

class Clock extends Component {
    componentDidMount(){
        setInterval(this.props.tick, 1000);
    }

    render() {
        console.log('Clock Props:', this.props);
        return <h1>The Time Is: {this.props.currentTime}</h1>
    }
}

function mapStateToProps(state){
    return {
        //whatever this function returns gets add to the component props(object); take redux state to your component props; reading the state
        currentTime: state.clock.currentTime,
    }
}

export default connect(mapStateToProps, { tick: tick })(Clock);
//take a callback function