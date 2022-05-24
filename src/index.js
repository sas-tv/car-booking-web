import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import App from './app';
import { AppContextProvider } from './app/utils/AppContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <AppContextProvider>
      <Router>
        <App />
      </Router>
    </AppContextProvider>
  </ChakraProvider>
);
