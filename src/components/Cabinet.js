import { connect } from 'react-redux';
import Folders from './Folders';

const mapStateToProps = ({handleFolders: {folders}}) => ({
    folders
});

const Cabinet = connect(
    mapStateToProps
)(Folders);

export default Cabinet;