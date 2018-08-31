import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import { addWebsite } from '../store/actions/actions'

class NewWebsiteButton extends React.Component {
    constructor() {
        super();
        this.state = {
            isClicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.textInput = null;
    }

    handleClick() {
        if(!this.state.isClicked) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState(prevState => ({
            isClicked: !prevState.isClicked
        }));
    }

    handleOutsideClick(e) {
        if(this.node.contains(e.target)) {
            return;
        }
        this.handleClick();
    }

    render() {    
        return(
            <div className="newfolder-input" ref={ node => {this.node = node;}}>
                {!this.state.isClicked && (
                <button className="newfolder-input__btn coloured" onClick={this.handleClick} >
                    <FontAwesomeIcon icon={faPlus} size="3x"/>
                </button>
                )}
                {this.state.isClicked && (
                    <div className="newfolder-input__panel">
                        <form onSubmit={e => {
                            e.preventDefault()
                            this.props.addWebsite(this.textInput.value, this.props.selectedFolder.id)
                            this.handleClick();
                        }}
                        >
                            <input ref={node => this.textInput = node} 
                                type="text"
                                value={this.state.value}
                                autoFocus 
                                placeholder="Enter website url" />
                            <input type="submit" className="simple-btn coloured" value="Add Website"/>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({handleFolders: {selectedFolder}}) => ({
    selectedFolder
});

const mapDispatchToProps = dispatch => ({
    addWebsite: (name, folder) => dispatch(addWebsite(name, folder))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewWebsiteButton);