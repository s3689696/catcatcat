import React from 'react'

export class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-buttons">
                    <button>Home</button>
                    <button>Folders</button>
                </div>
                <div className="Header-title">
                    <h1>CatCatCat</h1>
                </div>
            </div>
        )
    }
}