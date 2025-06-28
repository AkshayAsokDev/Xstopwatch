
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [hour, setHour] = useState(0);
  const [time, setTime] = useState(0);

  const [start, setStart] = useState(true);
  const [reset, setReset] = useState(false);


  const handleStart = () => {
    setStart(false);
  }

  const handleStop = () => {
    setStart(true);
  }

  const handleReset = () => {
    setReset(true);
  }

  // useeffect
  useEffect(() => {
    
    if(reset === true) {
      setHour(0);
      setTime(0);
      setStart(true);
      setReset(false);
    }

    let timer;
    if(start === false) {

      timer = setInterval(() => {

        const temp = time + 1;

        if (temp === 60) {
          setHour(hour+1);
          setTime(0);
        }
        else {
          setTime(temp);
        }

      }, 1000)
      

    }

    return () => {
      clearInterval(timer);
    }

  }, [hour, time, start, reset])


  return (
    <div className="App">
      
      <h1>Stopwatch</h1>

      <p>{`Time: ${hour}:${time.toString().padStart(2, '0')}`}</p>
      
      {
        start ? (<button onClick={handleStart} >Start</button>) : (<button onClick={handleStop} >Stop</button>)
      }
      <button onClick={handleReset} >Reset</button>

    </div>
  );
}

export default App;
