import { combineReducers } from 'redux';

const initialState = {
    folders: []
}

function handleFolders(state = initialState, action) {
    switch(action.type) {
        case 'CREATE_FOLDER':
            return {
                ...state, folders: [
                    ...state.folders,
                    {
                        id: action.id,
                        name: action.name,
                        selected: false
                    }
                ]
            }
        case 'SELECT_FOLDER':
            return {
                ...state, folders: [
                ...state.folders.map(folder => 
                (folder.id === action.id)
                ? {...folder, selected: !folder.selected}
                : {...folder, selected: false}
                )
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