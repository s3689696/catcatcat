const CREATE_FOLDER = 'CREATE_FOLDER'
const SELECT_FOLDER = 'SELECT_FOLDER'
const ADD_WEBSITE = 'ADD_WEBSITE'

let nextFolderId = 0;
let nextWebsiteId = 0;

export function createFolder(name) {
    return {
        type: CREATE_FOLDER,
        id: nextFolderId++,
        name
    }
}

export function selectFolder(id, name) {
    return {
        type: SELECT_FOLDER,
        id,
        name
    }
}

export function addWebsite(url, folder) {
    return {
        type: ADD_WEBSITE,
        id: nextWebsiteId++,
        url,
        folder
    }
}