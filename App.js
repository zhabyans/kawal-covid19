import React from 'react';
import FinalProjects from './FinalProjects';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './FinalProjects/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor='#388E3C' barStyle='light-content' />
      <FinalProjects />
    </Provider>
  );
};

export default App;
