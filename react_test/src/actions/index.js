export const SET_VALUE='SET_VALUE';

export function setValue(value){
    return{
        type: SET_VALUE,
        value: value
    }
}