import React from 'react'
import {Cabinet} from './Cabinet'

export class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Cabinet />
                <div className="Main-options">
                </div>
            </div>
        )
    }
}