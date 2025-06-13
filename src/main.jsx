import { Elements } from '@stripe/react-stripe-js';
import { StrictMode } from 'react' // Projeto Rodolfo -- import React from 'react'--
import { createRoot } from 'react-dom/client' //  Projeto Rodolfo -- import ReactDom from 'react-dom/client'--
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import stripePromise from './config/stripeConfig';
import AppProvider from './hooks';
import { Router } from './routes';
import GlobalStyles from './styles/globalStyles'
import { standardTheme } from './styles/themes/standard';

createRoot(document.getElementById('root')).render( 

  <StrictMode>
    <ThemeProvider theme={standardTheme}>
    <AppProvider>
      <Elements stripe={stripePromise}>
      <BrowserRouter>
          <Router/>
      </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme='colored' />
    </AppProvider>
    </ThemeProvider>
  </StrictMode>,
); 
