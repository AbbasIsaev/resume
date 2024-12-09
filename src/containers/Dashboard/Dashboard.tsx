import React, {FC} from 'react'

import './Dashboard.css'
import {About, Contact, Footer, Logos, Masthead, Navigation, Projects, Skills} from './Element'

export const Dashboard: FC = () => (
    <div id="page-top">
        <Navigation/>
        <Masthead/>
        <Skills/>
        <Logos/>
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
)