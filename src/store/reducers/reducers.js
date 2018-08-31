import { combineReducers } from 'redux';

const initialState = {
    folders: [],
    websites: [],
    selectedFolder: {}
}

function handleFolders(state = initialState, action) {
    switch(action.type) {
        case 'CREATE_FOLDER':
            return {
                ...state, folders: [
                    ...state.folders,
                    {
                        id: action.id,
                        name: action.name
                    }
                ]
            }
        case 'SELECT_FOLDER':
            return {
                ...state, selectedFolder: {
                    id: action.id,
                    name: action.name
                }
            }
        case 'ADD_WEBSITE':
            return {
                ...state, websites: [
                    ...state.websites,
                    {   
                        id: action.id,
                        folder: action.folder,
                        url: action.url
                    }
                ]
            }
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    handleFolders
})

export default rootReducer;