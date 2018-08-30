const CREATE_FOLDER = 'CREATE_FOLDER'
const SELECT_FOLDER = 'SELECT_FOLDER'

let nextFolderId = 0;

export function createFolder(name) {
    return {
        type: CREATE_FOLDER,
        id: nextFolderId++,
        name
    }
}

export function selectFolder(id) {
    return {
    type: SELECT_FOLDER,
    id
    }
}