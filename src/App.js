import React from 'react';
import styled from 'styled-components';
import style from './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TaskApp from './components/TaskApp'

//Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

//Reducers
import reducer from './stateManager/reducers/index.js';

const appLogger = createLogger();

const store = createStore(
    reducer,
    applyMiddleware(appLogger, thunkMiddleware)
);

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0; margin: 0;

    background: linear-gradient(45grad, #5BBABE, #5BBABE, #93D3D2);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

class App extends React.Component {
    render() {
        return (
            <Body>
                <Provider store={store}>
                    <MuiThemeProvider>
                        <TaskApp />
                    </MuiThemeProvider>
                </Provider>
            </Body>
        );
    }
}

export default App;