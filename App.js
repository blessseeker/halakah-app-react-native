import React from 'react';
import {Button, ThemeProvider} from 'react-native-elements';

const App = () => {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  );
};

export default App;
