import React , {useState} from 'react';
import ClassEX from './components/ClassEX';
import FunctionEX from './components/FunctionEX';
import CountDownClass from './components/CountDownClass';
import CountDownFunction from './components/CountDownFunction';
import './App.css';

function App() {
  const [isClassCountDown, setIsClassCountDown] = useState(true);
  const [isFunctionCountDown, setIsFunctionCountDown] = useState(true);

  const removeClassCountDown = () => {
    setIsClassCountDown(false);
  }

  const removeFunctionCountDown = () => {
    setIsFunctionCountDown(false);
  }

  return (
    <div className="App">
      <h1>hello App</h1>
      <div style={{float: 'left', marginLeft: 20, color:'red'}}>
        <ClassEX message="I'm message for classEX"/>
        {isClassCountDown && <CountDownClass num={5} callBack= {removeClassCountDown}/>}
      </div>
      <div style={{float: 'right', marginRight: 20, color:'blue'}}>
      <FunctionEX message={'I am message for FunctionEX'}/>
      {isFunctionCountDown && <CountDownFunction num={5} callBack= {removeFunctionCountDown}/>}
      </div>
    </div>
  );
}

export default App;
