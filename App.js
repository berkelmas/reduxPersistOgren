import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import Home from './components/Home';
import {store} from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Home />
        </View>
      </Provider>
    );
  }
}

export default App;
