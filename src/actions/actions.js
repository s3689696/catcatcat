const CREATE_FOLDER = 'CREATE_FOLDER'

export function createFolder(name) {
    return {
        type: CREATE_FOLDER,
        name
    }
}