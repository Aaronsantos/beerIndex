import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppLayout from './components/containers/AppLayout'



const App = () => {

  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
