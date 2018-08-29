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
                        name: action.name
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