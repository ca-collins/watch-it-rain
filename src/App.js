import React from 'react';
import styled from 'styled-components';

import Header from './components/Header'
import EarningsForm from './components/EarningsForm'
import WatchItRain from './components/WatchItRain'
import Clock from './components/Clock'
import Controls from './components/Controls'

const StyledApp = styled.div`
`;


function App() {
  return (
    <StyledApp className="App">
      <Header />
      <EarningsForm />
      <WatchItRain />
      <Clock />
      <Controls />
    </StyledApp>
  );
}

export default App;
