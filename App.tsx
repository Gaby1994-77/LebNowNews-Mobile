import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import MainNavigation from './src/navigation/MainNavigation';
import Toast from 'react-native-toast-message';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
  return (
    <Provider store={store}>
      <MainNavigation />
      <Toast />
    </Provider>
  );
};

export default App;
