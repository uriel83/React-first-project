import React from "react";
import propTypes from 'prop-types'

export default class CountDownClass extends React.Component{
    static propTypes = {
        num : propTypes.number.isRequired,
        callBack : propTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.state = {  //לא מומלץ
            timeRemaining: props.num
        }
    }
    componentDidMount(){
        this.intervalID = setInterval(() =>{
            this.setState((prevState) =>{
                console.log(prevState.timeRemaining);
                return{
                    timeRemaining:prevState.timeRemaining -1
                }
            })
        },1000)
    }

    componentWillUnmount(){ //נקיון קומפוננט
        clearInterval(this.intervalID);
    }
    // shouldComponentUpdate()
    componentDidUpdate(prevProps, prevState){
        if (prevState.timeRemaining === 1) {
            this.props.callBack();
        }
        if (prevProps.num !== this.props.num) {
            this.setState({
                timeRemaining : this.props.num
            });
        }
    }

    render(){
        return(
            <h3>{this.state.timeRemaining}</h3>
        )
    }
}