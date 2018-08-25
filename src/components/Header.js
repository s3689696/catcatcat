import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-buttons">
                    <button><FontAwesomeIcon icon={faHome}/></button>
                    <button><FontAwesomeIcon icon={faFolder}/></button>
                </div>
                <div className="Header-title">
                    <h1>CatCatCat</h1>
                </div>
            </div>
        )
    }
}