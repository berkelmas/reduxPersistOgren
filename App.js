import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Home from './components/Home';
import {store, persistor} from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Deneme</Text>} persistor={persistor}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Home />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
