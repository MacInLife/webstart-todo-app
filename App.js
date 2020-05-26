import screens from './src/screens';

//export default screens.TodoList;
import React, {Component} from 'react';
import reducers from './src/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(reducers, composeWithDevTools());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <screens.TodoList />
      </Provider>
    );
  }
}
export default App;
