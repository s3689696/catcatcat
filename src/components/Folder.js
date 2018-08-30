import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import { selectFolder } from '../store/actions/actions'
import { checkSelected } from '../utils'

class Folder extends React.Component { 
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.selectFolder(this.props.id)
    }

    

    render() {
        return (
            <div className={checkSelected(this.props.selected)} onClick={this.handleClick}>
                <FontAwesomeIcon className="folder__icon" icon={faFolderOpen} size="6x"/>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    selectFolder: id => dispatch(selectFolder(id))
})

export default connect(
    null,
    mapDispatchToProps
)(Folder);