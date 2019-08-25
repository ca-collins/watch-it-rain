import React from 'react';
import styled from 'styled-components';

import Header from './components/Header'
import EarningsForm from './components/EarningsForm'
import WatchItRain from './components/WatchItRain'
import StopWatch from './components/StopWatch'

const StyledApp = styled.div`
`;


function App() {
  return (
    <StyledApp className="App">
      <Header />
      <EarningsForm />
      <WatchItRain />
      <StopWatch />
    </StyledApp>
  );
}

export default App;
