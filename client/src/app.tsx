import React, { useEffect } from 'react';
import GlobalStyle from './globalStyle';
import Routers from './Router/Routers';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
        <Routers />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
