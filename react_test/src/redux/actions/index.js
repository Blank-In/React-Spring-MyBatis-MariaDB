export const SET_VALUE = 'SET_VALUE';
export const SET_ID = 'SET_ID';

export function setValue(value) {
    return {
        type: SET_VALUE,
        value: value
    }
}

export function setID(id) {
    return {
        type: SET_ID,
        id: id
    }
}