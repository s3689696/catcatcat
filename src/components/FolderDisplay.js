import { connect } from 'react-redux';
import Websites from './Websites';

const mapStateToProps = ({handleFolders: {websites, selectedFolder}}) => ({
    websites,
    selectedFolder
});

const FolderDisplay = connect(
    mapStateToProps
)(Websites)

export default FolderDisplay;