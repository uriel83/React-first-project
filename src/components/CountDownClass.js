import React from "react";
import propTypes from 'prop-types'

export default class CountDownClass extends React.Component{
    static propTypes = {
        num : propTypes.number.isRequired,
        CallBack : propTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.state = {  //לא מומלץ
            timeRemaining: props.num
        }
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState((prevState) =>{
                console.log(prevState.timeRemaining);
                return{
                    timeRemaining:prevState.timeRemaining -1
                }
            })
        },1000)
    }
    render(){
        return(
            <h3>{this.state.timeRemaining}</h3>
        )
    }
}