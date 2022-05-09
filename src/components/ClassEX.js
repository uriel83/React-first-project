import React from "react";
import propTypes from 'prop-types'

export default class ClassEX extends React.Component{
    state = { //stateדרך ראשוונה לשנות את ה
        message: 'change Text!!!'
    }
    constructor(props){ //stateדרך שניה לשנות את ה
        super(props);
        this.state = {
            message: 'change Text!!!'
        }
    }
   static propTypes = {
        message : propTypes.string.isRequired
    }
    static defaultProps = {
        message : 'this is a default value'
    }
    changeText = () => {
        // this.setState({   סינטקס לא מומלץ כי הסטייט הוא א-סיכרוני
        //     message:'the nessage hes changed by pressing the button'
        // })
        this.setState((prevState) =>{
            return{
                message: prevState.message + " +done"
            }
        })
    }
    render(){
        return  ( 
        <React.Fragment>
            <h1>{this.state.message}</h1>
            <button onClick={this.changeText}>Change text C</button>
        </React.Fragment>)
        
               
    }

}
   