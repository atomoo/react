/**
 * @file
 * @author
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './app';
// ReactDOM.render(<App/>, document.querySelector('#root'));
const rootEl = document.querySelector('#root');
const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEl
    );
render(App);
if (module.hot) {
    module.hot.accept('./app', () => {
        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>,
            rootEl
        );
    });
}
