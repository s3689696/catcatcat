import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-btns">
                    <FontAwesomeIcon className="Header-btn" icon={faHome} size="lg"/>
                    <FontAwesomeIcon className="Header-btn" icon={faFolder} size="lg"/>
                </div>
                <h1 className="Title">CatCatCat</h1>
            </div>
        )
    }
}