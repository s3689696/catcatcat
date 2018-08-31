import React from 'react'
import Cabinet from './Cabinet'
import FolderDisplay from './FolderDisplay';

export class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Cabinet />
                <FolderDisplay />
            </div>
        )
    }
}