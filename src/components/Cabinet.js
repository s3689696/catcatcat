import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export class Cabinet extends React.Component {

    createFolder() {
        
    }

    render() {
        return (
            <div className="Cabinet">
                <h2>Folders</h2>
                <button className="add-folder-btn" onClick={this.createFolder}>
                    <FontAwesomeIcon icon={faPlus} size="4x"/>
                </button>
                    
            </div>
        )
    }
}