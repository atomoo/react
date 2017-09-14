import React from 'react'

function isPromise(obj) {
    return Object.prototype.toString.call(obj) === '[object Promise]'
}

export default function asyncComponent (getComponent) {
    return class AsyncComponent extends React.Component {

        constructor() {
            super();
            this.state = {
                component: null
            }
        }

        componentWillMount() {
            !this.state.component 
            && getComponent()
                .then(mod => mod.__esModule ? mod.default : mod)
                .then(component => this.setState({component}))
        }

        render() {
            let Component = this.state.component;
            return Component ? <Component/> : null;
        }
    }
}