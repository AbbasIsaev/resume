import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import {App} from './App'
import reportWebVitals from './reportWebVitals'
import {ServiceWorkerWrapper} from './components/ServiceWorker/ServiceWorkerWrapper'
import serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
    <React.StrictMode>
        <ServiceWorkerWrapper serviceWorkerRegistration={serviceWorkerRegistration}/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()