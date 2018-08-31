import React from 'react';
import NewWebsiteButton from './NewWebsiteButton';
import Website from './Website';
import { selectFolder } from '../store/actions/actions';

class Websites extends React.Component {
    render() {
        return(
            <div className="folder-display">
                <h2>{this.props.selectedFolder.name}</h2>
                <div className="websites">
                    {this.props.websites.map(website => {
                            if(website.folder === this.props.selectedFolder.id) {
                            return(
                                <Website 
                                    url={website.url}
                                />
                            )
                        }
                    })}
                    <NewWebsiteButton />
                </div>
            </div>
        )
    }
}

export default Websites;