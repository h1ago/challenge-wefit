import React from 'react';
import * as S from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router';
import { Header } from '@/components';

const App = () => {
  return (
    <>
      <S.GlobalStyle />
      <S.Container>
        <Router basename="/">
          <Header />
          <Routes />
        </Router>
      </S.Container>
    </>
  );
};

export default App;
