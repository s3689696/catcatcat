import React from 'react';
import Folder from './Folder';
import NewFolderButton from './NewFolderButton';

class Folders extends React.Component {
    render() {
        return(
            <div className="folders">
                <h2>Folders</h2>
                <div className="drawer">
                    {this.props.folders.map(folder => {
                        return(
                            <Folder name={folder.name}/>
                        )
                    })}
                    <NewFolderButton /> 
                </div>
            </div>
        )
    }
}

export default Folders;