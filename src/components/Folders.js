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
                            <Folder
                                id={folder.id}
                                name={folder.name}
                                selected={folder.selected}
                            />
                        )
                    })}
                    <NewFolderButton /> 
                </div>
            </div>
        )
    }
}

export default Folders;