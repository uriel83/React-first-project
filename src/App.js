import ClassEX from './components/ClassEX';
import FunctionEX from './components/FunctionEX';
import CountDownClass from './components/CountDownClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello App</h1>
      <div style={{float: 'left', marginLeft: 200, color:'red'}}>
        <ClassEX message="I'm message for classEX"/>
        <CountDownClass num={5} callBack= {() => null}/>
      </div>
      <div style={{float: 'right', marginRight: 200, color:'blue'}}>
      <FunctionEX message={'I am message for FunctionEX'}/>
      </div>
    </div>
  );
}

export default App;
