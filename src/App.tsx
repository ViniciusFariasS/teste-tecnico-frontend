import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router';
import { StoreContextProvider } from './context/storeContext';

function App() {
  return (
    <BrowserRouter>
      <StoreContextProvider>
        <Router />
      </StoreContextProvider>
    </BrowserRouter>
  );
}

export default App;
