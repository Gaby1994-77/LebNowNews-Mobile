import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import MainNavigation from './src/navigation/MainNavigation';
import Toast from 'react-native-toast-message';
import BootSplash from 'react-native-bootsplash';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    const init = async () => {};
    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
      <Toast />
    </Provider>
  );
};

export default App;
