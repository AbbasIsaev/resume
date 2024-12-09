import React, {useEffect, useState} from 'react'

import example from '../example.json'
import {IMasthead} from '../../../types/interfaces'

export const Masthead = () => {
    const [masthead, setMasthead] = useState<IMasthead>(
        {
            title: '',
            description: ''
        }
    )

    useEffect(() => {
        setMasthead(example.masthead)
    }, [])

    return (
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">{masthead.title}</div>
                <div className="masthead-heading">{masthead.description}</div>
            </div>
        </header>
    )
}