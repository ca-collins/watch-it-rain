import {useState} from "react";

const useStopwatch = () => {
  const [elapsed, setElapsed] = useState(0);
  const [ticker, setTicker] = useState(null);

  const update = () => {
    const start = elapsed > 0 ? Date.now() - elapsed : Date.now();
    setTicker(setInterval(() => setElapsed(Date.now() - start), 100));
  };

  const elapsedTime = () => {
    console.log("ELAPSED!")
    return ((elapsed / 1000).toFixed(1))
  }

  const startTime = () => {
    console.log("START!")
    update()
  }

  const stopTime = () => {
    console.log("STOP!")
    clearInterval(ticker)
  }

  const resetTime = () => {
    console.log("RESET!")
    setElapsed(0)
  }

  return {
    elapsedTime,
    startTime,
    resetTime,
    stopTime
  };
}

export default useStopwatch;
