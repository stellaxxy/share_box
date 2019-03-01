import React, {Component} from 'react';
import { connect } from 'react-redux';//connect a component to redux;so can update/modify your state
import { changeTextColor, tick } from '../actions';

class Clock extends Component {
    componentDidMount(){
        setInterval(()=>{
            this.props.tick();
            this.props.changeTextColor();
        }, 1000);
    }

    render() {
        //console.log('clock props', this.props);
        const { changeTextColor, currentTime, textColor } = this.props;

        const style = {
            color: textColor,
            cursor: 'pointer'
        };

        return <h1>The Time Is: <span onClick={changeTextColor} style={style}>{currentTime}</span></h1>
    }
}

function mapStateToProps(state){
    return {
        //whatever this function returns gets add to the component props(object); take redux state to your component props; reading the state
        currentTime: state.clock.currentTime,
        textColor: state.theme.textColor
    }
}

export default connect(mapStateToProps, {
    tick: tick,
    changeTextColor: changeTextColor
})(Clock);
//take a callback function
//this page gets loaded and render nothing -> connect function gets called -> actions gets called -> reducers gets called(check the responding type) and return a new state
// -> when state is changed, mapStateToProps gets called -> render gets called