import React from 'react'
import Cabinet from './Cabinet'

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Cabinet />
                <div className="main-options">
                </div>
            </div>
        )
    }
}