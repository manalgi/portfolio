import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@mui/material-pigment-css/styles.css';

import App from './App.tsx';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
);
