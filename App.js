// import screens from "./src/screens"

// export default screens.TodoList;
import React, {Component} from 'react';
import Navigation from './src/navigation';
import reducers from './src/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
const store = createStore(reducers);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
export default App;
