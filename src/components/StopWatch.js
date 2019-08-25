import React from "react";
import useStopwatch from "../hooks/useStopwatch";
import styled from 'styled-components';

const StyledClock = styled.div`

`;

const StopWatch = () => {
  const { elapsedTime, startTime, stopTime, resetTime } = useStopwatch();

  return (
    <StyledClock>
      <h2>{elapsedTime()}s</h2>
      <button onClick={startTime}>Start</button>
      <button onClick={stopTime}>Stop</button>
      <button onClick={resetTime}>Reset</button>
      <p> ============ </p>
    </StyledClock>
  );
};

export default StopWatch;
