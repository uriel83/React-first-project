import React, {useState, useEffect} from "react";

export default function CountDownFunction(props){
    const [timeRemaining, setTimeRemaining] = useState(null); 

    //set the timer
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTimeRemaining(timeRemaining -1)
        }, 1000);
        return () => {
            clearInterval(intervalID);
        }
    });

    //call the callback when we reach zero
    useEffect(() => {
        if (timeRemaining === 0){
            props.callBack();
        }
    });

    //int the state if the props chenge
    useEffect(() => {
        setTimeRemaining(props.num)
        
    }, [props.num]);

    return(
        <h3>{timeRemaining}</h3>
    )
   
}


// useEffect - Hooks : componentDidMount(), componentDidUpdate(), componentWillUnmount()
