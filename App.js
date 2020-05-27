import screens from "./src/screens"
import React, { Component } from 'react'
import reducers from "./src/reducers"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <PersistGate persistor={persistor}>
                    <screens.TodoList />
                </PersistGate>
            </Provider>
        );
    }
}
export default App;
