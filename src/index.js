import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'components/App';

import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
