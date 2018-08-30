import React from 'react';
import NewFolderButton from './NewFolderButton';
import Website from './Website';

class FolderDisplay extends React.Component {
    render() {
        return(
            <div className="folder-display">
                <h2>FolderName</h2>
                <div className="websites">
                    <Website />
                </div>
            </div>
        )
    }
}

export default FolderDisplay;