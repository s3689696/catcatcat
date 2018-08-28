import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const Folder = ({ name }) => (
    <div className="folder">
        <FontAwesomeIcon className="folder__icon" icon={faFolderOpen} size="6x"/>
        <p>{name}</p>
    </div>
)

export default Folder;