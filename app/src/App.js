import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { SnackbarProvider } from 'notistack';
import TestPage from './components/TestPage';
import DataProvider from './providers/DataProvider';
import ThemeProvider from './providers/ThemeProvider';
import Routes from './Pages/routes';

const App = () => (
  <CssBaseline>
    <DataProvider>
      <ThemeProvider>
        <SnackbarProvider
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </DataProvider>
  </CssBaseline>
);

export default App;
