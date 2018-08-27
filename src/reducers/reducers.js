import { CREATE_FOLDER } from '../actions/actions';

const initialState = {
    folders: []
}

function handleFolders(state = initialState, action) {
    switch(action.type) {
        case CREATE_FOLDER:
            return {
                ...state, folders: [
                    ...state.folders,
                    {
                        name: action.name
                    }
                ]
            }
        default:
            return state;
    }
}

export default handleFolders;