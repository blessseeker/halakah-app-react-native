import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import Login from './app/views/login/index';

const App = () => {
  return (
    <ThemeProvider>
      <Login />
    </ThemeProvider>
  );
};

export default App;
