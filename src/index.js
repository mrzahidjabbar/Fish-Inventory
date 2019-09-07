import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import StorePicker from './components/StorePicker'
import App from './components/App'
import './css/style.css'


const Root = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route exactly pattern="/" component={StorePicker} />
                <Route pattern="/store/:studioId" component={App} />
            </switch>
        </BrowserRouter>
    )
}

render(<Root />, document.querySelector('#main'))