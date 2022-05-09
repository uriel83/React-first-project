import React, {useState} from "react";
import propTypes from 'prop-types'

export default function FunctionEX(props) {
    // const stateArray = useState(props.message);
    // const message = stateArray[0];
    // const setMessage = stateArray[1];
    const [message, setMessage] = useState(props.message) //שורה זו שןןה לשלושת השורות הקודמות

    const changeText = () => {
        setMessage(message + " +done")
    }
    return (
        <React.Fragment>
            <h1>{message}</h1>
            <button onClick={changeText}>Change text F</button>
        </React.Fragment>
    )
}
FunctionEX.propTypes = {
    message: propTypes.string
}
FunctionEX.defaultProps = {
    message : 'this is a default value'
}