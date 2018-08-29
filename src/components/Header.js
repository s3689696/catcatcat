import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export class Header extends React.Component {
    render() {
        return (
            <div className="header coloured">
                <div className="header__btns">
                    <FontAwesomeIcon className="header__btn coloured--light" icon={faHome} size="lg"/>
                    <FontAwesomeIcon className="header__btn coloured--light" icon={faFolder} size="lg"/>
                </div>
                <div className="header__title">
                    <img src={require('../cat.svg')} alt="cat logo" height="50px" width="50px"/>
                    <h1>CatCatCat</h1>
                </div>
            </div>
        )
    }
}